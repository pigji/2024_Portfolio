function videoResizeFn(){
  let winW=window.innerWidth;
  let winH=window.innerHeight;
  let vidH=document.getElementById('mainVideo').clientHeight;
  let vidW=document.getElementById('mainVideo').clientWidth;

  document.querySelector('.m-video').style.width="100%";
  document.querySelector('.m-video').style.height=winH + 'px';

  if(winH > vidH){
    document.getElementById('mainVideo').style.width="auto";
    document.getElementById('mainVideo').style.height=winH + 'px';
  }
  if(winW > vidW){
    document.getElementById('mainVideo').style.width=winW+'px';
    document.getElementById('mainVideo').style.height='auto';
  }
}

window.addEventListener('resize', videoResizeFn);
videoResizeFn();



//비디오 재생 on, off 변수 생성
let videoPlay = 'on';
let soundMuted = 'off';

let mainVideo = document.getElementById('mainVideo');
mainVideo.autoplay = true;
mainVideo.loop = 0;
mainVideo.muted = true;

//클릭이벤트 추가[비디오 정지/재생]
document.querySelector('.pauseIcon').addEventListener('click', function(){
  if(videoPlay === 'on'){
    mainVideo.pause();  
    document.querySelector('.pauseIcon i').className = "fas fa-play"; //아이콘 변경
    videoPlay = 'off';  //비디오 정지
  }
  else{
    mainVideo.play();
    document.querySelector('.pauseIcon i').className = "fas fa-pause"; //아이콘 변경
    videoPlay = 'on'; //비디오 재생
  }
});

//스페이스바 눌렀을 때 비디오[재생/일시정지] 이벤트 추가
document.addEventListener('keypress', function(e){
  if(e.keyCode===32){
    e.preventDefault(); //기본값 제거
    if(videoPlay==="on"){
      videoPlay="off";
      mainVideo.pause();
      document.querySelector('.pauseIcon i').className = "fas fa-play";
    }else{
      mainVideo.play();
      document.querySelector('.pauseIcon i').className = "fas fa-pause";
      videoPlay='on'
    }
  }
})

//클릭이벤트 추가[비디오 음소거/소리]
document.querySelector('.mutedIcon').addEventListener('click', function(){
  if(soundMuted === 'off'){
    mainVideo.muted = false;  
    document.querySelector('.mutedIcon i').className = "fas fa-volume-up";  //아이콘 변경
    soundMuted = 'on';
  }
  else{
    mainVideo.muted = true;
    document.querySelector('.mutedIcon i').className = "fas fa-volume-mute";  //아이콘 변경
    soundMuted = 'off';
  }
});


//Enter 눌렀을 때 비디오 소리[음소거/소거] 이벤트 추가
document.addEventListener('keypress', function(e){
  if(e.keyCode===13){
    e.preventDefault(); //기본값 제거
    if(soundMuted==='off'){
      mainVideo.muted=false;
      document.querySelector('.mutedIcon i').className = "fas fa-volume-up";
      soundMuted='on'
    }else{
      mainVideo.muted=true;
      document.querySelector('.mutedIcon i').className = "fas fa-volume-mute";
      soundMuted='off'
    }
  }
});

/*------------------------------------------------------*/
//again
//변수 생성
let setId = setInterval(function(){
  if(mainVideo.ended){
    document.querySelector('.m-again').style.display = 'block';
    videoPlay = 'off';
    document.querySelector('.pauseIcon i').className = 'fas fa-play';
    clearInterval(setId)
  }
}, 100); //0.01초 마다 실행

//replay 비디오
document.querySelector('.m-again').addEventListener('click', function(){
  videoPlay = 'on';
  mainVideo.play();
  document.querySelector('.ppauseIcon i').className = 'fas fa-pause';
})

/*------------------------------------------------------*/
//다음 섹션으로 이동
let nextTop = document.querySelector('#section2').offsetTop;
//console.log(nextTop); //높이 확인
document.querySelector('.nextIcon').addEventListener('click', function(){
  window.scrollTo({top: nextTop, behavior: 'smooth'});  //스무스(부드럽게) 이동
})
