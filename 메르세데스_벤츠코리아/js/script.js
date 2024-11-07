//top버튼 선택
const btn = document.querySelector(".Topmove_button");

//브라우저 내에서 스크롤 이벤트가 발생했을 때
addEventListener('scroll', () => {
  //변수 생성
  let scrollTop = window.scrollY; //스크롤 이동 값

  //스크롤 이동값이 50보다 크면 '맨 위로'버튼 생성
  if(scrollTop > 50){
    btn.style.display = 'block';  
  }
  else{
    btn.style.display = 'none';
  }
});

//버튼을 클릭하면 최상단으로 이동
btn.addEventListener('click', (e) => {
  e.preventDefault(); //a태그 기본링크 제거

  //
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: 'smooth'  //부드러운 이동
  })
})