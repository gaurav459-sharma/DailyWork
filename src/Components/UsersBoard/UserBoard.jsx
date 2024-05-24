import React, { useState, useEffect } from 'react'
import './UserBoard.css'
import axios from 'axios';
import { suggestions, cities } from './Testdata';

const client = axios.create({
    baseURL: 'http://localhost:5000/users'
});


function UserBoard() {
    const [list, setList] = useState([]);
    const [currentList, setCurrentList] = useState([]);
    const [currentSgs, setCurrentSgs] = useState([]);
    const [currentCts, setCurrentCts] = useState([]);

    useEffect(() => {
        console.log("useEffect called");
        const fetchList = async () => {
            try {
                const res = await client.get('/available');
                console.log(res.data);
                setList(() => res.data);
                setCurrentList(() => res.data);
            } catch (error) {
                alert(error);
            }
        }
        fetchList();
    }, []);

    const handleSuggestions = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let temp = [];
        // setCurrent(() => []);
        if (name == "skill") {
            if (value.length > 0) {
                for (let e of suggestions) {
                    if (e.toLowerCase().startsWith(value.toLowerCase())) {
                        temp.push(e);
                    }
                }
            }
            setCurrentSgs((currentSgs) => temp);
        } else {
            if (value.length > 0) {
                for (let e of cities) {
                    if (e.toLowerCase().startsWith(value.toLowerCase())) {
                        temp.push(e);
                    }
                }
            }
            setCurrentCts((currentCts) => temp);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let skill = e.target[0].value;
        let city = e.target[1].value;
        // console.log(skill + " " + city);
        let temp = [];
        for (let e of list) {
            // console.log(e.interest + ", " + skill);
            if (e.user.interest.toLowerCase() == skill.toLowerCase()) {
                temp.push(e);
            }
        }
        setCurrentList((currentList) => temp);
    }

    return (
        <div>
            <section className='user_search user_container'>
                <h2>Search for workers</h2>
                <form action="" onSubmit={(e) => handleSubmit(e)}>
                    <input className='user_input_section' type="text" name="skill" onChange={(e) => handleSuggestions(e)} list="skills" placeholder='Search by field, skill' />
                    <datalist id="skills">
                        {currentSgs.map(e =>
                            <option key={e} value={e}>{e}</option>
                        )}
                    </datalist>
                    <input className='user_input_section' type="text" name="city" onChange={(e) => handleSuggestions(e)} list="cities" placeholder='City' />
                    <datalist id="cities">
                        {currentCts.map(e =>
                            <option key={e} value={e}>{e}</option>
                        )}
                    </datalist>
                    <button className='user_search_btn'>Search</button>
                </form>
            </section>

            <section className='user_listing container'>
                <h3 className='user_listing_heading'>Based on your "search"</h3>
                <ul className="user_listing_grid">
                    {
                        currentList.map(usr => (
                            <li className="card" key={usr._id}>
                                <img className='user_card_logo' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                                <div className="user_card_heading"><a href="">{usr.user.first_name} {usr.user.last_name}</a></div>
                                <div className="user_card_text">{usr.user.interest}</div>
                                <div className="user_card_text">{usr.user.state}</div>
                                <div className="user_card_text card_text_small">Rs 600</div>
                                <div className="user_card_text card_text_small">contact: {usr.user.phone}</div>
                                <hr className='user_card_separator' />
                                <div className="user_cardtext  user_card_text_small">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star-half" aria-hidden="true"></i>
                                </div>
                            </li>
                        ))
                    }
                </ul>

            </section>
        </div>
    )
}

export default UserBoard