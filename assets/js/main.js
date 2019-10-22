///type writer


///type writer
//scrolltop

$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('#scrolltop').addClass('scroll-show');
    }
    else
        $('#scrolltop').removeClass('scroll-show');

})
$(function(){
    $('#scrolltop').click(function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
      });
})
///
$(function(){
    $("#main-nav > ul > li").mouseover(function(){
        $(this).addClass('active');
    })
    $("#main-nav > ul > li").mouseout(function(){
        $(this).removeClass('active');
    })
    // $("nav").mouseout(function(){
    //     $("#main-nav > ul > li:first-child").addClass('active')
    // })
    $('#main-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay:true,
        rtl:true,
        autoplayHoverPause:false,
        items:1
    })
    $('.side-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay:true,
        rtl:true,
        autoplayHoverPause:false,
        items:1
    })
    $('#prefered-carousel').owlCarousel({
        loop:true,
         margin:15,
        nav:true,
        dots:false,
        autoplay:true,
        rtl:true,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:1,
            },
            769:{
                items:4,
            }
        }
    })
})

//footer gallery
var $carousel = $('.carousel').flickity();
            
var $carouselNav = $('.carousel-nav');
var $carouselNavCells = $carouselNav.find('.carousel-cell');

$carouselNav.on( 'click', '.carousel-cell', function( event ) {
  var index = $( event.currentTarget ).index();
  $carousel.flickity( 'select', index );
});

var flkty = $carousel.data('flickity');
var navTop  = $carouselNav.position().top;
var navCellHeight = $carouselNavCells.height();
var navHeight = $carouselNav.height();

$carousel.on( 'select.flickity', function() {
  // set selected nav cell
  $carouselNav.find('.is-nav-selected').removeClass('is-nav-selected');
  var $selected = $carouselNavCells.eq( flkty.selectedIndex )
    .addClass('is-nav-selected');
  // scroll nav
  var scrollY = $selected.position().top +
    $carouselNav.scrollTop() - ( navHeight + navCellHeight ) / 2;
  $carouselNav.animate({
    scrollTop: scrollY
  });
});
$(function(){
    setTimeout(() => {
        if($(window).width() > 768){
            $('.carousel-nav').css({'height':$('iframe').height()+ 'px'})
        }
    }, 1000);    
})