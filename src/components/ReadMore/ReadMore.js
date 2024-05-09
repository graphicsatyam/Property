import React, { useState } from "react";
import './ReadMore.css'

function ReadMore() {
  const [showFullText, setShowFullText] = useState(false);

  const toggleReadMore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <>
      <div className="whole_abt">
      <br></br>
      <div className = "welcome" > <h1>Welcome To Property Buddy</h1></div>
        <div className="readmore">
          <div className="left_read">
            <p className="detailing">
              {showFullText
                ? "Property Buddy Realtors Private Limited is a township spread over a sprawling 100 acres located just 0 kms away from NOIDA featuring uber luxury villas for a complete living experience. To ensure a pollution free environment for the residents all vehicular movement in the township has been replaced with an underground personal parking system under the villas, with 2-4 parking spots each. Property Buddy Realtors Private Limited Indulge in the epitome of opulence with our range of meticulously designed luxury villa in Greater Noida. Choose from spacious 3 bhk villa, 4 bhk villa, 5 bhk villa in Greater Noida configurations, each exuding sophistication and contemporary charm. Our villas are thoughtfully crafted to provide ample space, natural light, and scenic views, creating an oasis of serenity. Embrace a life of leisure as you immerse yourself in the lush green surroundings, private gardens, and modern amenities. Whether you seek relaxation or recreation, Property Buddy has it all. Enjoy a refreshing dip in the pool, engage in sports activities, or simply relish the quietude of your own villa. Conveniently located, our gated community ensures security and privacy, allowing you to unwind and rejuvenate in complete tranquility. Experience the allure of upscale living that seamlessly blends modern comforts with the charm of nature. Elevate your lifestyle at Rise Resort Residences - where luxury knows no bounds, and every moment is an indulgence in the extraordinary. Your dream villa in Greater Noida awaits."
                : "Property Buddy Realtors Private Limited is a township spread over a sprawling 100 acres located just 0 kms away from NOIDA featuring uber luxury villas for a complete living experience. To ensure a pollution free environment for the residents all vehicular movement in the township has been replaced with an underground personal parking system under the villas, with 2-4 parking spots each. Property Buddy Indulge in the epitome of opulence with our range of meticulously designed luxury villa in Greater Noida. Choose from spacious 3 bhk villa, 4 bhk villa, 5 bhk villa in Greater Noida configurations, each exuding sophistication and contemporary charm. Our villas are thoughtfully crafted to provide ample space, natural light, and scenic views, creating an oasis of serenity. Embrace a life of leisure as you  ..."}
            </p>
            <button className="ReadMorebtn" onClick={toggleReadMore}>
              {showFullText ? "Read Less" : "Read More"}
            </button> <br></br>
          </div>
          <div className="right_read">
            <div className="photos">
              <img src="images/about.jpg" alt="" />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReadMore;
