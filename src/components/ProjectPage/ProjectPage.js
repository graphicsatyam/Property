import React from 'react';
import './ProjectPage.css';
import Header from '../Header/Header';
import Project from '../../components/Projects/Project';
import Property from '../Property/Property';
import Footer from '../Footer/Footer';

const 
ProjectPage = () => {
  return (
    <>
        <Header/>
        <Project/>
        <Property/>
        <Footer/>
    </>
  )
}

export default ProjectPage