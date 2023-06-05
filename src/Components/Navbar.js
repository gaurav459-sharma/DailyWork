import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='navbar_main'>
            <nav className='nav_page'>
                <div>
                    <Link to="/">DailyWork</Link>
                </div>
                <ul className='common lft'>

                </ul>
                <ul className='common rgt'>
                    <li ><Link to="/">Home</Link></li>
                    <li ><Link to="/UserBoard">Hire</Link></li>
                    <li><Link to="/jobsection">Jobs</Link></li>
                    <li><Link to="/personal">personal</Link></li>
                    <li><Link to="/register"><span ></span> Sign Up</Link></li>
                    <li><Link to="/"><span ></span> Login</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar