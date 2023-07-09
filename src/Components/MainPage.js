import React from 'react'
import './MainPage.css'
import {Link, useNavigate } from 'react-router-dom';
import nit from '../assets/images/working at dailyWork.webp';
import ourvalues from '../assets/images/ourvalues.avif'
import ourteams from '../assets/images/teamsimage.png'
import laptop from '../assets/images/laptop-coffee-2-460x250.jpg'
import heart from '../assets/images/hearthands-460x250.png'
import { hover } from '@testing-library/user-event/dist/hover';

const MainPage = (props) => {
    console.log(navigator.onLine);
    return (
        <>
        <div className="main">
            <div className="main_left">
                <h1>Want to find a Work?</h1>
                <img id="back_image"src={nit}/>
                <div class="bottom-left">
                <h2>Search at DailyWork</h2>
                </div>
            </div>
            <div className="main_right">
                {props.children}
            </div>
        </div>

        <div className='main_bottom1' >
                <h1>Life at DailyWork is innovative, supportive, and fun.</h1>
                <p>Our employees are our top priority, just as job seekers are in our platform. We foster an innovative and collaborative culture where diversity is celebrated, and our shared passion for connecting people with daily work opportunities thrives.</p>
                <button className='main_bottom1_button' >
                    <Link className='mainpage_link' to='/jobsection' style={{textDecoration:"none"}}>View Jobs</Link>
                </button>
        </div>

        <div className="ourValues">
            
            <span className="has-image">
                <img className='our_values_img' src={ourvalues} alt="ourValues" />

                <span className="values_content">
                <h1>Our Values</h1>
                <p>At DailyWork, our values are deeply rooted in our commitment to prioritize the needs of job seekers and employers. We are driven by a student-first approach, always putting their interests at the forefront. We are one team – we are DailyWork.</p>
            </span>
            </span> 
        </div>
        <div className="ourTeams">
        <span className="teams_content">
                <h1>Teams</h1>
                <p>At DailyWork, our teams are at the forefront of modernizing the daily work landscape for individuals today. With a collective focus on uncovering and addressing the most pertinent issues, we are dedicated to revolutionizing the way people find and engage in daily work opportunities.</p>
                <button className='explore_team'>Explore</button>
                </span> 
            <span className="teams_image">
                <img src={ourteams} alt="" />
                
            </span>
        </div>

       <div className="explore_more">
          <div className="latest_news">
            <img src={laptop} alt="laptop" />
            <span className="newstext">
                <h2>Latest News</h2>
                <p>As the world evolves, we share industry insights, press releases, and other relevant news from around the globe.</p>
                <a href="">View our latest news</a>
            </span>
          </div>
          <div className="latest_news">
            <img src={heart} alt="laptop" />
            <span className="newstext">
                <h2>Jobs</h2>
                <p>Our community is growing, and so are we. We have many positions open. See all the ways you can join our team.</p>
                <a href="">View job opportunities</a>
            </span>
          </div>
          
       </div>
        </>
    )
}

export default MainPage