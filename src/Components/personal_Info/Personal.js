import React, { useState,props } from 'react'
import './Personal.css'
import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:5000/users'
});

const Personal = () => {
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        gender: '',
        dob:'',
        state: '',
        pin:'',
        upload:'',
        subject:''
    });

    const handleChanage = (e) => {
        e.preventDefault();
        let name = e.target.name;
        var val = e.target.value;
        setUser((user) => ({ ...user, [name]: val }));
        // console.log(e);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        client.post('/personal', user).
        then(res => handleResponse(res)).
        catch(err => alert(err));
        console.log(user);
    }

    const handleResponse = (res) => {
        if(res.status == 201){
            alert("personal details updated...");
        }else{
            alert("Some error occurred...");
        }
    }
    return (
        <div className='personal_form'>
            <h3>Personal Information</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">First Name</label>
                <input value={"gaurav"} disabled onChange = {(e) => handleChanage(e)} className='text' type='text' id="fname" name="first_name" placeholder="Your name.." required/>

                <label htmlFor="lname">Last Name</label>
                <input value={user.last_name} onChange = {(e) => handleChanage(e)} className='text' type="tex" id="lname" name="last_name" placeholder="Your last name.."required />
               
                <label htmlFor="email">Email</label>
                <input value={user.email} onChange = {(e) => handleChanage(e)} className='text' type="email" placeholder="abc@xyz.com" id="email" name="email"required />

                <label htmlFor="state">State</label>
                <select value={user.state} onChange = {(e) => handleChanage(e)} className='state' name="state">
                    <option value="Uttarpradesh">UttarPradesh</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Rajasthan">Rajasthan</option>
                </select>
                
                <p>Gender:</p>

                <span className='gend'>
                <input value={'male'} onChange = {(e) => handleChanage(e)}  name='gender' className='gender' type="radio" />
                <label className='mf' htmlFor="male">Male</label>
                </span>

                <span className='gend'>
                <input name='gender' value={'female'} onChange = {(e) => handleChanage(e)} className='gender' type="radio" />
                <label className='mf' htmlFor="female">Female</label>
                </span>
                
                <label htmlFor="phone">Phone:</label>
                <input value={user.phone} onChange = {(e) => handleChanage(e)} className='text' type="tel" name="phone" id="phone" placeholder='phone no.' required/>

                <label htmlFor="phone">Pincode:</label>
                <input value={user.pin} onChange = {(e) => handleChanage(e)} className='text' type="number" name="pin" id="Pin" placeholder='Pincode' required />
             
                <label for="dob">Date of birth:</label>
                <input className='text' onChange = {(e) => handleChanage(e)} type="date" name="dob" id="dob" placeholder='example:18' required></input>

                <label for="fileselect">Photo Upload:</label>
                <input value={user.upload} onChange = {(e) => handleChanage(e)} type="file" name="upload" id="fileselect"/>
                
               

                <label className='ay' htmlFor="subject">Abour Yourself</label>
                <textarea value={user.subject} onChange = {(e) => handleChanage(e)} className='subject' name="subject" placeholder="Write something.." required></textarea>

                <button type='submit' id='button' value="Submit" >Submit</button>

                        </form>

                    </div>
                    )
}

export default Personal