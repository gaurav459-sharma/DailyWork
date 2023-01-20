import React from "react";
import {BrowserRouter, Route, Routes }from "react-router-dom";
import { Login } from './Components/Login';
import { Register } from "./Components/Register";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import './App.css';
import Footer from "./Components/Footer";
import MainPage from "./Components/MainPage";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <div className='nav_component'><Navbar/></div>
        <Routes>
          <Route exact path="/" element={<MainPage><Login/></MainPage>}/>
          <Route path="/register" element={<MainPage><Register/></MainPage>}/>
          <Route path="/home" element={<Home/>}/>
          {/* <Route path="/nav" element={<Navbar/>}/>
          <Route path="/foot" element={<Footer/>}/> */}
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;