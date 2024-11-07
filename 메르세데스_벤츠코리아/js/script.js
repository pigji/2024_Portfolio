//top버튼을 누르면 상단으로 이동하는 기능구현
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

/*--------------------------------------------------*/
//슬라이드 배너

//목록을 감싸고 있는 요소 선택
const list = document.querySelector("#banner");
//li요소 선택
const listLi = document.querySelectorAll("#banner li");

//한번에 보여줄 슬라이드 수
const show_num = 2;
//전체 슬라이드 갯수
const total = listLi.length;