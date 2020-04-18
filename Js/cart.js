$(function () {
    $('.secretForm').fadeOut();
    $('.contentSecondPage').fadeOut();
    $('.close').on('click',function () {
        $('.top').fadeOut();
        
        $('.contentSecondPage').fadeIn(1000);
        $('.contentSecondPage').fadeIn('show');
        $('.closeIcon').addClass("d-none");
     

    })
    $('.show').on('click',function () {
        
        $('.secretForm').fadeToggle(1000);
    })
   
    $('.contentSecond').hide();

    $(window).resize(function(){

// =======================================================================

function scrollShower(){

    $('.contactTextDiv').offset();
    let breakPoint=$('.hideContent').offset().top;

    console.log( $('.hideContent').offset().top);
     let scrollTop;
    $(document).scroll(function(){
     scrollTop=$(document).scrollTop();
     console.log(scrollTop);
     if(scrollTop>breakPoint){
         console.log("ozudu");
         
         $('.scrollerTop').css('z-index','111');
         
         $('.scrollerTop').css('opacity','1');


     } else{
         $('.scrollerTop').css('opacity','0');
         $('.scrollerTop').css('z-index','-1');






     }
     
     
 })

    
}

function contentToTop(){
    $(document).on('click','.scrollerTop',function(){
     $('html, body').animate({
         scrollTop: 0
     }, 2000);
    })
}
scrollShower()
contentToTop()
    });
    // ===================================================================




})