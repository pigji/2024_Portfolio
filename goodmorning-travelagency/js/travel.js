//1. 상단 서브메뉴
const submenuList = document.querySelectorAll(".navMenu > ul > li");

submenuList.forEach(li => {
    li.addEventListener("mouseover", () => {
        li.querySelectorAll("ul").forEach((el) => {
            el.style.display = "block";
        })
    });
    li.addEventListener("mouseout", () => {
        li.querySelectorAll("ul").forEach((el) => {
            el.style.display = "none";
        })
    });
});

/*------------------------------------------------------------------------*/
//2. 슬라이드 배너 구현
let i = 0;  //이미지 순번을 담을 변수
//이미지 요소 선택
const bannerImg = document.querySelectorAll('.bannerBox > img');

//슬라이드 함수 구현
function slide(){
    //i가 bannerImg 갯수와 같으면 i값을 0으로 할당
    (i === bannerImg.length) && (i = 0)
  
    //현재 보이는 이미지는 왼쪽으로 이동시킴
    bannerImg[i].className = 'leftPlus';
    //다음 이미지를 .banner의 오른쪽 밖에서 왼쪽 밖으로 이동
    bannerImg[(i+1) % bannerImg.length].classList = 'left0';
    i++;
  }
  //슬라이드 함수 실행
  setInterval(slide, 7000);