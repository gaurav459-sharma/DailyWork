import React, { useState, useEffect } from "react";
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { loginUSer, useAuthDispatch } from "../context/index";

export const Login = () => {
    const dispatch = useAuthDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("user")) {
            navigate('/home');
        }
    }, []);
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChanage = (e) => {
        e.preventDefault();
        let name = e.target.name;
        var val = e.target.value;
        setUser((user) => ({ ...user, [name]: val }));
        console.log(e);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(user);
            let response = await loginUSer(dispatch, user);
            console.log(response);
            handleResponse(response);
        } catch (error) {
            console.log(error)
        }
    }

    const handleResponse = (res) => {
        if (res.status === 200) {
            localStorage.setItem("currentUser", user.email);
            alert("successfull login!");
            navigate('/home');
        } else if (res.status === 202) {
            alert("Incorrect Password");
        } else {
            alert("Some error occurred");
        }
    }

    return (
        <div>
            <div className="parent_login">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input value={user.email} onChange={(e) => handleChanage(e)} type="email" placeholder="abc@xyz.com" id="email" name="email" />
                    <label htmlFor="password">Password</label>
                    <input value={user.password} onChange={(e) => handleChanage(e)} type="password" placeholder="********" id="password" name="password" />
                    <button type="submit">Log In</button>
                </form>
                <Link to='/register' className="link-btn"> Register here.</Link>
            </div>
        </div>
    )
}