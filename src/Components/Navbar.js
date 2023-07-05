import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useAuthDispatch } from '../context';
import './Navbar.css';
import accountPng from "../assets/images/account.jpg";

const Navbar = () => {
    const dispatch = useAuthDispatch();
    const userData = useAuthState();
    const navigate = useNavigate();
    // console.log(userData);
    let profile = userData.userDetails.upload;
    // if (userData.userDetails !== "") {
    //     profile = userData.userDetails.upload;
    // }
    // console.log(userData);

    const handleLogOut = (e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
        localStorage.removeItem("currentUser");
        localStorage.removeItem("userDetails");
        navigate('/');
    }

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
                    {userData.auth ?
                        <>
                        <Toggle/>
                        <li className='common' onClick={(e) => handleLogOut(e)}>
                            <Link to="/">logOut</Link>
                        </li>
                            <Link to="/personal">
                                <img src={profile ? `http://localhost:5000/${profile}`: accountPng} alt="Not Found" style={{ height: '2em', width: '2em', borderRadius: '1em', marginRight: '1em' }}></img>
                            </Link>
                        </>
                        :
                        <li><Link to="/"> Login</Link></li>
                    }
                </ul>
            </nav>
        </div>
    )
}

const Toggle = () => {
    const [available, setAvailable] = useState(false);
    return(
        <div className='availability_toggle' onClick={() => setAvailable(!available)}>
            {!available ?
                (<div className='toggle_shape not_available'> </div>) :
                (<div className=' toggle_shape available'> </div>)
            }
        </div>
    )
}

export default Navbar