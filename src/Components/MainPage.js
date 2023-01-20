import React, { props } from 'react'
import Navbar from './Navbar'
import './MainPage.css'
const MainPage = (props) => {
    return (
        <div className="main">
            <div className="main_left">
                <h1>Discover The Work Here</h1>
            </div>
            <div className="main_right">
                {props.children}
            </div>
        </div>
    )
}

export default MainPage