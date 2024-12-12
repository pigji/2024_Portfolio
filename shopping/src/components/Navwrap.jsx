import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Navwrap.module.css"
import { AiFillAliwangwang } from "react-icons/ai";
import { LiaAnkhSolid } from 'react-icons/lia';


const Navwrap= () => {
  /* let navigate = useNavigate(); */
  return (
    <div>
      {/* <nav>
        <ul>
          <li className='logo'>
            <span>
              <AiFillAliwangwang />
            </span>
            <b onClick={() => {navigate('/')}}>아뜨랑스</b>
          </li>
          <li>
            <b onClick={() => {navigate('/')}}>home</b>
          </li>
          <li>
            <b onClick={() => {navigate('/best')}}>Best</b>
          </li>
          <li>
            <b onClick={() => {navigate('/new')}}>New</b>
            <ul>
              <li>
                <Link to="/new/aaa">목도리</Link>
              </li>
              <li>
                <Link to="/new/bbb">지갑</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav> */}
      <nav>
        <ul>
          <li className='logo'>
            <span>
              <AiFillAliwangwang />
            </span>
            <Link to="/">아뜨랑스</Link>
          </li>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/best">Best</Link>
          </li>
          <li>
            <Link to="/new">New</Link>
            <ul>
              <li>
                <Link to="/new/aaa">목도리</Link>
              </li>
              <li>
                <Link to="/new/bbb">지갑</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/detail">Detail</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navwrap;