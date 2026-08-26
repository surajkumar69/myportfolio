import React, { useState } from "react";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaEnvelope, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // =========================================================================
    // FORM SERVICE INTEGRATION POINT:
    // Replace the code below with your EmailJS, Formspree, or custom API POST request.
    // Example (Formspree / Custom API):
    // fetch("https://formspree.io/f/YOUR_FORM_ID", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });
    // =========================================================================

    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Let's Work <span>Together</span></h2>
          <p className="contact-subtitle">
            Have a project in mind? Let's build something great together.
          </p>
        </div>

        <div className="contact-quick-buttons">
          <a
            href="https://wa.me/917856825176"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn contact-btn-whatsapp"
            aria-label="Chat on WhatsApp"
            data-cursor="disable"
          >
            <FaWhatsapp />
            <span>WhatsApp (+91 7856825176)</span>
            <MdArrowOutward />
          </a>

          <a
            href="mailto:surajkumarsingh13ka@gmail.com"
            className="contact-btn contact-btn-email"
            aria-label="Send Email"
            data-cursor="disable"
          >
            <FaEnvelope />
            <span>surajkumarsingh13ka@gmail.com</span>
            <MdArrowOutward />
          </a>

          <a
            href="https://www.linkedin.com/in/suraj-kumar-singh/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn contact-btn-social"
            aria-label="LinkedIn Profile"
            data-cursor="disable"
          >
            <FaLinkedinIn />
            <span>LinkedIn</span>
            <MdArrowOutward />
          </a>

          <a
            href="https://www.instagram.com/leftbraincoder/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn contact-btn-social"
            aria-label="Instagram Profile"
            data-cursor="disable"
          >
            <FaInstagram />
            <span>Instagram</span>
            <MdArrowOutward />
          </a>
        </div>

        <div className="contact-form-wrapper">
          {isSubmitted ? (
            <div className="contact-success-banner">
              ✓ Thank you! Your message has been sent successfully. I will get back to you shortly.
            </div>
          ) : null}

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={errors.name ? "input-error" : ""}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or requirement..."
                className={errors.message ? "input-error" : ""}
              ></textarea>
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>

            <button type="submit" className="contact-submit-btn" data-cursor="disable">
              Send Message ↗
            </button>
          </form>
        </div>

        <div className="contact-footer">
          <h2>
            Designed and Developed <br /> by <span>Suraj Kumar Singh</span>
          </h2>
          <h5>
            <MdCopyright /> 2026
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
