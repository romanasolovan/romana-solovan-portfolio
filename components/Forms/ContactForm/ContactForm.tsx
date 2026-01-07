"use client";

import { useState, FormEvent } from "react";
import css from "./ContactForm.module.css";

interface ContactFormProps {
  onSuccess?: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setStatus("success");

      // Reset form
      setFormData({ name: "", email: "", message: "" });

      // Close modal after 2 seconds
      setTimeout(() => {
        onSuccess?.();
      }, 2000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.field}>
        <label htmlFor="name" className={css.label}>
          Name
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

      <div className={css.field}>
        <label htmlFor="email" className={css.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={css.input}
          placeholder="your@email.com"
        />
      </div>

      <div className={css.field}>
        <label htmlFor="message" className={css.label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className={css.textarea}
          placeholder="Tell me about your project or idea..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className={css.submitBtn}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className={css.successMessage}>
          ✓ Message sent successfully! I will get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className={css.errorMessage}>
          ✕ Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
