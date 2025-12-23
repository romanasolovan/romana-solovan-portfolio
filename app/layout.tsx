import type { Metadata } from "next";
import { Inter, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Site/Header";
import Footer from "@/components/Site/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"), // set after deploy
  title: "Romana Solovan",
  description:
    "Portfolio of Romana Solovan, front-end developer building clean, responsive and accessible web interfaces.",
  openGraph: {
    title: "Romana Solovan | Front-End Developer",
    description:
      "Projects, skills, and contact info for Romana Solovan — front-end developer.",
    url: "https://your-domain.com",
    siteName: "Romana Solovan Portfolio",
    locale: "en_US",
    type: "website",
    // images: ["/og.png"], // add later if you create og image
  },
  twitter: {
    card: "summary_large_image",
    title: "Romana Solovan | Front-End Developer",
    description:
      "Portfolio of Romana Solovan, front-end developer building modern UI.",
    // images: ["/og.png"], // add later
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fraunces.variable} ${geistMono.variable} antialiased`}
      >
        <div className="appShell">
          <Header />
          <main className="appMain">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
