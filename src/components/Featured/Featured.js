import React from 'react';
import './Featured.css';
import CardMain from '../CardMain/CardMain';

const Featured = () => {
  return (
    <div>
    
    <div className="headings" > <h1>Featured Projects </h1> </div>
    
    <div className="card_details"><h5> Find your dream home from our Newly added properties </h5>
    </div>
    
    <div className="Featured_box">
    <CardMain/>
    
    </div>
    
    </div>
  )
}

export default Featured