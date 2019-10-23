//main nav
$(function () {
    $('.navbar-toggle').click(function () {

        $('#main-nav > ul ').slideToggle(300);
        $(this).toggleClass('active')
    })

    
    initializeNav()
    $(window).resize(function () {
        initializeNav()
    })

    $('#main-nav > ul > li.has-dropdown').click(function () {
        if ($(window).width() <= 975) {
           // $(this).children('a').toggleClass('active');
            $(this).children('a').children('i').toggleClass('open-dropdown');
            $(this).children('ul').slideToggle(300);
        }
    })

    $("#main-nav > ul > li").mouseover(function(){
        if ($(window).width() > 975) {
            $(this).addClass('active');
        }
    })
    $("#main-nav > ul > li").mouseout(function(){
        if ($(window).width() > 975) {
            $(this).removeClass('active');
        }
    })
})


function initializeNav() {

    $('.navbar-toggle').removeClass('active')
    $('#main-nav > ul  li.has-dropdown').children('a').removeClass('active');
    $('#main-nav > ul  li.has-dropdown').children('ul').removeClass('fadeUp fadeDown').removeAttr('style');
    $('#main-nav > ul').removeAttr('style');
    $('#main-nav > ul  li.has-dropdown').children('ul').removeClass('fadeUp');
    $('#main-nav > ul  li').children('a').children('i').removeClass('open-dropdown');

    if ($(window).width() <= 975){
    $('#main-nav  ul  li.has-dropdown').each(function () {
            $(this).children('a').append("<i class='fa fa-angle-down'></i>")
        })
    }
        else{
            $("i.fa.fa-angle-down").remove()
        }
}

//main nav


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

    // setTimeout(() => {
        if($(window).width() > 975){
            $('.carousel-nav').css({'height': $('iframe').height()+ 'px','max-height':'unset'})
        }
        else{
            $('.carousel-nav').css({'max-height':'250px'})
        }
    // }, 500);   
    $(window).resize(function(){
        if($(window).width() > 975){
                $('.carousel-nav').css({'height': $('iframe').height()+ 'px','max-height':'unset'})                
        }
        else{
            $('.carousel-nav').css({'max-height':'250px'})
        }
    }) 
})