import React from 'react'
import './UserBoard.css'

function UserBoard() {
  return (
    <div>
          <section className='user_search user_container'>
          <h2>Search for workers</h2>
          <form action="">
            <input className='user_input_section' type="text" placeholder='Search by title, skill, or company' />
            <input className='user_input_section' type="text" placeholder='City, state, or zip code' />
            <button className='user_search_btn'>Search</button>
          </form>
        </section>

         <section className='user_listing container'>
            <h3 className='user_listing_heading'>Based on your "search"</h3>
            <ul className="user_listing_grid">
                <li className="card">
                    <img className='user_card_logo' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                    <div className="user_card_heading"><a href="">Abhishek yadav</a></div>
                    <div className="user_card_text">mistri</div>
                    <div className="user_card_text">mau</div>
                    <div className="user_card_text card_text_small">Rs 600</div>
                    <div className="user_card_text card_text_small">contact: +91 1234567890</div>
                    <hr className='user_card_separator' />
                    <div className="user_cardtext  user_card_text_small">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-half" aria-hidden="true"></i>
                    </div>
                </li>
                <li className="card">
                    <img className='user_card_logo' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                    <div className="user_card_heading"><a href="">Mohan</a></div>
                    <div className="user_card_text">Google</div>
                    <div className="user_card_text">Hyderabad, IN</div>
                    <div className="user_card_text card_text_small">9 connections</div>
                    <div className="user_card_text card_text_small">contact: +91 1234567890</div>
                    <hr className='user_card_separator' />
                    <div className="user_cardtext  user_card_text_small">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-half" aria-hidden="true"></i>
                    </div>
                </li>

                <li className="card">
                    <img className='user_card_logo' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                    <div className="user_card_heading"><a href="">Nitish</a></div>
                    <div className="user_card_text">Google</div>
                    <div className="user_card_text">Hyderabad, IN</div>
                    <div className="user_card_text card_text_small">9 connections</div>
                    <div className="user_card_text card_text_small">contact: +91 1234567890</div>
                    <hr className='user_card_separator' />
                    <div className="user_cardtext  user_card_text_small">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-half" aria-hidden="true"></i>
                    </div>
                </li>
                
                <li className="card">
                    <img className='user_card_logo' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                    <div className="user_card_heading"><a href="">Rishab</a></div>
                    <div className="user_card_text">Google</div>
                    <div className="user_card_text">Hyderabad, IN</div>
                    <div className="user_card_text card_text_small">9 connections</div>
                    <div className="user_card_text card_text_small">contact: +91 1234567890</div>
                    <hr className='user_card_separator' />
                    <div className="user_cardtext  user_card_text_small">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    
                    </div>
                </li>
                
                <li className="card">
                    <img className='user_card_logo' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                    <div className="user_card_heading"><a href="">vipin jayas</a></div>
                    <div className="user_card_text">Google</div>
                    <div className="user_card_text">Hyderabad, IN</div>
                    <div className="user_card_text card_text_small">9 connections</div>
                    <div className="user_card_text card_text_small">contact: +91 1234567890</div>
                    <hr className='user_card_separator' />
                    <div className="user_cardtext  user_card_text_small">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-half" aria-hidden="true"></i>
                    </div>
                </li>
                
                <li className="card">
                    <img className='user_card_logo' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                    <div className="user_card_heading"><a href="">prashant chandel</a></div>
                    <div className="user_card_text">Google</div>
                    <div className="user_card_text">Hyderabad, IN</div>
                    <div className="user_card_text card_text_small">9 connections</div>
                    <div className="user_card_text card_text_small">contact: +91 1234567890</div>
                    <hr className='user_card_separator' />
                    <div className="user_cardtext  user_card_text_small">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-half" aria-hidden="true"></i>
                    </div>
                </li>
                <li className="card">
                    <img className='user_card_logo' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                    <div className="user_card_heading"><a href="">sanjay setia</a></div>
                    <div className="user_card_text">Google</div>
                    <div className="user_card_text">Hyderabad, IN</div>
                    <div className="user_card_text card_text_small">9 connections</div>
                    <div className="user_card_text card_text_small">contact: +91 1234567890</div>
                    <hr className='user_card_separator' />
                    <div className="user_cardtext  user_card_text_small">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    
                    </div>
                </li>
                <li className="card">
                    <img className='user_card_logo' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                    <div className="user_card_heading"><a href="">Software Engineer</a></div>
                    <div className="user_card_text">Google</div>
                    <div className="user_card_text">Hyderabad, IN</div>
                    <div className="user_card_text card_text_small">9 connections</div>
                    <div className="user_card_text card_text_small">contact: +91 1234567890</div>
                    <hr className='user_card_separator' />
                    <div className="user_cardtext  user_card_text_small">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-half" aria-hidden="true"></i>
                    </div>
                </li>
                <li className="card">
                    <img className='user_card_logo' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                    <div className="user_card_heading"><a href="">Software Engineer</a></div>
                    <div className="user_card_text">Google</div>
                    <div className="user_card_text">Hyderabad, IN</div>
                    <div className="user_card_text card_text_small">9 connections</div>
                    <div className="user_card_text card_text_small">contact: +91 1234567890</div>
                    <hr className='user_card_separator' />
                    <div className="user_cardtext  user_card_text_small">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-half-o" aria-hidden="true"></i>
                    </div>
                </li>
                <li className="card">
                    <img className='user_card_logo' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                    <div className="user_card_heading"><a href="">Software Engineer</a></div>
                    <div className="user_card_text">Google</div>
                    <div className="user_card_text">Hyderabad, IN</div>
                    <div className="user_card_text card_text_small">9 connections</div>
                    <div className="user_card_text card_text_small">contact: +91 1234567890</div>
                    <hr className='user_card_separator' />
                    <div className="user_cardtext  user_card_text_small">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-half-o" aria-hidden="true"></i>
                    </div>
                </li>
                <li className="card">
                    <img className='user_card_logo' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                    <div className="user_card_heading"><a href="">Software Engineer</a></div>
                    <div className="user_card_text">Google</div>
                    <div className="user_card_text">Hyderabad, IN</div>
                    <div className="user_card_text card_text_small">9 connections</div>
                    <div className="user_card_text card_text_small">contact: +91 1234567890</div>
                    <hr className='user_card_separator' />
                    <div className="user_cardtext  user_card_text_small">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-half-o" aria-hidden="true"></i>
                    </div>
                </li>
               
                    
            </ul>

        </section>
    </div>
  )
}

export default UserBoard