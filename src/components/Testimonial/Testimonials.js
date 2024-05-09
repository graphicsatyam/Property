// Testimonials.js
import React, { useState } from "react";
import "./Testimonials.css";

const Testimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonials-container"><br></br>
    <div className="headingss"> <h1 style={{color:'#f25927'}}> Testimonials</h1></div>
      <div className="testimonial">
        <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="testimonial-image" />
        <p className="testimonial-text">{testimonials[currentIndex].text}</p>
        <p className="testimonial-name">- {testimonials[currentIndex].name}</p>
      </div>
      <div className="navigation">
        <button className="prev" onClick={prevTestimonial}>Previous</button>
        <button className="next" onClick={nextTestimonial}>Next</button> 
      </div>
    </div>
  );
};

export default Testimonials;
