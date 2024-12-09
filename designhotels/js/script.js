//사이드바(아이콘 클릭 시 사이드바 열리도록 이벤트)
const appBtn = $('.header-appBar-wrap');
const mobileMenuBar = $('#header');
const mobileMenu = $('.mobile-menu');
const closeBt = $('.appbarCloseBt');

//서브창 열기 아이콘을 눌렀을때
appBtn.on({click:function(){
  mobileMenu.css('display', 'block').stop().animate({left: 0}, 500);  //0.5초 동안 진행
  mobileMenuBar.stop().animate({left: '100%'}, 500);
}})

//x버튼 눌렀을때 서브창 닫힘
closeBt.on({click:function(){
  mobileMenu.stop().animate({left: '-100%'}, 500, function(){
    mobileMenu.css('display', 'none')
  });
  mobileMenuBar.stop().animate({left: 0}, 500);
}})