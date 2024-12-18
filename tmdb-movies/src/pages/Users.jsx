import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Users = () => {
  //users를 담을 배열생성
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`) //axios로 데이터 가져오기
    .then((response) => {
      setUsers(response.data)
      console.log(response.data);  //불러온 users데이터 확인
    })
  }, [])

  //Users페이지 구현
  return (
    <div>
      <h2>User List</h2>
      {
        users.map( user => (
          <div className='userCard'>
            <Link to={`users/${user.id}`}>{user.name}</Link>
          </div>
        ))
      }
    </div>
  );
};

export default Users;