import React, { useState,props } from 'react'
import './Personal.css'

const Personal = () => {
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        state: '',
        gender: '',
        phone: '',
        pin:'',
        dob:'',
        upload:'',
        subject:''
    });

    const handleChanage = (e) => {
        e.preventDefault();
        let name = e.target.name;
        var val = e.target.value;
        setUser((user) => ({ ...user, [name]: val }));
        console.log(e);
    }
    return (
        <div className='personal_form'>
            <h3>Personal Information</h3>
            <form >
                <label htmlFor="fname">First Name</label>
                <input value={user.firstname} className='text' type='text' id="fname" name="firstname" placeholder="Your name.." required/>

                <label htmlFor="lname">Last Name</label>
                <input value={user.lastname} className='text' id="lname" name="lastname" placeholder="Your last name.."required />
               
                <label htmlFor="lname">Email</label>
                <input value={user.email} className='text' type="email" placeholder="abc@xyz.com" id="email" name="email"required />

                <label htmlFor="state">State</label>
                <select value={user.state} className='state' name="state">
                    <option value="Uttarpradesh">UttarPradesh</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Rajasthan">Rajasthan</option>
                </select>
                
                <p>Gender:</p>

                <span className='gend'>
                <input value={'male'}  name='gender' className='gender' type="radio" />
                <label className='mf' htmlFor="male">Male</label>
                </span>

                <span className='gend'>
                <input name='gender' value={'female'} className='gender' type="radio" />
                <label className='mf' htmlFor="female">Female</label>
                </span>
                
                <label htmlFor="phone">Phone:</label>
                <input value={user.phone} className='text'type="phone" name="phone" id="phone" placeholder='phone no.' required/>

                <label htmlFor="phone">Pincode:</label>
                <input value={user.pin} className='text'type="number" name="Pin" id="Pin" placeholder='Pincode' required />
             
                <label for="dob">Date of birth:</label>
                <input className='text' type="date" name="dob" id="dob" placeholder='example:18'></input>

                <label for="fileselect">Photo Upload:</label>
                <input value={user.upload} type="file" name="upload" id="fileselect"/>
                
               

                <label className='ay' htmlFor="subject">Abour Yourself</label>
                <textarea value={user.subject} className='subject' name="subject" placeholder="Write something.."></textarea>

                <button type='submit' id='button' value="Submit" >Submit</button>

                        </form>

                    </div>
                    )
}

export default Personal