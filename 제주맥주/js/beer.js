//swiper API
const swiper = new Swiper('.swiper-banner-box .swiper', {
  loop: true,   //무한반복
  slidesPerView: 5,    //화면에 보여줄 슬라이드 갯수 설정
  spaceBetween: 10,    //슬라이드 간격 설정
  slidesPerGroup: 1,   //슬라이드 될때 보여지는 갯수
  // speed: 1000,        //슬라이드 회전 속도
  // effect: "fade",     //슬라이드 전환 효과
  // fadeEffect: { crossFade: true },
  autoplay: {         //슬라이드 자동 재생
  delay: 2000,
  }
});