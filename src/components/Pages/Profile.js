import React from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import Gallery from "../Gallery/Gallery";



const Profile = () => {
  return (
    <div>
        <Header/>
        <br></br>
        <AboutUs/>
        <Gallery/>
        <Footer/>
    </div>
  )
}

export default Profile