import React from 'react'
import './MainPage.css'
import nit from '../assets/images/tr.png';
const MainPage = (props) => {
    console.log(navigator.onLine);
    return (
        <div className="main">
            <div className="main_left">
                <h1>Sbko Kam milega</h1>
                <img id="back_image" src={nit} />
            </div>
            <div className="main_right">
                {props.children}
            </div>
        </div>
    )
}

export default MainPage