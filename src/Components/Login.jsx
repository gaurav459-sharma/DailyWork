import React, { useState } from "react";
import '../App.css';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const client = axios.create({
    baseURL:'http://localhost:5000/users'
});
export const Login = (props) => {
    const [user, setUser] = useState({ 
        email:'',
        password:''
    });

    const handleChanage = (e) => {
        e.preventDefault();
        let name = e.target.name;
        var val = e.target.value;
        setUser((user) => ({...user,[name]:val}));
        console.log(e);
    }
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        client.post('/signin', user)
        .then(res => handleResponse(res))
        .catch(err => alert(err));
    }

    const handleResponse = (res) => {
        if(res.status === 200){
            localStorage.setItem('user', user.email);
            navigate('/home');
        }else if(res.status === 202){
            alert("Incorrect Password");
        }else{
            alert("Some error occurred");
        } 
    }


    return (
        <div className="main">
        <div className="sidebar">
            <h1>Discover The Work Here</h1>
        </div>
        <div className="auth-form-container">
            <div className="parent-login">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={user.email} onChange={(e) => handleChanage(e)} type="email" placeholder="abc@xyz.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={user.password} onChange={(e) => handleChanage(e)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <Link to='/register'>Don't have an account? Register here.</Link>
            </div>
        </div>

        </div>
    )
}