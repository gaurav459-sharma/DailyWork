import React from "react";
import {BrowserRouter, Route, Routes }from "react-router-dom";
import './App.css';
import { Login } from './Components/Login';
import { Register } from "./Components/Register";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
         <div className="navbar">
         <Navbar/>
         </div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<Home/>}/>
          
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;