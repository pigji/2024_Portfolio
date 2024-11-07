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

//첫번째 li의 넓이를 변수에 저장
const li_width = parseInt(getComputedStyle(listLi[0]).width);
console.log(li_width) //넓이 확인

//이벤트를 제어할때 사용하는 변수(true일때만 이벤트 적용하도록 설정)
let eventhandler = true;

//무한으로 스크롤 하기 위해서 슬라이드 복사하여 추가
for(let i = 0; i < show_num; i++){
  //li요소의 순번이 i번째인 요소 복제
  const copyobj = listLi[i].cloneNode(true);
  list.appendChild(copyobj);  //복제한 요소를 list에 추가
}
console.log(document.querySelectorAll("#banner li").length + "px")

//banner의 넓이를 li의 갯수만큼 늘리거나 줄여줌
list.style.width = li_width * document.querySelectorAll("#banner li").length + "px";

//현재 슬라이드 번호
let num = 0;

//슬라이드 자동 전환 기능
function autoplay(){
  //num의 전체 슬라이드 갯수에 도달(4개)하면 num을 0으로 초기화
  if(num == total){
    num = 0;  //초기화
    list.style.transition = 'none';
    list.style.marginLeft = '0px';
  }
  //0.05초 후에 함수 실행
  setTimeout(function(){
    num++;
    list.style.transition = 'margin-left .5s';
    //li의 넓이값 * num만큼 마이너스 값을 적용하여 왼쪽으로 이동
    list.style.marginLeft = `${-li_width * num}px`
  }, 50)
}

//슬라이드 자동으로 실행
let timer = setInterval(autoplay, 3000);

//마우스 hover시 슬라이드 정지 , 아웃시 슬라이드 재개
const listWrap = document.querySelector('.Service_AccAll1');
listWrap.addEventListener('mouseover', () =>  clearInterval(timer));
listWrap.addEventListener('mouseout', () => timer = setInterval(autoplay, 3000));