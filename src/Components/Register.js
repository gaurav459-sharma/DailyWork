import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const client = axios.create({
    baseURL: 'http://localhost:5000/users'
});

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [user_name, setName] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("user")) {
            navigate(-1);
        }
    }, []);

    const handleSubmit = (e) => {
        const data = {
            user_name, email, password
        };
        console.log(data);
        e.preventDefault();
        client.post('/create', data)
            .then(res => handleResponse(res))
            .catch(err => alert(err));
    }

    const handleResponse = (res) => {
        if (res.status === 201) {
            // localStorage.setItem('user', email);
            alert('user created successfully');
            setEmail('');
            setPass('');
            setName('');
            navigate("/");
        } else alert('error occurred!');
    }

    return (
        <div>
            <div className="parent_login">
                <h2>Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full name</label>
                    <input value={user_name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="abc@xyz.com" id="email" name="email" />
                    <label htmlFor="password">password</label>
                    <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button type="submit">Register</button>
                </form>
                <Link to='/' className="link-btn">Login here.</Link>
            </div>
        </div>
    )
}