import React from 'react'
import './AboutUs.css'
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    
    <div className="about">
        <img className='pic' src="https://static.vecteezy.com/system/resources/previews/002/917/917/non_2x/set-of-people-work-in-construction-industry-cartoon-characters-free-vector.jpg" alt="" />
      <div className="about_text">
        <h2>About Us</h2>
      <p>Welcome to DailyWork, your go-to job searching website for local individuals seeking daily work opportunities. We understand the importance of connecting people with short-term job opportunities that fit their skills and availability.
      <br /> <br />
At DailyWork, we provide a platform that caters specifically to those who prefer daily work assignments. Whether you're a skilled laborer, a student looking for part-time gigs, or someone seeking additional income, our platform is designed to help you find the right job quickly and conveniently.
<br /> <br />
One of the unique features of DailyWork is that not only can you search for jobs, but you can also post job listings if you require additional workforce. Our platform serves as a meeting ground for job seekers and employers, offering a seamless experience for both parties.
<br />  <br />
As a team, we are committed to constantly improving and expanding our services. We are currently focusing on developing a nearby job searching feature, which will enable users to find work opportunities in their immediate vicinity. This feature will further enhance the user experience, making job hunting more efficient and localized.
<br />  
Our mission is to make the process of finding daily work easier and more accessible for everyone. We strive to connect individuals with opportunities that match their skills, preferences, and location, empowering them to take control of their employment journey.
<br />  <br />
Join DailyWork today and experience a simplified job searching process. Whether you're looking for work or need to hire capable individuals, we are here to support you every step of the way. Together, let's bridge the gap between job seekers and employers, fostering economic growth and prosperity in our local communities.</p>
        <div className="data">
        <Link className="hire" to='/contact' >Contact Us</Link>
        </div>
      </div>
    </div>
  
  )
}

export default AboutUs