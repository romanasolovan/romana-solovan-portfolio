"use client";

import React, { useState } from "react";
import css from "./ContactPage.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    howDidYouFind: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build mailto link with form data
    const subject = formData.topic
      ? `${formData.topic} - Message from ${formData.name}`
      : `Message from ${formData.name}`;

    const body = `
Name: ${formData.name}
Email: ${formData.email}
${formData.topic ? `Topic: ${formData.topic}` : ""}
${formData.howDidYouFind ? `How they found me: ${formData.howDidYouFind}` : ""}

Message:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:solo.rv95@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  // Contact methods - minimalistic with 3 options
  const contactMethods = [
    {
      icon: (
        <svg
          className={css.methodIcon}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "Email",
      value: "solo.rv95@gmail.com",
      link: "mailto:solo.rv95@gmail.com",
    },
    {
      icon: (
        <svg className={css.methodIcon} fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
      label: "GitHub",
      value: "romanasolovan",
      link: "https://github.com/romanasolovan",
    },
    {
      icon: (
        <svg className={css.methodIcon} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: "LinkedIn",
      value: "Romana Solovan",
      link: "https://www.linkedin.com/in/romana-solovan-12b54a2a4/",
    },
  ];

  return (
    <div className={css.pageContainer}>
      {/* Page Header - Matching Skills Page */}
      <header className={css.pageHeader}>
        <h1 className={css.pageTitle}>Get In Touch</h1>
        <p className={css.pageSubtitle}>
          Lets discuss your next project or opportunity
        </p>
      </header>

      {/* Page Content */}
      <section className={css.pageContent}>
        <div className={css.pageInner}>
          {/* Contact Methods */}
          <div className={css.methodsSection}>
            <h2 className={css.sectionTitle}>Ways to Connect</h2>
            <div className={css.methodsGrid}>
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    method.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={css.methodCard}
                >
                  <div className={css.methodIconWrapper}>{method.icon}</div>
                  <div className={css.methodContent}>
                    <span className={css.methodLabel}>{method.label}</span>
                    <span className={css.methodValue}>{method.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className={css.formSection}>
            <h2 className={css.sectionTitle}>Send Me a Message</h2>
            <form onSubmit={handleSubmit} className={css.form}>
              {/* Required Fields Row */}
              <div className={css.formRow}>
                <div className={css.formGroup}>
                  <label htmlFor="name" className={css.label}>
                    Name <span className={css.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={css.input}
                    placeholder="Your name"
                  />
                </div>

                <div className={css.formGroup}>
                  <label htmlFor="email" className={css.label}>
                    Email <span className={css.required}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={css.input}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Optional Fields Row */}
              <div className={css.formRow}>
                <div className={css.formGroup}>
                  <label htmlFor="topic" className={css.label}>
                    What are you looking for?
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    className={css.select}
                  >
                    <option value="">Select a topic</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="Freelance Project">Freelance Project</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Question">Question</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className={css.formGroup}>
                  <label htmlFor="howDidYouFind" className={css.label}>
                    How did you find me?
                  </label>
                  <select
                    id="howDidYouFind"
                    name="howDidYouFind"
                    value={formData.howDidYouFind}
                    onChange={handleChange}
                    className={css.select}
                  >
                    <option value="">Select an option</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="GitHub">GitHub</option>
                    <option value="Job Board">Job Board</option>
                    <option value="Referral">Referral</option>
                    <option value="Search Engine">Search Engine</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message Field */}
              <div className={css.formGroup}>
                <label htmlFor="message" className={css.label}>
                  Message <span className={css.required}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={css.textarea}
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className={css.submitButton}>
                <svg
                  className={css.submitIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
