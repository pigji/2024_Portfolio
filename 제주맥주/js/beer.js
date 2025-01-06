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


//top버튼
const btn = document.querySelector(".topBtn3");

//브라우저 내에서 스크롤 이벤트가 발생했을때
addEventListener('scroll', () => {
  //변수 생성
  let scrollTop = window.scrollY; //스크롤 이동 값
  
  if(scrollTop > 40){
    btn.style.display = 'block';
  }
  else{
    btn.style.display = 'none';
  }
});

//버튼을 클릭하면 브라우저 최상단으로 이동
btn.addEventListener('click', (e) => {
  e.preventDefault(); //a태그 링크기능 제거

  //window에 srollTo API를 사용하여 페이지 상단으로 부드럽게 스크롤 이동
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: 'smooth'  //부드러운 스크롤 이동
  })
})