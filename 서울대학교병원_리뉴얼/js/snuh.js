//구현1. 배너 슬라이드
let i = 0;  //이미지 순번을 담을 변수
//이미지 요소 선택
const boxImgs = document.querySelectorAll('.banner_box > img');

//슬라이드 함수 구현
function slide(){
  //i가 boxImgs의 갯수와 같으면 i값을 0으로 할당
  (i === boxImgs.length) && (i = 0)

  //현재 보이는 이미지는 왼쪽으로 이동시킴
  boxImgs[i].className = 'leftMinus400';
  //다음 이미지를 .banner의 오른쪽 밖에서 왼쪽 밖으로 이동
  boxImgs[(i+1) % boxImgs.length].classList = 'left0';
  i++;
}
//슬라이드 함수 실행
setInterval(slide, 7000);

/*-------------------------------------------------------------------- */
//구현2. 병원소개 슬라이드 쇼
//현재 표시되는 슬라이드
let slidexIndex = 1;

//처음페이지가 로드될 때 showSlides함수를 호출하여 첫번째 슬라이드 표시
showSlides(slidexIndex);

//이전, 다음 버튼에 클릭이벤트 추가
  //plusSlides함수를 호출하여 이전 슬라이드로 이동
  // showSlides(slideIndex -= 1)함수를 호출하여 slideIndex값에서 1을 빼서 전달
document.querySelector(".prev").addEventListener("click", () => showSlides((slidexIndex -= 1)));

//다음 버튼을 눌렀을때 이벤트 리스너 추가
  //plusSlides함수를 호출하여 다음 슬라이드로 이동
  //showSlides(slideIndex += 1)함수를 호출하여 slideIndex값에서 1을 더해서 전달
document.querySelector(".next").addEventListener("click", () => showSlides(slidexIndex += 1));

function showSlides(n){
  //슬라이드 선택
  const slides = document.querySelectorAll('.mySlides');

  //n값이 1보다 작으면 slideIndex값을 슬라이드의 마지막 순번 값으로 할당
  if(n < 1) slidexIndex = slides.length;
  //n값이 슬라이드의 갯수보다 커지면 slideIndex값을 초기 값으로 1로 변경
  if(n > slides.length) slidexIndex = 1;

  //모든 슬라이드를 ㅡ제거
  slides.forEach(slide => {
    slide.style.display = "none";
  });
  //slideIndex -1번째의 슬라이드를 화면에 표시
  slides[slidexIndex -1].style.display = "block";
}
