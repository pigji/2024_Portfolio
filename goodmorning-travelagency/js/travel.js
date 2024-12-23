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

/*------------------------------------------------------------------------*/
//3. 베스트시즌 Tab메뉴 구현
const tabMenus = document.querySelectorAll(".tab_menu > button");  //버튼요소 리스트 선택
console.log(tabMenus);
const tabLists = document.querySelectorAll(".tab_list > div");
console.log(tabLists)

//모든 버튼을 순회하면서 클릭이벤트를 추가(이벤트가 발생한 요소, 이벤트가 발생된 요소의 인텍스)
tabMenus.forEach((tabMenu, idx) => tabMenu.addEventListener("click", () => {
    //버튼의 갯수만큼 반복실행(tabMenus)
    for(let i=0; i < tabMenus.length; i++){
        //모든 버튼과 리스트요소에 클래스를 제거
        tabMenus[i].classList.remove("on");
        tabLists[i].classList.remove("on");
    }
    //클릭한 버튼의 on클래스 추가
    tabMenu.classList.add("on");
    //클릭한 버튼과 같은 순번의 리스트요소에 on클래스를 추가
    tabLists[idx].classList.add("on");
}))

/*------------------------------------------------------------------------*/
//4. 먹방여행 영역 자동 슬라이드 구현
/*------------------------------------------------------------------------*/
//5. 오늘 본 상품 팝업창 구현
/*------------------------------------------------------------------------*/
//6.  최상단 이동버튼
// 카카오톡 상담 창