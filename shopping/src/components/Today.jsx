import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import Swiper core and required modules
import { Navigation, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css/navigation';
//리액트 아이콘
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";


const Today = () => {
  return (
    <div className='today mt20'>
      <h4>오늘출발. 오늘도착.새벽도착🚚</h4>
      <h2>오늘출발</h2>
      <div className='todayBox'>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={4} //화면에 보일 갯수
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation = {{nextEl: '.swipernext', prevEl: '.swiperprev'}}
        >
          <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/newitem1.gif"} alt="슬라이드이미지" /></SwiperSlide>
          <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/newitem2.gif"} alt="슬라이드이미지" /></SwiperSlide>
          <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/newitem3.gif"} alt="슬라이드이미지" /></SwiperSlide>
          <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/newitem4.gif"} alt="슬라이드이미지" /></SwiperSlide>
          <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/newitem5.gif"} alt="슬라이드이미지" /></SwiperSlide>
          <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/newitem6.gif"} alt="슬라이드이미지" /></SwiperSlide>
          <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/newitem7.gif"} alt="슬라이드이미지" /></SwiperSlide>
          <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/newitem8.gif"} alt="슬라이드이미지" /></SwiperSlide>
          <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/newitem9.gif"} alt="슬라이드이미지" /></SwiperSlide>
          <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/newitem10.gif"} alt="슬라이드이미지" /></SwiperSlide>
        </Swiper>
        <div className="pagenation"> {/* 좌, 우 이동버튼 */}
          <div className="swipernext"><GrCaretNext /></div>
          <div className="swiperprev"><GrCaretPrevious /></div>
        </div>
      </div>
    </div>
  );
}

export default Today;