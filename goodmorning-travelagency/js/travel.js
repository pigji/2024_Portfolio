//1. 상단 서브메뉴
//사이드바(아이콘 클릭 시 사이드바 열리도록 이벤트)
const appBtn = document.querySelector('.header-appBar-wrap');
const mobileMenuBar = document.querySelector('#header');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBt = document.querySelector('.appbarCloseBt');


//서브창 열기 아이콘을 눌렀을때
appBtn.addEventListener('click', () => {
  mobileMenu.style = 'display: block';
})

//닫기버튼 아이콘을 눌렀을때
closeBt.addEventListener('click', () => {
  mobileMenu.style = 'display: none';
})


//
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
//4. 먹방여행 영역 슬라이드 구현
const list = document.querySelector("#slide");  //목록을 감싸는 요소 선택
const listLi = document.querySelectorAll("#slide > li");

const show_num = 4; //한번에 보여줄 수 있는 슬라이드 갯수
const total = listLi.length;    //전제 슬라이드 갯수

const li_width = parseInt(getComputedStyle(listLi[0]).width);   //첫번째 li의 넓이를 변수에 정수로 저장
console.log(li_width);  //확인

let eventhandler = true;    //이벤트를 제어할때 사용하는 변수(true일때만 이벤트 적용)

//무한으로 스크롤하기 위해서 4개의 슬라이드를 복사하여 추가
for(let i = 0; i < show_num; i++){
    //li요소의 순번이 i번째인 요소를 복제, 자식요소까지 복제
    const copyobj = listLi[i].cloneNode(true);
    list.appendChild(copyobj);	//복제한 요소를 list에 추가
}
console.log(document.querySelectorAll("#slide li").length);	// 9출력 확인

//#slide 넓이를 li의 갯수만큼 늘리거나 줄여줌
list.style.width = li_width * document.querySelectorAll("#slide li").length + "px";

//현재 슬라이드 번호
let num = 0;
//슬라이드를 자동으로 전환하는 기능을 수행
    //autoplay 함수생성
function autoplay(){
    //num의 전체 슬라이드 수에 도달하면 num을 0으로 초기화
    if(num === total){
        num = 0;	//초기화
        list.style.transition = 'none';	//transition을 제거
        list.style.marginLeft = '0px';	//#banner의 marginLeft값을 0으로 초기화
    }
    //0.05초 후에 함수를 실행
    setTimeout(function(){
        num++;	//num값을 1증가 시킴
        list.style.transition = 'margin-left .5s';
        //li의 넓이값 * num만큼 마이너스 값을 적용하여 왼쪽으로 이동
        list.style.marginLeft = `${-li_width * num}px`
    }, 50);
}

//슬라이드 자동실행
let timer = setInterval(autoplay, 2000);

//마우스 hover시 슬라이드 정지/ 마우스 아웃시 재개
const listWrap = document.querySelector('.slide_wrap');
listWrap.addEventListener('mouseover', () => clearInterval(timer));
listWrap.addEventListener('mouseout', () => timer = setInterval(autoplay, 3000));

//next버튼에 클릭이벤트 리스너 추가
// document.querySelector('.next').addEventListener('click', function (e) {
//     if (eventhandler) {//eventhandler가 true일때만 실행
//       eventhandler = false;//슬라이드 중에 이벤트가 중첩으로 실행되는 것을 막아줌
//       if (num === total) {
//         num = 0;
//         list.style.transition = 'none';//transition을 제거
//         list.style.marginLeft = '0px';//#banner의 marginLeft값을 0으로 초기화
//       }
//       //0.05초 후에 함수를 실행
//       setTimeout(function () {
//         num++;//num값을 1 증가시킴
//         list.style.transition = 'margin-left .5s';
//         //li의 넓이값 * num만큼 마이너스값을 적용하여 왼쪽으로 이동
//         list.style.marginLeft = `${-li_width * num}px`;

//         //0.5초 후에 evnethandler를 true로 변경하여 다시 이벤트가 발생하도록 만들어 줍니다.
//         setTimeout(function(){
//           eventhandler = true;
//         }, 500);
//       }, 50);
//     }
//   });

//   //prev버튼에 클릭이벤트 리스너 추가
//   document.querySelector('.prev').addEventListener('click', function (e) {
//     if (eventhandler) {//eventhandler가 true일때만 실행
//       eventhandler = false;//슬라이드 중에 이벤트가 중첩으로 실행되는 것을 막아줌
//       if (num === 0) {//num이 0이 되면
//         num = total;//num값을 list의 마지막 순번으로 적용
//         list.style.transition = 'none';//transition을 제거
//         list.style.marginLeft = `${-li_width*num}px`;//#banner의 marginLeft값을 li요소의 마지막 위치로 이동
//       }
//       //0.05초 후에 함수를 실행
//       setTimeout(function () {
//         num--;//num값을 1 감소시킴
//         list.style.transition = 'margin-left .5s';
//         //li의 넓이값 * num만큼 마이너스값을 적용하여 왼쪽으로 이동
//         list.style.marginLeft = `${-li_width * num}px`;

//         //0.5초 후에 evnethandler를 true로 변경하여 다시 이벤트가 발생하도록 만들어 줍니다.
//         setTimeout(function(){
//           eventhandler = true;
//         }, 500);
//       }, 50);
//     }
//   })

/*------------------------------------------------------------------------*/
//5. 오늘 본 상품 팝업창 구현
/*------------------------------------------------------------------------*/
//6. 최상단 이동버튼
// 카카오톡 상담 창