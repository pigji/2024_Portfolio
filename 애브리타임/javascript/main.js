//게시글 Tab메뉴 구현
//버튼요소들과 리스트 요소들을 선택
const tabMenus = document.querySelectorAll(".tab_menu > button");
const tabLists = document.querySelectorAll(".tab_list > div");

//모든 버튼을 순회하면서 클릭이벤트 추가(이벤트가 발생한 요소, 이벤트발생 인텍스)
tabMenus.forEach((tabMenu, idx) => tabMenu.addEventListener("click", () => {
  //버튼의 갯수만큼 반복실행
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


