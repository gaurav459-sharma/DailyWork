import React,{useState} from 'react'
import './MainPage.css'
import { useNavigate } from 'react-router-dom';
import { Login } from './Login';
import { Register } from './Register';
import nit30 from '../Components/nit.jpg'


const MainPage = (props) => {
  return (
    <div className="main">
        <div className="leftbar">
            <h1>Discover The Work Here</h1>
            <img id='backimage' src={nit30} alt="man" />
        </div>

        <div className="rightbar">
            {props.children}
        </div>

    </div>
  )
}

export default MainPage