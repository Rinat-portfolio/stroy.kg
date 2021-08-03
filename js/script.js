var widthWin = window.innerWidth;

if(widthWin > 1200){
  var fixTop = 120;
}else{
  var fixTop = 0;
}
$(".toServices").click(function() {
    var toServices = $(".anchorServ").offset().top - fixTop;    
    $('html, body').animate({
      scrollTop: toServices},900);
    if (widthWin<1200) {
      $(".burger-menu").toggleClass('active');
      $(".top-menu-mobile").toggleClass('menu-mobile-active');
      $('body').toggleClass('overflow-hide');
    }
});

$(".toAbout").click(function() {
    var toAbout = $(".anchorAbout").offset().top - fixTop;    
    $('html, body').animate({
      scrollTop: toAbout},900);
    if (widthWin<1200) {
      $(".burger-menu").toggleClass('active');
      $(".top-menu-mobile").toggleClass('menu-mobile-active');
      $('body').toggleClass('overflow-hide');
    }
});

$(".toProjects").click(function() {
    var toProjects = $(".anchorProj").offset().top - fixTop;    
    $('html, body').animate({
      scrollTop: toProjects},900);
    if (widthWin<1200) {
      $(".burger-menu").toggleClass('active');
      $(".top-menu-mobile").toggleClass('menu-mobile-active');
      $('body').toggleClass('overflow-hide');
    }
});

$(".toContacts").click(function() {
    var toContacts = $(".anchorCont").offset().top - fixTop;    
    $('html, body').animate({
      scrollTop: toContacts},900);
    if (widthWin<1200) {
      $(".burger-menu").toggleClass('active');
      $(".top-menu-mobile").toggleClass('menu-mobile-active');
      $('body').toggleClass('overflow-hide');
    }
});


$(".mobile-nav").click(function() {
  $(".burger-menu").toggleClass('active');
  $(".top-menu-mobile").toggleClass('menu-mobile-active');
  $('body').toggleClass('overflow-hide');
});








 // var boxWidth = $(".top-menu-mobile").width();
 //  $(".mobile-nav").click(function(){
 //      $(".top-menu-mobile").animate({
 //          width: 0
 //      });
 //  },function() {
 //    $(".top-menu-mobile").animate({
 //          width: boxWidth
 //      });
 //  });
 



