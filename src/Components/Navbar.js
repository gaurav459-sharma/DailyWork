import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useAuthDispatch } from '../context';
import './Navbar.css';
import accountPng from "../assets/images/account.jpg";
import axios from 'axios';
import LoginRegisterModal from './LoginRegisterModal.js';

const client = axios.create({
    baseURL: 'http://localhost:5000/users'
});

let userData;

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const dispatch = useAuthDispatch();
    userData = useAuthState();
    const navigate = useNavigate();

    let profile = userData.userDetails.upload;

    const handleLogOut = (e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
        localStorage.removeItem("currentUser");
        localStorage.removeItem("userDetails");
        navigate('/');
    }

    const handleClose = () => {
        setOpen(false);
        console.log("handle close called!");
    }

    const handleOpen = () => {
        setOpen(true);
        console.log("handle open called!");
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
                    <li ><Link to="/home">Home</Link></li>
                    <li ><Link to="/UserBoard">Hire</Link></li>
                    <li><Link to="/jobsection">Jobs</Link></li>
                    {/* <li><Link to="/personal">personal</Link></li> */}
                    {/* {!userData.auth &&
                        <li><Link to="/register"><span ></span> Sign Up</Link></li>
                    } */}
                    {userData.userDetails && <Toggle />}
                    {userData.auth ?
                        <>
                            <li className='common' onClick={(e) => handleLogOut(e)}>
                                <Link to="/">logOut</Link>
                            </li>
                            <Link to="/personal">
                                <img src={profile ? `http://localhost:5000/${profile}` : accountPng} alt="Not Found" style={{ height: '2em', width: '2em', borderRadius: '1em', marginRight: '1em' }}></img>
                            </Link>
                        </>
                        :
                        <li><Link onClick={handleOpen}> Login</Link></li>
                    }
                </ul>
            </nav>
            <LoginRegisterModal isOpen={open} onClose={handleClose} />
        </div>
    )
}


const Toggle = () => {
    const [available, setAvailable] = useState(false);
    useEffect(() => {
        // console.log("useEffect Called");
        async function fetchAvailability() {
            if (userData.userDetails._id) {
                let res = await client.get(`/checkavailable/${userData.userDetails._id}`);

                if (res.status === 200) {
                    setAvailable(() => res.data.isAvailable);
                } else {
                    alert("someting went wrong");
                }
            }
        }
        fetchAvailability();
    }, []);
    const handleToggle = async () => {
        setAvailable(() => (!available));
        if (!available) {
            let res = await client.get(`/makeavailable/${userData.userDetails._id}`);
            if (res.status === 200) {
                alert(res.data);
            } else {
                alert("someting went wrong");
            }
        } else {
            let res = await client.get(`/makeunavailable/${userData.userDetails._id}`);
            if (res.status === 200) {
                alert(res.data);
            } else {
                alert("someting went wrong");
            }
        }

    }
    return (
        <div className='availability_toggle' onClick={() => handleToggle()}>
            {!available ?
                (<div className='toggle_shape not_available'> </div>) :
                (<div className=' toggle_shape available'> </div>)
            }
        </div>
    )
}

export default Navbar