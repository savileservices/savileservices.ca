"use client";
import { contactItems } from "@/data/contact";
import React, { useState } from "react";
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState({ sending: false, success: null, error: null });
  const [errors, setErrors] = useState({ email: null, phone: null });

  const isValidEmail = (value) => {
    if (!value) return false;
    // simple but effective email check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  };

  const isValidPhone = (value) => {
    if (!value) return false;
    // normalize: remove non-digits
    const digits = value.replace(/\D/g, "");
    // Accept 10-digit (North America) or 11-digit starting with '1' or international 7-15 digits
    if (digits.length === 10) return true;
    if (digits.length === 11 && digits.startsWith("1")) return true;
    return digits.length >= 7 && digits.length <= 15;
  };

  const validateField = (name, value) => {
    if (name === "email") {
      setErrors((e) => ({ ...e, email: isValidEmail(value) ? null : "Enter a valid email address." }));
    } else if (name === "phone") {
      setErrors((e) => ({ ...e, phone: isValidPhone(value) ? null : "Enter a valid phone number (e.g. 604-555-0123 or +1 604 555 0123)." }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    // live-validate email/phone to give immediate feedback
    if (name === "email" || name === "phone") validateField(name, value);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === "email" || name === "phone") validateField(name, value);
  };

  const isFormValid = () => {
    // required checks
    if (!form.name?.trim() || !form.email?.trim() || !form.phone?.trim() || !form.message?.trim()) {
      return false;
    }
    // errors must be null
    return !errors.email && !errors.phone && isValidEmail(form.email) && isValidPhone(form.phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, success: null, error: null });

    // final validation pass
    validateField("email", form.email);
    validateField("phone", form.phone);

    if (!form.name?.trim() || !form.email?.trim() || !form.phone?.trim() || !form.message?.trim()) {
      setStatus({ sending: false, success: null, error: "Please complete all required fields." });
      return;
    }

    if (!isFormValid()) {
      setStatus({ sending: false, success: null, error: "Please correct the highlighted fields." });
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Send failed");

      setStatus({ sending: false, success: "Message sent. Thank you!", error: null });
      setForm({ name: "", email: "", phone: "", message: "" });
      setErrors({ email: null, phone: null });
    } catch (err) {
      setStatus({ sending: false, success: null, error: err.message || "Failed to send" });
    }
  };

  return (
    <>
      <div className="row wow fadeInUp">
        {/* Left Column */}
        <div className="col-lg-5 mb-md-50 mb-sm-30 d-flex align-items-strech">
          <div
            className="bg-color-primary-1 bg-color-alpha-90 bg-image bg-scroll light-content w-100 round overflow-hidden px-4 px-sm-5 py-5"
            style={{
              backgroundImage:
                "url(/assets/images/demo-corporate/section-bg-4.jpg)",
            }}
          >
            {/* Address */}
            {contactItems.map((item, index) => (
              <React.Fragment key={index}>
                <div
                  className={`contact-item ${
                    index !== 3 ? "mb-40 mb-sm-20" : ""
                  }`}
                >
                  <div className="ci-icon">
                    <i className={item.iconClass} />
                  </div>
                  <h4 className="ci-title">{item.title}</h4>
                  <div className="ci-text large">{item.text}</div>
                  <div className="ci-link">
                    <a
                      href={item.link.url}
                      target={item.link.target}
                      rel={item.link.rel}
                    >
                      {item.link.text}
                    </a>
                  </div>
                </div>{" "}
                {index !== contactItems.length - 1 && (
                  <hr className="mt-0 mb-40 mb-sm-20 opacity-02" />
                )}
              </React.Fragment>
            ))}
            {/* End Phone */}
          </div>
        </div>
        {/* End Left Column */}
        {/* Right Column */}
        <div className="col-lg-7 d-flex align-items-strech">
          <div className="border-color-primary-1 round w-100 px-4 px-sm-5 py-5">
            <h3 className="section-title-small mt-n10 mb-40 mb-sm-30">
              We'd love to hear from you
            </h3>
            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="form contact-form"
              id="contact_form"
            >
              <div className="row">
                <div className="col-md-6">
                  {/* Name */}
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      value={form.name}
                      onChange={handleChange}
                      type="text"
                      name="name"
                      id="name"
                      className="input-lg round form-control"
                      placeholder="Enter your name"
                      pattern=".{3,100}"
                      required
                      aria-required="true"
                    />
                  </div>
                  {/* End Name */}
                </div>
                <div className="col-md-6">
                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="email"
                      name="email"
                      id="email"
                      className={`input-lg round form-control ${errors.email ? "is-invalid" : ""}`}
                      placeholder="Enter your email"
                      required
                      aria-required="true"
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <div id="email-error" className="invalid-feedback d-block">
                        {errors.email}
                      </div>
                    )}
                  </div>
                  {/* End Email */}
                </div>
                <div className="col-md-6">
                  {/* Phone */}
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      value={form.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="tel"
                      name="phone"
                      id="phone"
                      className={`input-lg round form-control ${errors.phone ? "is-invalid" : ""}`}
                      placeholder="Enter your phone number"
                      required
                      aria-required="true"
                      aria-invalid={errors.phone ? "true" : "false"}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    {errors.phone && (
                      <div id="phone-error" className="invalid-feedback d-block">
                        {errors.phone}
                      </div>
                    )}
                  </div>
                  {/* End Phone */}
                </div>
              </div>
              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  value={form.message}
                  onChange={handleChange}
                  name="message"
                  id="message"
                  className="input-lg round form-control"
                  style={{ height: 132 }}
                  placeholder="Enter your message"
                  required
                  aria-required="true"
                />
              </div>
              <div className="row">
                <div className="col-md-6 col-xl-7 d-flex align-items-center">
                  {/* Inform Tip */}
                  <div className="form-tip w-100 pt-3">
                    <i className="icon-info size-16" />
                    All the fields are required. By sending the form you agree
                    to the <a href="#">Terms &amp; Conditions</a> and{" "}
                    <a href="#">Privacy Policy</a>.
                  </div>
                  {/* End Inform Tip */}
                </div>
                <div className="col-md-6 col-xl-5 mt-sm-20">
                  {/* Send Button */}
                  <div className="pt-3 text-md-end">
                    <button
                      type="submit"
                      className="submit_btn btn btn-mod btn-color btn-large btn-round btn-hover-anim"
                      id="submit_btn"
                      aria-controls="result"
                      disabled={status.sending}
                    >
                      <span>{status.sending ? "Sending..." : "Send Message"}</span>
                    </button>
                  </div>
                  {/* End Send Button */}
                </div>
              </div>
              <div
                id="result"
                role="region"
                aria-live="polite"
                aria-atomic="true"
                className="mt-3"
              >
                {status.success && <div className="text-success">{status.success}</div>}
                {status.error && <div className="text-danger">{status.error}</div>}
              </div>
            </form>
            {/* End Contact Form */}
          </div>
        </div>
        {/* End Right Column */}
      </div>
    </>
  );
}
