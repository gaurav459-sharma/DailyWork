import React from 'react'
import { Link, useNavigate, useNavigation } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  
  return (
    <div className='Nav-bar'>

    <div className='logo'>
        <h3>WorkHunt</h3>
    </div>
      <div className="nav-links">
        <ul>
          <li>Overview</li>
          <li>Jobs</li>
          <li>Featured</li>
          <li>Remote</li>
          <li>For Work</li>
      
        </ul>
      </div>
       
      <div className="signin">
        <ul>
        <li ><button>SignIn</button></li>
        <li><button>SignUp</button></li>
        </ul>
    
      </div>
   
    </div>
  )
}

export default Navbar