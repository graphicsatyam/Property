// Footer.js
import React from "react";
import { Link } from 'react-router-dom';

import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>

{/* <!-- Footer Start --> */}
        <div className="container-fluid text-white footer pt-5 mt-5 wow " data-wow-delay="0.1s">
            <div className="container9 py-5">
                <div className="row g-6">
                  
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Quick Links</h5>
                        <Link className="btn btn-link text-white-50" to="/">Home</Link>
                        <Link className="btn btn-link text-white-50" to="/profile">Company Profile</Link>
                        <Link className="btn btn-link text-white-50" to="/project">Projects</Link>
                        <Link className="btn btn-link text-white-50" to="/contact">Contact Us</Link>
                        <Link className="btn btn-link text-white-50" to="/profile">Terms & Condition</Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Photo Gallery</h5>
                        <div className="row g-2 pt-2">
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="images/type1.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="images/type2.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="images/type3.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="images/type4.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="images/type5.jpg"  alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="images/type6.jpg"  alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-5 news">
                        <h5 className="text-white mb-4" style={{color:'white'}}>Newsletter</h5>
                        <p> Rise Resort Residencies aims to offer residents a lifestyle that combines luxurious living with a focus on sports and recreational activities.</p>
                        <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                            <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5"  type="text" placeholder="Your email"/>
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
        <div className="footer_link">
        <div className="footer_part">
            All Right Reserved. Designed By <a href= "https://tramt.in/"> Tramt Technology </a>
        </div>
        </div>

        </div>
        {/* <!-- Footer End --> */}

    </>
  );
};

export default Footer;
