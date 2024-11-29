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
  //다음 이미지를 .banner의 오른쪽 밖에에서 왼쪽 밖으로 이동
  boxImgs[(i+1) % boxImgs.length].classList = 'left0';
  //다다음 이미즈는 오른쪽 밖으로 이동
  boxImgs[i+2].classList = 'leftPlus400';
  i++;
}
//슬라이드 함수 실행
setInterval(slide, 7000);