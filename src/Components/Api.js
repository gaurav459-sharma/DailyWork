import React, {useState, useEffect} from 'react'
import axios from 'axios';

const client = axios.create({
    baseURL : 'http://localhost:5000/users'
  });

const Api = () => {
    const [data, setData] = useState(
      {
        "_id":"",
        "first_name":"",
        "last_name":"",
        "email":"",
        "phone":"",
        "gender":"",
        "dob":"",
        "state":"",
        "pin":'',
        "upload":"",
        "subject":"",
        "createdAt":"",
        "updatedAt":"",
        "__v":''
      }
    );
    useEffect(() => {
        function fetchData(){
          const mail = 'abhay@gmail.com';
          client.get(`/personal/${mail}`)
          .then(res => setData({...res.data}))
          .catch(err => console.log(err));
          // setData(data+1);
        }
        fetchData();
    },[]);
  return (
    <div>
        <h1>Data is : </h1>
        <div> {JSON.stringify(data)} </div>
    </div>
  )
}

export default Api