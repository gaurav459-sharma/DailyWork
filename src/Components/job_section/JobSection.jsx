import React from 'react'
import './JobSection.css'

function JobSection() {
  return (
    <div >
        
        <section className='search container'>
          <h2>Search for your next job</h2>
          <form action="">
            <input className='input_section' type="text" placeholder='Search by title, skill, or company' />
            <input className='input_section' type="text" placeholder='City, state, or zip code' />
            <button className='search_btn'>Search</button>
          </form>
        </section>

        <section className='listing container'>
            <h3 className='listing_heading'>Based on your profile</h3>
            <ul className="listing_grid">
                <li className="card">
                    <img className='card_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" />
                    <div className="card_heading"><a href="">Software Engineer</a></div>
                    <div className="card_text">Google</div>
                    <div className="card_text">Hyderabad, IN</div>
                    <div className="card_text card_text_small">9 connections</div>
                    <hr className='card_separator' />
                    <div className="cardtext card_text card_text_small">6 days ago</div>
                </li>
                <li className="card">
                    <img className='card_logo' src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg" alt="" />
                    <div className="card_heading"><a href="">Senior Software Engineer</a></div>
                    <div className="card_text">Amazon</div>
                    <div className="card_text">Hyderabad, IN</div>
                    <div className="card_text card_text_small">9 connections</div>
                    <hr className='card_separator' />
                    <div className="cardtext card_text card_text_small">6 days ago</div>
                </li>
                <li className="card">
                    <img className='card_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png" alt="" />
                    <div className="card_heading"><a href="">Web developer</a></div>
                    <div className="card_text">TCS</div>
                    <div className="card_text">Banglore, IN</div>
                    <div className="card_text card_text_small">5 connections</div>
                    <hr className='card_separator' />
                    <div className="cardtext card_text card_text_small">6 days ago</div>
                </li>
                <li className="card">
                    <img className='card_logo' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                    <div className="card_heading"><a href="">Software Engineer</a></div>
                    <div className="card_text">Uber</div>
                    <div className="card_text">Noida, IN</div>
                    <div className="card_text card_text_small">9 connections</div>
                    <hr className='card_separator' />
                    <div className="cardtext card_text card_text_small">6 days ago</div>
                </li>
                <li className="card">
                    <img className='card_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" alt="" />
                    <div className="card_heading"><a href="">Software Engineer</a></div>
                    <div className="card_text">Microsoft</div>
                    <div className="card_text">Hyderabad, IN</div>
                    <div className="card_text card_text_small">9 connections</div>
                    <hr className='card_separator' />
                    <div className="cardtext card_text card_text_small">2 days ago</div>
                </li>
                <li className="card">
                    <img className='card_logo' src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png" alt="" />
                    <div className="card_heading"><a href="">Cloud Engineer</a></div>
                    <div className="card_text">Netflix</div>
                    <div className="card_text">Gurgaon, IN</div>
                    <div className="card_text card_text_small">11 connections</div>
                    <hr className='card_separator' />
                    <div className="cardtext card_text card_text_small">4 days ago</div>
                </li>
            </ul>

        </section>
    </div>
    
  )
}

export default JobSection