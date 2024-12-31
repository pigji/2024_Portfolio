//닫기버튼을 만들고 각 목록 항목에 추가
const myList = document.querySelectorAll('#myUL > li');
myList.forEach(list => addCloseBtn(list)) //forEach문으로 list를 순환하면서 addCloseBtn함수를 호출하여 인자값으로 list(해다아 순번의 li요소)를 전달

//addCloseBtn함수를 생성, list매개변수로 인자를 전달받음
function addCloseBtn(list){
  const span = document.createElement("span");  //span요소를 생성
  const txt = document.createTextNode("\u00d7");  //txt변수에 x를 텍스트노드로 저장

  span.setAttribute("class", "close");  //span요소에 close클래스를 추가
  span.appendChild(txt);  //txt를 span요소에 넣어줌
  list.appendChild(span); //list에 마지막 자손으로 생성한 span요소를 추가하여 닫기버튼을 생성
}

//닫기버튼(x버튼)을 클릭하여 현재 목록 항목을 숨긴다.
const closes = document.querySelectorAll('.close');
closes.forEach(close => CloseEvent(close)); //forEach문으로 close버튼을 순화하면서 closeEvent함수를 호출, 인자로 close버튼을 전달

//closeEvent함수를 생성(Close매겨변수로 인자를 전달받음)
function CloseEvent(close){
  close.addEventListener("click", () => {
    //버튼요소의 부모요소(li)를 선택하여 display속성을 none으로 변경하여 제거
    close.parentElement.style.display = "none";
  })
}

//목록항목을 클릭하면 checked 기호 추가
const list = document.querySelector("#myUL");
list .addEventListener('click', (e) => {
  //클릭이벤트가 발생한 타켓요소의 태그가 li일 경우
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked"); // 타켓요소에 checked클래스가 있으면 제거, 없으면 추가
  }
});

//추가버튼 클릭 시 새로운 목록 항목 생성
const addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", () => {
  const li = document.createElement("li");  //li요소 생성
  const myInput = document.querySelector("#myInput");
  const inputValue = myInput.value; //myInput요소에 입력한 내용을 inputValue에 저장
  const txt = document.createTextNode(inputValue); //inputValue값을 텍스트 노드로 txt변수에 저장

  li.appendChild(txt);  //li요소에 txt를 넣어준다.
  if(inputValue === ""){  //입력창에 아무것도 입력하지 않았을 경우 경고창 띄워줌
    alert("입력창에 아무것도 입력하지 않았습니다.")
  }
  else{ //입력창에 값이 있을 경우에만 li요소를 list에 추가
    list.appendChild(li);
  }

  myInput.value = ""; //myInput에 입력한 값을 비워줍니다.
  addCloseBtn(li);  //addCloseBtn함수를 인자로 생성한 li요소를 전달하여 close버튼 생성

  const close = li.querySelector(".close"); //생성한 li요소에 close버튼 선택
  CloseEvent(close);  //closeEvent함수의 인자로 생성한 li요소의 close버튼을 전달
})