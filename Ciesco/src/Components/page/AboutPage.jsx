import React, { useState } from "react";
import TestimonialCarousel from "../TestimonialCarousel ";
import { FooterProvider } from "../api/context/Footer";
import { FooterList } from "../Footer/FooterList";

const AboutPage = () => {
  const [impressed, setImpressed] = useState(false);

  const handleImpressedClick = () => {
    setImpressed(true);
    alert("Thank you for being impressed! We're glad to have you here.");
  };

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About Ciseco-H2</h1>
          <p className="lead">
            Welcome to Ciseco-H2, your one-stop destination for all your
            e-commerce needs. We are committed to providing the best products
            and services to our customers.
          </p>
          <button
            className="btn btn-primary btn-lg"
            onClick={handleImpressedClick}
          >
            {impressed
              ? "We're Glad You're Impressed!"
              : "Click to Impress Us!"}
          </button>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <h2>Our Story</h2>
          <p>
            Ciseco-H2 was founded in 2020 with a vision to revolutionize the
            e-commerce industry. Our team of experts works tirelessly to bring
            you the latest trends and high-quality products at affordable
            prices.
          </p>
          <p>
            We believe in customer satisfaction and strive to provide an
            exceptional shopping experience. Our platform is designed to be
            user-friendly, secure, and efficient.
          </p>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          
          <TestimonialCarousel />
        </div>
      </section>
      <section>
        <FooterProvider>
          <FooterList />
        </FooterProvider>
      </section>
    </div>
  );
};

export default AboutPage;
