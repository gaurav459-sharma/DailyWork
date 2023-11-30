import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const client = axios.create({
    baseURL: 'http://localhost:5000/users'
});

const Register = ({ onClose }) => {

    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [user_name, setName] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("currentUser")) {
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
            localStorage.setItem('currentUser', email);
            alert('user created successfully');
            onClose();
            setEmail('');
            setPass('');
            setName('');
            // navigate("/");
        } else alert('error occurred!');
    }

    return (
        <div>
            <div className="parent_login">
                <h4>Register</h4>
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="form_input">
                        <input value={user_name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full name" />
                    </div>

                    <div className="form_input">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email" name="email" />
                    </div>

                    <div className="form_input">
                        <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                    </div>

                    <div className="form_input">
                        <button type="submit">Register</button>
                    </div>

                </form>
                <Link className="link-btn" onClick={() => onClose()}>Login here.</Link>
            </div>
        </div>
    )
}

export default Register;