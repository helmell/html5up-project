$(document).ready(function() {
    $('.submenu').on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('s-open');
      $(this).find('ul').slideToggle();
    });
    $('.btn-nav').on('click', function(){
      $('.left-menu').toggleClass('m-open');
      $(this).toggleClass('b-nav-open');
    });
    if ($(window).width() <= 1280) {
      $('.left-menu').removeClass('m-open');
      $('.btn-nav').removeClass('b-nav-open');
    };
    if ($(window).width() >= 1280) {
      $('.left-menu').addClass('m-open');
      $('.btn-nav').addClass('b-nav-open');
    };
});


$(window).resize(function() {
  if ( $(window).width() <= 1280 ) {
    $('.left-menu').removeClass('m-open');
    $('.btn-nav').removeClass('b-nav-open');
    };
    if ( $(window).width() >= 1280 ) {
      $('.left-menu').addClass('m-open');
      $('.btn-nav').addClass('b-nav-open');
    };
});

$(document).ready(function () {
  var a = $('.menu-inner').height();
  var b = $(window).height();
  var c = a - b;
  $(window).scroll(function () {
  if($(window).scrollTop() >= c) {
    $('.menu-inner ').addClass('menu-fix');
  }
  if($(window).scrollTop() <= c) {
    $('.menu-inner ').removeClass('menu-fix');
  }
  });
});
