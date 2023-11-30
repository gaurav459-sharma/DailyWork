import React, { useState, useEffect } from "react";
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { loginUSer, useAuthDispatch } from "../context/index";

const Login = ({ onClose, closeModal }) => {
    const [open, setOpen] = useState(false);
    const dispatch = useAuthDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("userDetails")) {
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
            closeModal();
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
                <h4>Please Login To Continue</h4>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form_input">
                        <input value={user.email} onChange={(e) => handleChanage(e)} type="email" placeholder="Email" id="email" name="email" />
                    </div>

                    <div className="form_input">
                        <input value={user.password} onChange={(e) => handleChanage(e)} type="password" placeholder="Password********" id="password" name="password" />
                    </div>

                    <div className="form_input">
                        <button type="submit">Log In</button>
                    </div>
                </form>

                <Link className="link-btn" onClick={() => onClose()}> Register here.</Link>
            </div>

        </div>
    )
}

export default Login;