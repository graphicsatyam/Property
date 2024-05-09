import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './components/Pages/Home';



import "./App.css";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import Profile from "./components/Pages/Profile";
import Contact from "./components/Contact/Contact";
import RiseSportsVillas from "./components/RiseSportsVillas.js/RiseSportsVillas";


function App() {
  return (
    <>
      <Router>
      
            <Routes>
            <Route path="/" element={<Home/>} /> 
            <Route path="/project" element={<ProjectPage/>} /> 
            <Route path="/profile" element={<Profile/>} /> 
            <Route path="/contact" element={<Contact/>} /> 
            <Route path="/risesportsvillas" element={<RiseSportsVillas/>} /> 
            {/* <Route path="/project" element={<ProjectPage />} />  */}
            </Routes>
          
          
      

      </Router>
    </>
  );
}

export default App;
