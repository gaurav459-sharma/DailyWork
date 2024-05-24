import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Personal.css';
import axios from 'axios';
import { useAuthDispatch, logout } from '../../context/index';
import {cities, suggestions} from '../UsersBoard/Testdata';
import moment from 'moment';

const client = axios.create({
    baseURL: 'http://localhost:5000/users'
});

const Personal = () => {
    const dispatch = useAuthDispatch();
    const navigate = useNavigate();
    const userEmail = localStorage.getItem("currentUser");
    const [userDetails, setUserDetails] = useState({
        first_name: '',
        last_name: '',
        email: userEmail,
        phone: '',
        gender: '',
        dob: '',
        interest: '',
        state: '',
        city: '',
        upload: '',
        subject: '',
        available : false
    });


    useEffect(() => {
        // if (localStorage.getItem("user")) {
        //     navigate(-1);
        // }
        let userData = localStorage.getItem("userDetails");
        if(userData){
            userData = JSON.parse(userData);
            setUserDetails(userDetails => ({
                ...userDetails,
                first_name: userData.first_name,
                last_name: userData.last_name,
                email: userEmail,
                phone: userData.phone,
                gender: userData.gender,
                dob: userData.dob,
                interest:userData.interest,
                state: userData.state,
                city: userData.city,
                subject: userData.subject,
                available: userData.available
            }));
        }
    }, []);

    const handleChanage = (e) => {
        e.preventDefault();
        var name = e.target.name;
        var val;
        if (name === "upload")
            val = e.target.files[0];
        else val = e.target.value;
        setUserDetails((userDetails) => ({ ...userDetails, [name]: val }));
    }

    const handleSubmit = async (e) => {
        console.log(userDetails);
        e.preventDefault();
        try {
            const response = await client.post('/personal', userDetails, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
           handleResponse(response);
        } catch (error) {
            alert(error);
        }
    }

    const handleResponse = (res) => {
        if (res.status === 201) {
            // dispatch({type : "SET_DETAILS", payload : userDetails});
            // localStorage.setItem("userDetails", JSON.stringify(userDetails));
            alert("personal details updated...");
            logout();
            navigate('/home');
        } else {
            alert("Some error occurred...");
        }
    }
    return (
        <div className='personal_form'>
            <h3>Personal Information</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">First Name</label>
                <input value={userDetails.first_name} onChange={(e) => handleChanage(e)} className='text' type='text' id="fname" name="first_name" placeholder="Your name.." required />

                <label htmlFor="lname">Last Name</label>
                <input value={userDetails.last_name} onChange={(e) => handleChanage(e)} className='text' type="tex" id="lname" name="last_name" placeholder="Your last name.." required />

                <label htmlFor="email">Email</label>
                <input value={userEmail} className='text' type="email" id="email" name="email" disabled required />

                <label htmlFor="state">State</label>
                <select value={userDetails.state} onChange={(e) => handleChanage(e)} className='state' name="state" required>
                    <option selected>select</option>
                    <option value="Uttarpradesh">UttarPradesh</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Rajasthan">Rajasthan</option>
                </select>

                <label htmlFor="Interest">Area of interest</label>
                <select className='interest' value={userDetails.interest} onChange={(e) => handleChanage(e)} name='interest' required>
                    {/* <option value="Electrician">Electrician</option>
                    <option value="Plumber">Plumber</option>
                    <option value="Mechanic">Mechanic</option> */}
                    <option selected>select</option>
                    {suggestions.map(val => <option value={val}>{val}</option>)}
                </select>

                <label htmlFor='gender'>Gender</label>
                <select value={userDetails.gender} onChange={(e) => handleChanage(e)} className='gender' name="gender" required>
                    <option selected>select</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>

                <label htmlFor="phone">Phone:</label>
                <input value={userDetails.phone} onChange={(e) => handleChanage(e)} className='text' type="tel" name="phone" id="phone" placeholder='phone no.' required />
                
                <label htmlFor="city">City</label>
                <select className = "city" value={userDetails.city} onChange={(e) => handleChanage(e)} name='city' required>
                    <option selected>select</option>
                    {cities.map(val => <option value={val}>{val}</option>)}
                </select>
                {/* <input value={userDetails.pin} onChange={(e) => handleChanage(e)} className='text' type="number" name="pin" id="Pin" placeholder='Pincode' required /> */}

                <label htmlFor="dob">Date of birth:</label>
                <input className='text' value={moment(userDetails.dob).format('YYYY-MM-DD')} onChange={(e) => handleChanage(e)} type="date" name="dob" id="dob" placeholder='example:18' required></input>

                <label htmlFor="upload">Photo Upload:</label>
                <input type="file" name="upload" onChange={(e) => handleChanage(e)} className="upload" id="upload" required />

                <label className='ay' htmlFor="subject">Abour Yourself</label>
                <textarea value={userDetails.subject} onChange={(e) => handleChanage(e)} className='subject' name="subject" placeholder="Write something.." required></textarea>

                <button type='submit' id='button' value="Submit" >Submit</button>

            </form>

        </div>
    )
}

export default Personal