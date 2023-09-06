/*  메뉴 */
$(document).ready(function () {
  //처음위치
  $("#sidebar").css({"left":"-200px"})
  $(".sub_box").css({"left":"-200px"});
  qchk=true;
  $(".trigger").click(function(){
  $(this).toggleClass("active");
  if(qchk){
    $(this).stop().animate({left:"200px"},500);
    $("#sidebar").stop().animate({left:"0px"},500);
    qchk=false;
    }else{
    $(this).stop().animate({left:"50px"},500);
    $("#sidebar").stop().animate({left:"-200px"},500);
    qchk=true;
  }
  });
  //사이드바가 등장 후 주메뉴 오버시 나오는 서브 박스
  $(".main").hover(function(){
    $(this).find(".sub").stop().show("slow");
    $(".sub_box").stop().animate({left:"200px"},300);
    $(".trigger").stop().animate({left:"150px"},300);
  },function(){
    $(this).find(".sub").stop().hide("fast");
  });

  $(".main").mouseleave(function(){
    $(".sub_box").stop().animate({left:"-200px"},300);
    $(".trigger").stop().animate({left:"150px"},300);
  });

  
  /* 메뉴 슬라이드 */
  $(window).scroll(function(){

    let pos=$(window).scrollTop();
    if(pos>50){
      $("header, .btn-top").addClass('active');
    }else{
      $("header, .btn-top").removeClass('active');
    }
  });


  /* 메인 슬라이드 */

/* 현재전시 슬라이드1 */
$(".side_btn .lbtn").click(function(){

  $(".ban ul").stop(true,true).animate({marginLeft:"-=1200px"},500,function(){
    $(".ban ul li:first-child").appendTo(".ban ul"); //첫번째 이미지 맨뒤로 이동
    $(this).css({marginLeft:"0px"});//최종 목적지
  });
  });

//이전보기
    $(".side_btn .rbtn").click(function(){
  $(".ban ul").stop(true,true).animate({marginLeft:"+=1200px"},500,function(){
    $(".ban ul li:last-child").prependTo(".ban ul"); //마지막 이미지 맨앞로 이동
    $(this).css({marginLeft:"0px"});//최종 목적지
  });

});

  /* 패이지 넘기기 */
  let nold=0;
  //다음보기
  $(".nright").click(function(){

    nnew=nold+1;
    nnum=$(".edtext").length;

    if(nnew<nnum){//이미지 전체계수보다 적으면 수행
      $(".edtext").eq(nold).hide();
      $(".edtext").eq(nnew).show();
      nold=nnew;
    }
  });
  //이전보기
  $(".nleft").click(function(){
    nnew=nold-1;

    if(nnew>=0){
      $(".edtext").eq(nold).hide();
      $(".edtext").eq(nnew).show();
      nold=nnew;}
  });
  /* 공지사항 */
  $(".newsbtn li").click(function(){
    
    $(this).addClass("active"); 
    $(this).siblings().removeClass("active");

    let result = $(this).attr("data-alt");
    $(".tabMews_C div").removeClass("active");
    $("#"+result).addClass("active").hide().fadeIn();
  });
  /* footer */
  site=true;
  $(".sitemap_btn").click(function(){
    if(site){
      $(this).find("span").html("<i class='fa fa-chevron-up'></i>");
      $(".footer_sitemap").stop().css({"height":"240px","border-bottom":"1px solid #c3c3c3"});
      $(".sitemap").fadeIn();
      site=false;
    }else{
      $(this).find("span").html("<i class='fa fa-chevron-down'></i>");
      $(".footer_sitemap").stop().css({"height":"0px","border-bottom":"none"});
      $(".sitemap").fadeOut();
      site=true;
    }
  })
});
