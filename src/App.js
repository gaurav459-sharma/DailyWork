import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Components/Login';
import Register from "./Components/Register";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import './App.css';
import Footer from "./Components/Footer";
import MainPage from "./Components/MainPage";
import Personal from "./Components/personal_Info/Personal";
import Contact from "./Components/contactus/Contact";
import JobSection from "./Components/job_section/JobSection";
import AboutUs from "./Components/about_us/AboutUs";
import Application from "./Components/Application_form/Application";
import UserBoard from "./Components/UsersBoard/UserBoard";
import Api from "./Components/Api";
import { AuthProvider } from "./context/index";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter basename="/workhunt">
          <div className='nav_component'><Navbar /></div>
          <Routes>
            <Route exact path="/" element={<MainPage><Login /></MainPage>} />
            <Route path="/register" element={<MainPage><Register /></MainPage>} />
            <Route path="/home" element={<Home />} />
            <Route path="/nav" element={<Navbar />} />
            <Route path="/foot" element={<Footer />} />
            <Route path="/Personal" element={<Personal />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/api" element={<Api />} />
            <Route path="/jobsection" element={<JobSection/>}/> 
            <Route path="/aboutus" element={<AboutUs/>}/> 
            <Route path="/Application" element={<Application/>}/> 
            <Route path="/UserBoard" element={<UserBoard/>}/> 
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;