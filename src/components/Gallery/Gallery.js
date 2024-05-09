import React from 'react';
import './Gallery.css';

const Animation = () => {
  return (
    <div className='gallery_secret'>
   <br></br>
        <div class="logos">
        <div className="heading">
       <h1 style = {{color : '#0064E5'}}> Layout Plans </h1> <br></br>
    </div>
      <div class="logos-slide">
            <div className="box_wrap">
                <div className="item">
                <img src="images/type1.jpg" alt='' />
                </div>
                <div className="text_name">
                Classic Villas
                </div>
            </div>

            <div className="box_wrap">
                <div className="item">
                <img src="images/type2.jpg" alt='' />
                </div>
                <div className="text_name">
                Interlocking Wood Villas
                </div>
            </div>

            <div className="box_wrap">
                <div className="item">
                <img src="images/type3.jpg" alt='' />
                
                </div>
                <div className="text_name">
                Sport Villas
                </div>
            </div>

            <div className="box_wrap">
                <div className="item">
                <img src="images/type4.jpg" alt='' />
                </div>
                <div className="text_name">
                Golf Villas
                </div>
            </div>

            <div className="box_wrap">
                <div className="item">
                <img src="images/type5.jpg" alt='' />
                </div>
                <div className="text_name">
                Leisure Golf Villas
                </div>
            </div>

            <div className="box_wrap">
                <div className="item">
                <img src="images/type6.jpg" alt='' />
                </div>
                <div className="text_name">
                Villas with Meditation Courts
                </div>
            </div>

            <div className="box_wrap">
                <div className="item">
                <img src="images/type7.jpg" alt='' />
                </div>
                <div className="text_name">
                Golf Mansion
                </div>
            </div>

            
            
      </div>
    </div>
    </div>
  )
}

export default Animation;