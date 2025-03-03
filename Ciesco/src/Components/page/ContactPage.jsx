import React, { useState } from "react";

import { Envelope, Telephone, GeoAlt, Send } from "react-bootstrap-icons";
import { FooterProvider } from "../api/context/Footer";
import { FooterList } from "../Footer/FooterList";

export const ContactPage = () => {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="contact-container container py-5">
        <div className="logo text-center mb-4">
          <img
            src="https://cdn.shopify.com/s/files/1/0874/8928/2359/files/logo.svg?v=1714142588&width=148&height=38&crop=center"
            alt="Ciseco-H2 Logo"
            className="logo-img"
          />
        </div>
        <h1 className="text-center mb-4">Contact Us</h1>
        <p className="text-center intro-text">
          We are here to help. Reach out to us for any inquiries or support.
        </p>
        <div className="row">
          <div className="col-md-6 contact-info">
            <h3>Get in Touch</h3>
            <p>
              <GeoAlt /> <strong>Address:</strong> 1234 Market Street, San
              Francisco, CA 94103
            </p>
            <p>
              <Telephone /> <strong>Phone:</strong> +1 234 567 890
            </p>
            <p>
              <Envelope /> <strong>Email:</strong> support@ciseco-h2.com
            </p>
            <h3 className="mt-4">Business Hours</h3>
            <p>Monday - Friday: 9 AM - 6 PM</p>
            <p>Saturday: 10 AM - 4 PM</p>
            <p>Sunday: Closed</p>
          </div>
          <div className="col-md-6">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="mb-3">
                <label>Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="mb-3">
                <label>Email</label>
                <input type="email" className="form-control" required />
              </div>
              <div className="mb-3">
                <label>Message</label>
                <textarea className="form-control" rows="5" required></textarea>
              </div>
              <div className="mb-3">
                <label>How satisfied are you?</label>
                <select
                  className="form-control"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="very_satisfied">Very Satisfied</option>
                  <option value="satisfied">Satisfied</option>
                  <option value="neutral">Neutral</option>
                  <option value="dissatisfied">Dissatisfied</option>
                  <option value="very_dissatisfied">Very Dissatisfied</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 impressive-button"
              >
                Send Message <Send />
              </button>
            </form>
            {submitted && (
              <p className="mt-3 alert alert-success">
                Thank you for your feedback!
              </p>
            )}
          </div>
        </div>
      </div>
      <section>
        <FooterProvider>
          <FooterList/>
        </FooterProvider>
      </section>
    </>
  );
};
