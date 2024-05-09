import React from 'react';
import './GetTouch.css';





// bootstrap

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap';

const GetTouch = () => {
  return (
    <div>
        <div id="contact">
  <div className ="container1">
    <div className ="col-md-8">
      <div className ="row">
        <div className ="section-title">
        <br></br>  <h2>Get In Touch</h2>
          <p>Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
        </div>
        <form name="sentMessage" id="contactForm" novalidate>
          <div className ="row">
            <div className ="col-md-6">
              <div className ="form-group">
                <input type="text" id="name" className ="form-control" placeholder="Name" required="required"/>
                <p className ="help-block text-danger"></p>
              </div>
            </div>
            <div className ="col-md-6">
              <div className ="form-group">
                <input type="email" id="email" className ="form-control" placeholder="Email" required="required"/>
                <p className ="help-block text-danger"></p>
              </div>
            </div>
          </div>
          <div className ="form-group">
            <textarea name="message" id="message" className ="form-control" rows="4" placeholder="Message" required></textarea>
            <p className ="help-block text-danger"></p>
          </div>
          <div id="success"></div>
          <button type="submit" style={{ color:'rgb(109 153 248)' }} className ="btn btn-custom btn-lg">Send Message</button>
        </form>
      </div>
    </div>
    <div className ="col-md-3 col-md-offset-1 contact-info">
      <div className ="contact-item">
        <div className="contact_heading">Contact Info :</div> <br></br>
        <p><span>Address</span>RISE RESORT RESIDENCES SECTOR-1,<br></br>
         Techzone- 4, Greater Noida (West)</p>
      </div>
      <div className ="contact-item">
        <p><span>Phone</span> +91 8010 994 444</p>
      </div>
      <div className ="contact-item">
        <p><span>Email</span> info@risevillas.com</p>
      </div>
    </div>
    <div className ="col-md-12">
      <div className ="row">
        <div className ="social">
          <ul>
            <li><a href="/"><i class="fa fa-brands fa-facebook"></i></a></li>
            <li><a href="/"><i class="fa fa-brands fa-twitter"></i></a></li>
            <li><a href="/"><i class="fa fa-brands fa-google-plus-g"></i></a></li>
            <li><a href="/"><i class="fa fa-brands fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
    
    
    </div>
  )
}

export default GetTouch