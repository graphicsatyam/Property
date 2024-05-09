import React from 'react';
import '../../App.css';

import Header from "../../components/Header/Header";
import Project from '../../components/Projects/Project';
import Video from "../../components/Video/Video";
import AboutUs from "../../components/AboutUs/AboutUs";
import TextAnimation from "../../components/TextAnimation/TextAnimation";
import Search from "../../components/Search/Search";
import Property from '../Property/Property';
import Testimonials from "../../components/Testimonial/Testimonials";
import Footer from "../../components/Footer/Footer";



const sentences = ["Find the Best Villa", "Find the Best Flat"];

const testimonialData = [
  {
    name: "Rahul Goswami",
    image: "images/testmonial1.jpg",
    text: "I recently purchased a flat through Property Buddy Realtors Pvt. Ltd. in Greater Noida, and the experience was outstanding. From the initial inquiry to the final transaction, their team provided exemplary service and guidance every step of the way. Their expertise in the real estate market, coupled with their vast selection of properties, made finding my dream home a breeze. I highly recommend Property Buddy to anyone in search of quality properties in the area.",
  },
  {
    name: "Amarnath Verma",
    image: "images/testmonial2.jpg",
    text: "Working with Property Buddy Realtors Pvt. Ltd. has been a refreshing experience in the real estate market. Their vast network of properties, combined with their fair and transparent dealings, has made them a trusted partner for both dealers and customers alike. Their team's dedication to excellence and customer satisfaction sets them apart in the industry, and I am grateful for the opportunity to collaborate with such a reputable company.",
  },
  // Add more testimonials as needed
];

const Home = () => {
  return (
    <>
          <Header />
            <Video />
            <Search />
            <Project/>
            <AboutUs/>
            <div>
              <TextAnimation sentences={sentences} />
            </div>
          <Property />
          
          
          <Testimonials testimonials={testimonialData} />
          <Footer />
    </>
  );
}

export default Home;