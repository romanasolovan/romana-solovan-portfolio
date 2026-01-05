import ContactSection from "@/components/Sections/ContactSection/ContactSection";
import css from "./ContactPage.module.css";

export const metadata = {
  title: "Contact | Romana Solovan",
  description:
    "Get in touch with Romana Solovan for project inquiries and collaborations.",
};

export default function ContactPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Get In Touch</h1>
        <p className="page-subtitle">
          Let&apos;s discuss your next project or opportunity
        </p>
      </div>

      <div className="page-content">
        {/* Contact Methods */}
        <ContactSection showViewMore={false} />

        {/* Resume Download Section */}
        <section className={`section section-darker ${css.resumeSection}`}>
          <div className={`section-container ${css.resumeContainer}`}>
            <h2 className={css.resumeTitle}>Download My Resume</h2>
            <p className={css.resumeDescription}>
              Interested in my experience and qualifications? Download my resume
              to learn more about my professional background.
            </p>
            <a
              href="/portfolioCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={css.downloadButton}
            >
              <svg
                className={css.iconDownload}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
              <svg
                className={css.iconArrow}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
