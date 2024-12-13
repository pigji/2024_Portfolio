import React from 'react';
//리액트 아이콘
import { BiCameraMovie } from "react-icons/bi";
//링크태그
import { NavLink, Link } from 'react-router-dom';



const Navbar = () => {
  const activeStyle = {
    color: 'red'
  }
  return (
    <div className='navber'>
      <h1 className='logo'><Link to='/' /><BiCameraMovie /></h1>
      <div className="nav">
        <ul>
          <li><NavLink to="/" style={({isActive})=>(isActive ? activeStyle : undefined)}>Home</NavLink></li>
          <li><NavLink to="/movies" style={({isActive})=>(isActive ? activeStyle : undefined)}>Movies</NavLink></li>
          <li><NavLink to="/event" style={({isActive})=>(isActive ? activeStyle : undefined)}>Event</NavLink></li>
          <li><NavLink to="/users" style={({isActive})=>(isActive ? activeStyle : undefined)}>users</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;