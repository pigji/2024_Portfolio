import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='headerMenu'>
          <div className="top">
            <ul>
              <li><a href="#">메인</a></li>
              <li><a href="#">로그인</a></li>
              <li><a href="#">회원가입</a></li>
              <li><a href="#">커뮤니티</a></li>
            </ul>
          </div>
          <div className="sub">
            <div className="logo">
              <img src="../img/굿모닝여행사로고.png" alt="" />
            </div>
            <div className="search">
              <input type="text" placeholder='검색어를 입력해주세요.' />
            </div>
            <div className='subMenu'>
              <ul>
                <li><a href="#">
                  <div className='subBox'>
                    <img src="../img/해맞이.png" alt="" />
                    <p>해맞이여행</p>
                  </div>
                </a></li>
                <li><a href="#">
                  <div className='subBox'>
                    <img src="../img/예약확인.png" alt="" />
                    <p>예약확인</p>
                  </div>
                </a></li>
                <li><a href="#">
                  <div className='subBox'>
                    <img src="../img/출발장소.png" alt="" />
                    <p>출발장소</p>
                  </div>
                </a></li>
                <li><a href="#">
                  <div className='subBox'>
                    <img src="../img/여행가이드.png" alt="" />
                    <p>여행가이드</p>
                  </div>
                </a></li>
                <li><a href="#">
                  <div className='subBox'>
                    <img src="../img/출발일.png" alt="" />
                    <p>출발일확정</p>
                  </div>
                </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;