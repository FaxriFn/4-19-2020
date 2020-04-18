// $(function () {


//   $(document).on('click', '.accHeader', function () {

// if ($(this).hasClass('activeHead')) {
  
//   $(this).next().slideToggle(1000);
//   $(this).toggleClass("activeHead")
//   $(this).children('i').toggleClass('fa-angle-up')
//   return;
// }

//     let headersNext = [];
//     headersNext = $('.accBody').toArray();
    
//     let iS = [];
//     iS = $('.accHeader i').toArray();
//     let headers=[];
//     headers=$('.accHeader').toArray();
    
//     let headersA=[];
//     headersA=$('.accHeader a').toArray();

    
//     for (let i = 0; i < headersNext.length; i++) {
      
//       $(headersNext[i]).slideUp(1000);
//       $(iS).removeClass('fa-angle-up')
//       $(headersA).removeClass('colorDefault');
     
//       $(headers).removeClass('activeHead')
     
//     }

//     $(this).children('a').addClass('colorDefault');
//     $(this).addClass("activeHead")
//     $(this).next().slideDown(1000);
//     $(this).children('i').addClass('fa-angle-up')
    
//   })
  


  
// //  Accardeon
//   $('.acc2').hide();
//   $('.acc3').hide();
//   $('.acc4').hide();
//   $('.acc5').hide();
//   $('.сlick1').on('click', function () {
//     $('.acc1').show();
//     $('.acc2').hide();
//     $('.acc3').hide();
//     $('.acc4').hide();
//     $('.acc5').hide();
//     // $(".1acc").children("a").addClass('colorDefault');
//     // $(".1acc").children("i").addClass('colorDefault');

//   })
//   $('.сlick2').on('click', function () {
//     $('.acc1').hide();
//     $('.acc3').hide();
//     $('.acc4').hide();
//     $('.acc5').hide();
//     $('.acc2').show();

//     // $(".1acc").next().slideDown();
//     // $(".1acc").addClass('activeHead')  ;
//     // $(".1acc").children("a").addClass('colorDefault');
//     // $(".1acc").children("i").addClass('colorDefault');

//   })

//   $('.сlick3').on('click', function () {

//     $('.acc1').hide();
//     $('.acc2').hide();
//     $('.acc4').hide();
//     $('.acc5').hide();
//     $('.acc3').show();

//     // $(".3acc").next().slideDown();
//     // $(".3acc").addClass('activeHead')  ;
//     // $(".3acc").children("a").addClass('colorDefault');
//     // $(".3acc").children("i").toggleClass('colorDefault');

//   })
//   $(".сlick4").on('click', function () {
//     $('.acc1').hide();
//     $('.acc2').hide();
//     $('.acc3').hide();
//     $('.acc5').hide();
//     $('.acc4').show();
 
//     // $(".4acc").next().slideDown();
//     // $(".4acc").addClass('activeHead')  ;
//     // $(".4acc").children("a").addClass('colorDefault');
//     // $(".4acc").children("i").addClass('colorDefault');
  

    
//   })
//   $('.сlick5').on('click', function () {
//     $('.acc1').hide();
//     $('.acc2').hide();
//     $('.acc3').hide();
//     $('.acc4').hide();
//     $('.acc5').show();
//     // $(".5acc").next().slideDown();
//     // $(".5acc").addClass('activeHead')  ;
//     // $(".5acc").children("a").addClass('colorDefault');
//     // $(".5acc").children("i").addClass('colorDefault');
//   })


// console.log($(document).width());

// let width=$(window).width();
// $(window).resize(function(){
//   width=$(window).width();
//   console.log(width);
//   if ($(window).width()<786) {
//     $('.twoAcc1').show();
//     $('.twoAcc1').removeClass('noneClassMajid');
   
  
  
  
  
//     $(".twoClick2").on('click',function () {
//       $('.twoAcc1').hide();
//       $('.twoAcc2').removeClass('noneClassMajid');
//       $('.twoAcc2').show();
//       $('.twoAcc1').addClass('noneClassMajid');
//       // $(".1acc").next().slideDown();
//       // $(".1acc").css('background', "rgba(0, 125, 242, 1)")
//     })
//     $(".twoClick3").on('click',function () {
//       $('.twoAcc1').hide();
//       $('.twoAcc2').hide();
//       $('.twoAcc3').show();
//       $('.twoAcc3').removeClass('noneClassMajid');
//       // $(".1acc").css('background', "rgba(0, 125, 242, 1)")
//     })
//     $(".twoClick4").on('click',function () {
//       $('.twoAcc1').hide();
//       $('.twoAcc2').hide();
//       $('.twoAcc3').hide();
//       $('.twoAcc4').show();
//       $('.twoAcc4').removeClass('noneClassMajid');
//       // $(".1acc").css('background', "rgba(0, 125, 242, 1)")
//     })
//     $(".twoClick5").on('click',function () {
//       $('.twoAcc1').hide();
//       $('.twoAcc2').hide();
//       $('.twoAcc3').hide();
//       $('.twoAcc4').hide();
//       $('.twoAcc5').show();
//       $('.twoAcc5').removeClass('noneClassMajid');
//     })
  
//   }
//     else{
//     $('.twoAcc2').addClass('noneClassMajid');
//     $('.twoAcc3').addClass('noneClassMajid');
//     $('.twoAcc4').addClass('noneClassMajid');
//     $('.twoAcc5').addClass('noneClassMajid');
//     $('.twoAcc1').addClass('noneClassMajid');
//    }

// })
// if ($(window).width()<766) {
//   $('.twoAcc1').show();
//   $('.twoAcc1').removeClass('noneClassMajid');
//   $(".twoClick1").on('click',function () {
//     $('.twoAcc2').hide();
//     $('.twoAcc2').addClass('noneClassMajid');
//     $('.twoAcc3').hide();
//     $('.twoAcc3').addClass('noneClassMajid');
//     $('.twoAcc4').hide();
//     $('.twoAcc4').addClass('noneClassMajid');
//     $('.twoAcc5').hide();
//     $('.twoAcc5').addClass('noneClassMajid');
//     $('.twoAcc1').removeClass('noneClassMajid');
//     $('.twoAcc1').show();
  
//     $(".1acc").next().slideDown();
//     // $(".1acc").css('background', "rgba(0, 125, 242, 1)")
//   })

//   $(".twoClick2").on('click',function () {
//     $('.twoAcc1').hide();
//     $('.twoAcc1').addClass('noneClassMajid');
//     $('.twoAcc3').hide();
//     $('.twoAcc3').addClass('noneClassMajid');
//     $('.twoAcc4').hide();
//     $('.twoAcc4').addClass('noneClassMajid');
//     $('.twoAcc5').hide();
//     $('.twoAcc5').addClass('noneClassMajid');
//     $('.twoAcc2').removeClass('noneClassMajid');
//     $('.twoAcc2').show();
  
//     $(".1acc").next().slideDown();
//     // $(".1acc").css('background', "rgba(0, 125, 242, 1)")
//   })
//   $(".twoClick3").on('click',function () {
//     $('.twoAcc1').hide();
//     $('.twoAcc1').addClass('noneClassMajid');
//     $('.twoAcc2').addClass('noneClassMajid');
//     $('.twoAcc2').hide();
//     $('.twoAcc4').hide();
//     $('.twoAcc4').addClass('noneClassMajid');
//     $('.twoAcc5').hide();
//     $('.twoAcc5').addClass('noneClassMajid');
//     $('.twoAcc3').show();
//     $('.twoAcc3').removeClass('noneClassMajid');
//   })
//   $(".twoClick4").on('click',function () {
//     $('.twoAcc1').hide();
//     $('.twoAcc1').addClass('noneClassMajid');
//     $('.twoAcc2').addClass('noneClassMajid');
//     $('.twoAcc2').hide();
//     $('.twoAcc3').hide();
//     $('.twoAcc3').addClass('noneClassMajid');
//     $('.twoAcc5').hide();
//     $('.twoAcc5').addClass('noneClassMajid');
//     $('.twoAcc1').hide();
//     $('.twoAcc2').hide();
//     $('.twoAcc3').hide();
//     $('.twoAcc4').show();
//     $('.twoAcc4').removeClass('noneClassMajid');
//   })
//   $(".twoClick5").on('click',function () {
//     $('.twoAcc1').hide();
//     $('.twoAcc2').hide();
//     $('.twoAcc3').hide();
//     $('.twoAcc4').hide();
//     $('.twoAcc1').hide();
//     $('.twoAcc1').addClass('noneClassMajid');
//     $('.twoAcc2').addClass('noneClassMajid');
//     $('.twoAcc2').hide();
//     $('.twoAcc3').hide();
//     $('.twoAcc3').addClass('noneClassMajid');
//     $('.twoAcc4').hide();
//     $('.twoAcc4').addClass('noneClassMajid');
//     $('.twoAcc5').hide();
//     $('.twoAcc5').addClass('noneClassMajid');
//     $('.twoAcc5').show();
//     $('.twoAcc5').removeClass('noneClassMajid');
//   })

// }
//   else{
//   $('.twoAcc2').addClass('noneClassMajid');
//   $('.twoAcc3').addClass('noneClassMajid');
//   $('.twoAcc4').addClass('noneClassMajid');
//   $('.twoAcc5').addClass('noneClassMajid');
//   $('.twoAcc1').addClass('noneClassMajid');
//  }

  

//   $(document).on('mouseenter', '.pagesFaqContent', function () {
//     $(this).css('border', ' 1px solid rgba(0, 125, 242, 1)');


//     $(this).children('h5').css('color', 'rgba(0, 125, 242, 1)');
//     $(this).children('i').css('color', 'white');

//   })

//   $(document).on('mouseleave', '.pagesFaqContent', function () {
//     $(this).css('border', '1px solid rgba(0, 0, 0, 0.151)');

//     $(this).children('h5').css('color', 'black');

//     $(this).children('a ').css('color', 'black');
//     $(this).children('i').css('color', 'black');
//   });

 

// $('.pagesFaqList').on('click',function () {
  
// $('.pagesFaqContent').each(function (index,element) {
//   $(element).removeClass('activeColor');
// })
// $('.pagesFaqContent h5').each(function (index,element) {
//   $(element).removeClass('activeWord');
// })
// $(this).children('.pagesFaqContent').addClass('activeColor');
// $(this).children('.pagesFaqContent').children('h5').addClass('activeWord');
// })



//   AOS.init({
//     delay:1000
//   });

// })
$(function () {



  $(document).on('click', '.accHeader', function () {

    if ($(this).hasClass('activeHead')) {

      $(this).next().slideToggle(500);
      $(this).toggleClass("activeHead")
      $(this).children('i').toggleClass('fa-angle-up')
      return;
    }

    let headersNext = [];
    headersNext = $('.accBody').toArray();

    let iS = [];
    iS = $('.accHeader i').toArray();
    let headers = [];
    headers = $('.accHeader').toArray();

    let headersA = [];
    headersA = $('.accHeader a').toArray();
console.log(headersA);


    for (let i = 0; i < headersNext.length; i++) {

      $(headersNext[i]).slideUp(500);
      $(iS).removeClass('fa-angle-up')
    

      $(headers).removeClass('activeHead')

    }


    for (let j = 0; j < headersA.length; j++) {
      console.log("girdi");
      
      $(headersA[j]).removeClass('colorDefault');
      $(headersA[j]).addClass('colorBlack');
      
    }
    $(this).children('a').remove('colorBlack').addClass('colorDefault');
    $(this).addClass("activeHead")
    $(this).next().slideDown(500);
    $(this).children('i').addClass('fa-angle-up')

  })




  //  Accardeon
  $('.acc2').hide();
  $('.acc3').hide();
  $('.acc4').hide();
  $('.acc5').hide();
  $('.сlick1').on('click', function () {
    $('.acc1').show();
    $('.acc2').hide();
    $('.acc3').hide();
    $('.acc4').hide();
    $('.acc5').hide();
    $(".accHeader, .acc1 .accardionTitle").slideUp(150);
    $(".acc1 .accHeader, .acc1 .accardionTitle").slideDown(150);
    // $(".1acc").children("a").addClass('colorDefault');
    // $(".1acc").children("i").addClass('colorDefault');

  })
  $('.сlick2').on('click', function () {
    $('.acc1').hide();
    $('.acc3').hide();
    $('.acc4').hide();
    $('.acc5').hide();
    $('.acc2').show();
    $(".accHeader, .acc2 .accardionTitle").slideUp(150);
    $(".acc2 .accHeader, .acc2 .accardionTitle").slideDown(150);
    // $(".1acc").next().slideDown();
    // $(".1acc").addClass('activeHead')  ;
    // $(".1acc").children("a").addClass('colorDefault');
    // $(".1acc").children("i").addClass('colorDefault');

  })

  $('.сlick3').on('click', function () {

    $('.acc1').hide();
    $('.acc2').hide();
    $('.acc4').hide();
    $('.acc5').hide();
    $('.acc3').show();
    $(".accHeader, .acc3 .accardionTitle").slideUp(150);
    $(".acc3 .accHeader, .acc3 .accardionTitle").slideDown(150);
    // $(".3acc").next().slideDown();
    // $(".3acc").addClass('activeHead')  ;
    // $(".3acc").children("a").addClass('colorDefault');
    // $(".3acc").children("i").toggleClass('colorDefault');

  })
  $(".сlick4").on('click', function () {
    $('.acc1').hide();
    $('.acc2').hide();
    $('.acc3').hide();
    $('.acc5').hide();
    $('.acc4').show();
    $(".accHeader, .acc4 .accardionTitle").slideUp(150);
    $(".acc4 .accHeader, .acc4 .accardionTitle").slideDown(150);
    // $(".4acc").next().slideDown();
    // $(".4acc").addClass('activeHead')  ;
    // $(".4acc").children("a").addClass('colorDefault');
    // $(".4acc").children("i").addClass('colorDefault');



  })
  $('.сlick5').on('click', function () {
    $('.acc1').hide();
    $('.acc2').hide();
    $('.acc3').hide();
    $('.acc4').hide();
    $('.acc5').show();
    $(".accHeader, .acc5 .accardionTitle").slideUp(150);
    $(".acc5 .accHeader, .acc5 .accardionTitle").slideDown(150);
    // $(".5acc").next().slideDown();
    // $(".5acc").addClass('activeHead')  ;
    // $(".5acc").children("a").addClass('colorDefault');
    // $(".5acc").children("i").addClass('colorDefault');
  })


  console.log($(document).width());

  let width = $(window).width();
  $(window).resize(function () {
    width = $(window).width();
    console.log(width);
    if ($(window).width() <= 766) {
      $('.twoAcc1').show();
      $('.twoAcc1').removeClass('noneClassMajid');





      $(".twoClick2").on('click', function () {
        // $('.twoAcc1').hide();  
        $('.twoAcc2').removeClass('noneClassMajid');
        if ($(window).width() <= 766) {
          $('.twoAcc2').show();
        } else {
          $('.twoAcc2').hide();
        }
        $('.twoAcc1').addClass('noneClassMajid');
        // $(".1acc").next().slideDown();
        // $(".1acc").css('background', "rgba(0, 125, 242, 1)")
      })
      $(".twoClick3").on('click', function () {
        $('.twoAcc1').hide();
        $('.twoAcc2').hide();
        if ($(window).width() <= 766) {
          $('.twoAcc3').show();
        } else {
          $('.twoAcc3').hide();
        }
        $('.twoAcc3').removeClass('noneClassMajid');
        // $(".1acc").css('background', "rgba(0, 125, 242, 1)")
      })
      $(".twoClick4").on('click', function () {
        $('.twoAcc1').hide();
        $('.twoAcc2').hide();
        $('.twoAcc3').hide();
        if ($(window).width() <= 766) {
          $('.twoAcc4').show();
        } else {
          $('.twoAcc4').hide();
        }
        $('.twoAcc4').removeClass('noneClassMajid');
        // $(".1acc").css('background', "rgba(0, 125, 242, 1)")
      })
      $(".twoClick5").on('click', function () {
        $('.twoAcc1').hide();
        $('.twoAcc2').hide();
        $('.twoAcc3').hide();
        $('.twoAcc4').hide();
        if ($(window).width() <= 766) {
          $('.twoAcc5').show();
        } else {
          $('.twoAcc5').hide();
        }
        $('.twoAcc5').removeClass('noneClassMajid');
      })

    } else {
      $('.twoAcc2').addClass('noneClassMajid');
      $('.twoAcc3').addClass('noneClassMajid');
      $('.twoAcc4').addClass('noneClassMajid');
      $('.twoAcc5').addClass('noneClassMajid');
      $('.twoAcc1').addClass('noneClassMajid');
    }

  })
  // if ($(window).width() <= 766) {
  // $('.twoAcc1').show();
  $('.twoAcc1').removeClass('noneClassMajid');
  $(".twoClick1").on('click', function () {
    $('.twoAcc2').hide();
    $('.twoAcc2').addClass('noneClassMajid');
    $('.twoAcc3').hide();
    $('.twoAcc3').addClass('noneClassMajid');
    $('.twoAcc4').hide();
    $('.twoAcc4').addClass('noneClassMajid');
    $('.twoAcc5').hide();
    $('.twoAcc5').addClass('noneClassMajid');
    $('.twoAcc1').removeClass('noneClassMajid');
    $('.twoAcc1').show();

    if ($(window).width() <= 766) {
      $('.twoAcc1').show();
    } else {
      $('.twoAcc1').hide();
    }

    $(".1acc").next().slideDown();
    // $(".1acc").css('background', "rgba(0, 125, 242, 1)")
  })

  $(".twoClick2").on('click', function () {
    $('.twoAcc1').hide();
    $('.twoAcc1').addClass('noneClassMajid');
    $('.twoAcc3').hide();
    $('.twoAcc3').addClass('noneClassMajid');
    $('.twoAcc4').hide();
    $('.twoAcc4').addClass('noneClassMajid');
    $('.twoAcc5').hide();
    $('.twoAcc5').addClass('noneClassMajid');
    $('.twoAcc2').removeClass('noneClassMajid');
    if ($(window).width() <= 766) {
      $('.twoAcc2').show();
    } else {
      $('.twoAcc2').hide();
    }

    // $(".1acc").next().slideDown();
    // $(".1acc").css('background', "rgba(0, 125, 242, 1)")
  })
  $(".twoClick3").on('click', function () {
    $('.twoAcc1').hide();
    $('.twoAcc1').addClass('noneClassMajid');
    $('.twoAcc2').addClass('noneClassMajid');
    $('.twoAcc2').hide();
    $('.twoAcc4').hide();
    $('.twoAcc4').addClass('noneClassMajid');
    $('.twoAcc5').hide();
    $('.twoAcc5').addClass('noneClassMajid');
    if ($(window).width() <= 766) {
      $('.twoAcc3').show();
    } else {
      $('.twoAcc3').hide();
    }
    $('.twoAcc3').removeClass('noneClassMajid');
  })
  $(".twoClick4").on('click', function () {
    $('.twoAcc1').hide();
    $('.twoAcc1').addClass('noneClassMajid');
    $('.twoAcc2').addClass('noneClassMajid');
    $('.twoAcc2').hide();
    $('.twoAcc3').hide();
    $('.twoAcc3').addClass('noneClassMajid');
    $('.twoAcc5').hide();
    $('.twoAcc5').addClass('noneClassMajid');
    $('.twoAcc1').hide();
    $('.twoAcc2').hide();
    $('.twoAcc3').hide();
    if ($(window).width() <= 766) {
      $('.twoAcc4').show();
    } else {
      $('.twoAcc4').hide();
    }
    $('.twoAcc4').removeClass('noneClassMajid');
  })
  $(".twoClick5").on('click', function () {
    $('.twoAcc1').hide();
    $('.twoAcc2').hide();
    $('.twoAcc3').hide();
    $('.twoAcc4').hide();
    $('.twoAcc1').hide();
    $('.twoAcc1').addClass('noneClassMajid');
    $('.twoAcc2').addClass('noneClassMajid');
    $('.twoAcc2').hide();
    $('.twoAcc3').hide();
    $('.twoAcc3').addClass('noneClassMajid');
    $('.twoAcc4').hide();
    $('.twoAcc4').addClass('noneClassMajid');
    $('.twoAcc5').hide();
    $('.twoAcc5').addClass('noneClassMajid');
    if ($(window).width() <= 766) {
      $('.twoAcc5').show();
    } else {
      $('.twoAcc5').hide();
    }
    $('.twoAcc5').removeClass('noneClassMajid');
  })

  // } else {
  //   $('.twoAcc2').addClass('noneClassMajid');
  //   $('.twoAcc3').addClass('noneClassMajid');
  //   $('.twoAcc4').addClass('noneClassMajid');
  //   $('.twoAcc5').addClass('noneClassMajid');
  //   $('.twoAcc1').addClass('noneClassMajid');
  // }



  $(document).on('mouseenter', '.pagesFaqContent', function () {
    $(this).css('border', ' 1px solid rgba(0, 125, 242, 1)');


    $(this).children('h5').css('color', 'rgba(0, 125, 242, 1)');
    $(this).children('i').css('color', 'white');

  })

  $(document).on('mouseleave', '.pagesFaqContent', function () {
    $(this).css('border', '1px solid rgba(0, 0, 0, 0.151)');

    $(this).children('h5').css('color', 'black');

    $(this).children('a ').css('color', 'black');
    $(this).children('i').css('color', 'black');
  });



  $('.pagesFaqList').on('click', function () {

    $('.pagesFaqContent').each(function (index, element) {
      $(element).removeClass('activeColor');
    })
    $('.pagesFaqContent h5').each(function (index, element) {
      $(element).removeClass('activeWord');
    })
    $(this).children('.pagesFaqContent').addClass('activeColor');
    $(this).children('.pagesFaqContent').children('h5').addClass('activeWord');
  })



  AOS.init({
    delay: 1000
  });

})

