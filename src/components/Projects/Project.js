import React from 'react';
import './Project.css';
// import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Project = () => {
  return (
    <div>
      <h1 className='hdl'> Exclusive Projects</h1>
      <p className='dtl'> Most acclaimed properties of Property Buddy Realter Pvt. Ltd.</p>
    
    {/* Swiper Start */}
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> 
        <div className='iimage'> <img src="images/slider1.jpg" alt="" /> </div>
        <div className='image-box'>
            <div className="heading">
                <h3> Rise Sports Villa </h3> 
                <div className='add'> <i class="fa fa-solid fa-location-dot"></i> Greater Noida West</div>
                <h3 className='price'> Price : 1.19 Cr - 4.15 Cr </h3>  
            </div>

            <div className="facility">
                <div className="bed">
                <i class="fa fa-solid fa-bed" style={{color:"red"}} ></i> <h2>3</h2> <span> Bed + ATTIC / </span>
               MAIDS ROOM</div>

               <div className="bed">
                <i class="fa fa-solid fa-bed" style={{color:"red"}} ></i> <h2>4</h2> <span> Bed + ATTIC / </span>
               MAIDS ROOM</div>
            </div> 
            <div className="areas"> (2495 Sq.Ft.) & (3070 Sq.Ft.) </div>
            <div className="button1">
                See More
            </div>
        </div> 
        </SwiperSlide>


        <SwiperSlide> 
        <div className='iimage'> <img src="images/slider2.jpg" alt="" /> </div>
        <div className='image-box'>
            <div className="heading">
                <h3> Rise Forest Floor </h3> 
                <div className='add'> <i class="fa fa-solid fa-location-dot"></i> Greater Noida West</div>
                <h3 className='price'> Price : 1.19 Cr - 4.15 Cr </h3>  
            </div>

            <div className="facility">
                <div className="bed">
                <i class="fa fa-solid fa-bed" style={{color:"red"}} ></i> <h2>3</h2> <span> Bed </span>
               + 2 TOILETS </div>

               <div className="bed">
                <i class="fa fa-solid fa-bed" style={{color:"red"}} ></i> <h2>3</h2> <span> Bed</span>
                + 3 TOILETS</div>
            </div> 
            <div className="areas"> (1475 Sq.Ft.) & (1820 Sq.Ft.) </div>
            <div className="button1">
                See More
            </div>
        </div> 
        </SwiperSlide>


        <SwiperSlide> 
        <div className='iimage'> <img src="images/slider1.jpg" alt="" /> </div>
        <div className='image-box'>
            <div className="heading">
                <h3> Rise Golf Villa </h3> 
                <div className='add'> <i class="fa fa-solid fa-location-dot"></i> Greater Noida West</div>
                <h3 className='price'> Price : 1.19 Cr - 4.15 Cr </h3>  
            </div>

            <div className="facility">
                <div className="bed">
                <i class="fa fa-solid fa-bed" style={{color:"red"}} ></i> <h2>3</h2> <span> Bed + ATTIC / </span>
               MAIDS ROOM</div>

               <div className="bed">
                <i class="fa fa-solid fa-bed" style={{color:"red"}} ></i> <h2>4</h2> <span> Bed + ATTIC / </span>
               MAIDS ROOM</div>
            </div> 
            <div className="areas"> (2495 Sq.Ft.) & (3070 Sq.Ft.) </div>
            <div className="button1">
                See More
            </div>
        </div> 
        </SwiperSlide>


        <SwiperSlide> 
        <div className='iimage'> <img src="images/slider3.jpg" alt="" /> </div>
        <div className='image-box'>
            <div className="heading">
                <h3> Commercial Space </h3> 
                <div className='add'> <i class="fa fa-solid fa-location-dot"></i> Greater Noida West</div>
                <h3 className='price'> Price : 1.19 Cr - 4.15 Cr </h3>  
            </div>

            <div className="facility">
                <div className="bed">
                <i class="fa fa-solid fa-bed" style={{color:"red"}} ></i> <h2>PALM STREET</h2> </div>

               <div className="bed">
                <i class="fa fa-solid fa-bed" style={{color:"red"}} ></i> <h2>MADISON SQUARE</h2> </div>
            </div> 
            <div className="areas"> (1475 Sq.Ft.) & (1820 Sq.Ft.) </div>
            <div className="button1">
                See More
            </div>
        </div> 
        </SwiperSlide>

       


        

               
      </Swiper>

    </div>
  )
}

export default Project
