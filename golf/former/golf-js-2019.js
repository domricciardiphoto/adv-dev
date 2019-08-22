    var pathArray = window.location.pathname.split('/');
    $('.menu_item').children("a[href='" + pathArray[3] + "']").css('color', '#fff');



    $(document).ready(function () {
        $('.content').delay(300).fadeIn();

        $('.logo').on('click', function () {
            document.location = 'home.php'

        });

      
     

     
        $( "<span class='remove'>...</span>" ).insertBefore( ".additonal_text" );
        $( '<div class="buttons-adcontent"><a class="adcon0" >Read Less</a><a class="adcon1" >Read More</a> &nbsp;&nbsp;&nbsp;<a class="adcon2" href="#">Visit Site</a></div>' ).insertAfter( ".additonal_text" );
        
       
        $('.adcon0').on('click' , function() {
           
            $(this).parent('div').parent('div').children('.additonal_text').hide()
            $(this).hide();
            $(this).parent('div').parent('div').children('.remove').show();
            $(this).parent('div').children('.adcon1').show();
            
        });


        $('.adcon1').on('click' , function() {
  
        $(this).parent('div').parent('div').children('.additonal_text').fadeIn();
        $(this).hide();
        $(this).parent('div').parent('div').children('.remove').hide();
        $(this).parent('div').children('.adcon0').show();
        
        });
    
      
        $('.adcon2').each(function() {
            $(this).attr('href' , $(this).parent('div').parent('div').attr('website'))
        })

        $('.menu_item').on('click', function () {
            document.location = $(this).children('a').attr('href');

        });

        $('.hambr').on('click', function () {
            if ($(this).attr('data') === '0') {
                $('.mobile_menu').slideDown('fast')
                $('.header').animate({
                    height: "159px"
                }, 200);
                $('.hambr').css('background-size', '30%');
                $('.hambr').css('background-image', 'url(./images/menu_24px.png)');

                $(this).attr('data', '1');
            } else {
                $('.mobile_menu').hide();
                $('.header').animate({
                    height: "79px"
                }, 200);
                $('.hambr').css('background-size', '55%');
                $('.hambr').css('background-image', 'url(./images/menu_24px-2.png)');
                $(this).attr('data', '0');

            }
        });


    });