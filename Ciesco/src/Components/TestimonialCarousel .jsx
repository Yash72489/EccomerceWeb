import React from "react";
import { Carousel } from "react-bootstrap";


const testimonials = [
  {
    id: 1,
    name: "John Doe",
    comment:
      "Ciseco-H2 has the best products and customer service. Highly recommended!",
    image:
      "https://images.pexels.com/photos/7752811/pexels-photo-7752811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Jane Smith",
    comment: "I love shopping at Ciseco-H2. The delivery is always on time.",
    image:
      "https://images.pexels.com/photos/7752813/pexels-photo-7752813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Alice Johnson",
    comment: "Great variety of products and amazing deals. Will shop again!",
    image:
      "https://images.pexels.com/photos/7752822/pexels-photo-7752822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const TestimonialCarousel = () => {
  return (
    <>
      <div className="container-fluid-testominial">
        <h2 style={{ textAlign: "center" }}>What's Customer Like</h2>
        <Carousel>
          {testimonials.map((testimonial) => (
            <Carousel.Item key={testimonial.id}>
              <div className="testimonial-item">
                <img
                  className="d-block mx-auto rounded-circle"
                  src={testimonial.image}
                  alt={testimonial.name}
                  width="100%"
                />
                <h3>{testimonial.name}</h3>
                <p>{testimonial.comment}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default TestimonialCarousel;
