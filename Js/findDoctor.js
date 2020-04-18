$(function () {
// =============================================================================
    
 
function getSearch() {
  
  $('.searchSubmit').on('click', function() {
    var searchVal = $('.searchField').val();
    var filterItems = $('.contentRightContent');

  // if(searchVal == " "){
  //   $('.zeroDoctor').addClass('d-none');
  // }
    if ( searchVal != '' ) {
      filterItems.addClass('hidden');
      $('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
      return;
    } else {
      // filterItems.addClass('hidden');
  // $('.zeroDoctor').removeClass('d-none');
    }
  });
}
getSearch();
// =============================================================================

$( function() {
    $( "#datepicker" ).datepicker({
        showWeek: true,
        firstDay: 1
    });
  } );
  $('.modalFindDoctor').hide();
// =============================================================================
  
  $('.modalClick').on('click',function () {
     
    // $('.displayNone').slideDown(1000);
    $('.modalFindDoctor').fadeIn();
    $('.modalFindDoctor').fadeIn("slow");
    $('.modalFindDoctor').fadeIn(3000);


      $('body').css("overflow","hidden")
  })
// =============================================================================


// =============================================================================

  $('.circle').on('click',function () {

    $('.modalFindDoctor').fadeToggle();

    $('body').css("overflow","inital")
    $('body').css("overflow","auto")
  })

// =============================================================================
  
  AOS.init();
// =============================================================================
$('.zeroDoctor').fadeOut();
// =============================================================================
$('.searchSubmit').on('click',function () {
  $(".preloader").css('display','block')
  $('.preloader').delay(3000).fadeOut(1000);

if ($('.departmentSearch').val() == 'all'   ) {
  
  $('.urology').fadeIn();
  $('.pulmonary').fadeIn();
  $('.dental-clinic').fadeIn();
  $('.prthopaedics').fadeIn();
  $('.neurology').fadeIn();

}
else if ($('.departmentSearch ').val() == 'urology'  ) {
  getSearch();
  $('.contentRightContent').removeClass('hidden');
  $('.urology').fadeIn();
  $('.urology').fadeIn(300);
  $('.urology').fadeIn("show");
  $('.pulmonary').fadeOut();
  $('.dental-clinic').fadeOut();
  $('.prthopaedics').fadeOut();
  $('.neurology').fadeOut();
  
}

 else if ($('.departmentSearch').val() == 'pulmonary'  ) {

  getSearch();
  $('.pulmonary').fadeIn();
  $('.pulmonary').fadeIn(300);
  $('.pulmonary').fadeIn("show");
  $('.urology').fadeOut();
  $('.dental-clinic').fadeOut();
  $('.prthopaedics').fadeOut();
  $('.neurology').fadeOut();
}
 else if ($('.departmentSearch').val() == 'dental-clinic'   ) {
  getSearch();
  console.log($('.departmentSearch').val());
  
  console.log("girdi");
  $('.dental-clinic').fadeIn();
  $('.dental-clinic').fadeIn(300);
  $('.dental-clinic').fadeIn("show");
  // $('.dental-clinic').addClass("dentalClinicImportant");

  $('.pulmonary').fadeOut();
  $('.urology').fadeOut();
  // $('.dental-clinic').fadeOut();
  $('.prthopaedics').fadeOut();
  $('.neurology').fadeOut();
  
}
else if ($('.departmentSearch').val() == 'prthopaedics'   ) {
  getSearch();
  $('.prthopaedics').fadeIn();
  $('.prthopaedics').fadeIn(300);
  $('.prthopaedics').fadeIn("show");
  $('.pulmonary').fadeOut();
  $('.urology').fadeOut();
  $('.dental-clinic').fadeOut();
  // $('.prthopaedics').fadeOut();
  $('.neurology').fadeOut();
  $('.dental-clinic').fadeOut();
}
else if ($('.departmentSearch').val() == 'neurology'   ) {
  getSearch();
  $('.neurology').fadeIn();
  $('.neurology').fadeIn(300);
  $('.prthopaedics').fadeIn("show");
  $('.pulmonary').fadeOut();
  $('.urology').fadeOut();
  $('.dental-clinic').fadeOut();
  $('.prthopaedics').fadeOut();
  // $('.neurology').fadeOut();
  $('.dental-clinic').fadeOut();
}
else if ($('.departmentSearch').val() == 'cardiology'   ) {
  getSearch();
  $('.zeroDoctor').fadeIn();
  $('.urology').fadeOut();
  $('.pulmonary').fadeOut();
  $('.dental-clinic').fadeOut();
  $('.prthopaedics').fadeOut();
  $('.neurology').fadeOut();
}
else{
  $('.zeroDoctor').fadeIn();
}
})
// =============================================================================

})