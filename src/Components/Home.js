import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem('user')){
        navigate(-1);
    }
  });

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('user');
    //alert('Logged Out');
    navigate('/');
  }
  return (
    <div>
        <button onClick={(e) => handleLogOut(e)}> LogOut </button>
        <h1> WelCome : {localStorage.getItem('user')}</h1>
    </div>
  )
}

export default Home