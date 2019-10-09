  window.addEventListener('DOMContentLoaded', function() {(function($) {    
    if ($(window).width() < 767) {
       $('.category-container-d').on('click' , function() {
        $('.subcategory-container-d').not($(this).children('.category-subcat-container').children('.subcategory-container-d')).hide()
        $('.active-d').each(function() {$(this).removeClass('active-d')})
        $(this).children('.category-subcat-container').children('.subcategory-container-d').toggle()
       if($(this).children('.category-subcat-container').children('.subcategory-container-d').is(":visible") === true ) {
     $(this).addClass('active-d')
 }
        return false;
        })  
    
    } 
    
    $('.subcategory-container-d').children('ul').children('li').on('click' , function() {
       document.location = $(this).children('a').attr('href')
    })


    $(window).on('resize' , function() {
        if ($(window).width() < 767) {
        $('.subcategory-container-d').hide()
        $('.category-container-d').on('click' , function() {
        $('.subcategory-container-d').not($(this).children('.category-subcat-container').children('.subcategory-container-d')).hide()
        $('.active-d').each(function() {$(this).removeClass('active-d')})
        $(this).children('.category-subcat-container').children('.subcategory-container-d').toggle()
        if($(this).children('.category-subcat-container').children('.subcategory-container-d').is(":visible") === true ) {
        $(this).addClass('active-d')
        }
        return false;
        })

        } else {       
        $('.subcategory-container-d').css('display' , 'block');

        }
    })

  })(jQuery);});