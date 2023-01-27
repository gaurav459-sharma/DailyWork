import React, { props } from 'react'
import Navbar from './Navbar'
import './MainPage.css'
import nit from './tr.png'
const MainPage = (props) => {
    return (
        <div className="main">
            <div className="main_left">
                <h1>Sbko Kam milega</h1>
                <img id="back_image"src={nit}/>
            </div>
            <div className="main_right">
                {props.children}
            </div>
        </div>
    )
}

export default MainPage