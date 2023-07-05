import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuthState } from '../context';

function Home() {
  const authState = useAuthState();
  // const [userData, setUserData] = useState(
  //   {
  //     "_id":"",
  //     "first_name":"",
  //     "last_name":"",
  //     "email":"",
  //     "phone":"",
  //     "gender":"",
  //     "dob":"",
  //     "state":"",
  //     "pin":'',
  //     "upload":"",
  //     "subject":"",
  //     "createdAt":"",
  //     "updatedAt":"",
  //     "__v":''
  //   }
  // );

  const navigate = useNavigate();

  useEffect(() => {
    if (authState.currentUser === "") {
      navigate(-1);
    }
  }, []);

  return (
    <div>
      {/* <button onClick={(e) => handleLogOut(e)}> LogOut </button> */}
      <h1> Hello : {localStorage.getItem('currentUser')}</h1>
      <h1> Hello : {localStorage.getItem('currentUser')}</h1>
      <h1> Hello : {localStorage.getItem('currentUser')}</h1>
      <h1> Hello : {localStorage.getItem('currentUser')}</h1>
      <h1> Hello : {localStorage.getItem('currentUser')}</h1>
      <h1> Hello : {localStorage.getItem('currentUser')}</h1>
    </div>
  )
}

export default Home