import { NextResponse } from "next/server";

type SuccessResponse = { ok: true };
type ErrorResponse = { error: string; details?: string };

function isProbablyEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Prevent spreadsheet formula injection
function escapeForSheet(value: string): string {
  const v = value.trim();
  if (!v) return v;
  const first = v[0];
  if (first === "=" || first === "+" || first === "-" || first === "@") {
    return "'" + v;
  }
  return v;
}

function asNonEmptyString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function asOptionalString(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

export async function POST(req: Request) {
  try {
    const raw: unknown = await req.json();

    if (typeof raw !== "object" || raw === null) {
      return NextResponse.json<ErrorResponse>(
        { error: "Invalid payload" },
        { status: 400 },
      );
    }

    const body = raw as Record<string, unknown>;

    const name = asNonEmptyString(body.name);
    const email = asNonEmptyString(body.email);
    const message = asNonEmptyString(body.message);

    if (!name || name.length < 2 || name.length > 80) {
      return NextResponse.json<ErrorResponse>(
        { error: "Invalid name" },
        { status: 400 },
      );
    }
    if (!email || !isProbablyEmail(email) || email.length > 120) {
      return NextResponse.json<ErrorResponse>(
        { error: "Invalid email" },
        { status: 400 },
      );
    }
    if (!message || message.length < 10 || message.length > 2000) {
      return NextResponse.json<ErrorResponse>(
        { error: "Message is invalid" },
        { status: 400 },
      );
    }

    const topic = asOptionalString(body.topic);
    const howDidYouFind = asOptionalString(body.howDidYouFind);
    const pageUrl = asOptionalString(body.pageUrl);

    const scriptUrl = process.env.GOOGLE_SCRIPT_WEB_APP_URL;
    const token = process.env.CONTACT_FORM_TOKEN;

    if (!scriptUrl || !token) {
      return NextResponse.json<ErrorResponse>(
        { error: "Server not configured" },
        { status: 500 },
      );
    }

    const nowIso = new Date().toISOString();

    const forwardPayload = {
      token,
      createdAt: nowIso,
      source: "portfolio",
      name: escapeForSheet(name),
      email: escapeForSheet(email),
      topic: escapeForSheet(topic ?? ""),
      howDidYouFind: escapeForSheet(howDidYouFind ?? ""),
      message: escapeForSheet(message),
      pageUrl: escapeForSheet(pageUrl ?? ""),
      userAgent: escapeForSheet(req.headers.get("user-agent") ?? ""),
    };

    const upstreamRes = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(forwardPayload),
    });

    const text = await upstreamRes.text();

    if (!upstreamRes.ok) {
      return NextResponse.json<ErrorResponse>(
        {
          error: "Google script rejected the request",
          details: text.slice(0, 300),
        },
        { status: 502 },
      );
    }

    return NextResponse.json<SuccessResponse>({ ok: true });
  } catch (err: unknown) {
    const details = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json<ErrorResponse>(
      { error: "Unexpected error", details },
      { status: 500 },
    );
  }
}
