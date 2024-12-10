// 1. More버튼 클릭 시 3개씩 추가 출력 기능구현

//변수생성
let container=document.querySelector('.gallery-wrap');
let loadMoreBtn=document.querySelector('.loadMoreBt');
let allData=[];
let addItemCount = 3;
let added=0;
let filter = document.querySelector('#gallery-filter');
let filterData = [];

//json데이터 로드
fetch('./data/data.json')
.then(response=>response.json())
.then(data => {
  allData = data;
  filterData = allData;
  addItem();

  //클릭이벤트 추가
  loadMoreBtn.addEventListener('click', addItem); //클릭할때 마다 요소개 3개씩 출력
  //change(변경)이벤트 추가
  filter.addEventListener('change', (e) => {
    if(e.target.type === 'radio'){
      filteritems(e.target.value)
    }
  })
  //console.log(allData)  //데이터 들어오는지 확인
})
.catch(error => console.error('Error loading Json:', error))

//항목 추가 함수
function addItem(){
  let element = [];

  let slicedData = filterData.slice(added, added += addItemCount);

  slicedData.forEach(item => {
    const fileExtenstion = item.video.split('.').pop().toLowerCase();
    const isMp4 = fileExtenstion === 'mp4';
    const sw = isMp4 ? (`<video src="${item.video}" autoplay muted></video>`) : (`<img src="${item.video}" />`);

    let itemHTML = `
      <li class="gallery-item">
          <div>
            <a href="javascript:" class="galleryBt">
              <span class="g-video">
                ${sw}
              </span>
              <span class="g-bg"></span>
              <span class="g-title">
                <span><strong>${item.title}</strong></span>
                <span><b>${item.description}</b></span>
                <span><i class="exploreBt">ExploreBt</i></span>
                <span><i class="category">${item.category}</i></span>
              </span>
            </a>
          </div>
      </li>
    `;

    //DOM HTML 추가
    let liElement = document.createElement('li');
    liElement.classList.add('gallery-item');
    liElement.innerHTML = itemHTML;
    element.push(liElement)
  });

  element.forEach(item => {
    container.appendChild(item);
  })

  updateLoadMoreButton(); //More버튼 클릭 시 안에 있는 게시물을 다 보여줬을 경우 버튼 문구 'END'로 변경하는 함수 실행
}

/*--------------------------------------------------------------*/
// 2. More버튼 클릭 시 안에 있는 게시물을 다 보여줬을 경우 버튼 문구 'END'로 변경
function updateLoadMoreButton(){
  if(added < filterData.length){
    loadMoreBtn.textContent = "Load More";
  }
  else{
    loadMoreBtn.textContent = "END";
  }
}

/*--------------------------------------------------------------*/
// 3. 카테고리 별 출력 기능구현

//함수 생성
function filteritems(key){
  filterData = [];
  added = 0;
  container.innerHTML = ""; //기존 아이템을 삭제(새로운 아이템이 들어오기 위해)
  if(key === 'all'){
    filterData = allData;
  }
  else{
    filterData = allData.filter(item => item.category === key);
  }
  addItem(true);
}