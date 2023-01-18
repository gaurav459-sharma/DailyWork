import React from "react";
import {BrowserRouter, Route, Routes }from "react-router-dom";
import './App.css';
import { Login } from './Components/Login';
import { Register } from "./Components/Register";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;