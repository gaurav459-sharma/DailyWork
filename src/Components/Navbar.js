import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='navbar_main'>
            <nav className='nav_page'>
                <div>
                    <Link to="/">WebSiteName</Link>
                </div>
                <ul className='common lft'>

                </ul>
                <ul className='common rgt'>
                    <li ><a href="#">Home</a></li>
                    <li><Link to="/">Page 1</Link></li>
                    <li><Link to="/">Page 2</Link></li>
                    <li><Link to="/register"><span ></span> Sign Up</Link></li>
                    <li><Link to="/"><span ></span> Login</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar