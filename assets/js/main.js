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