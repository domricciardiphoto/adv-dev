


window.addEventListener('DOMContentLoaded', function() {(function($) {


    $('.See_Allstores_large').on('click', function() {
    $('.ministore_links').show()
    $('.plus_minus').html('-');
   });

   $('.Showallstores').on('click' , function() {
      if($('.ministore_links:hidden').length > 0) {
          $('.ministore_links').slideDown(),
          $('.plus_minus').html('-');
      } else {
        $('.ministore_links').slideUp(),
        $('.plus_minus').html('+');
      }
   });



$('#storeZip').attr('placeholder' , 'Enter Zip Code').attr('style' , 'color:#333 !important');;


var day_tomorow ;
    switch(new Date().getDay()){
        case 0:
        day_tomorow="Mon";
        break;
        case 1:
        day_tomorow="Tues";
        break;
        case 2:
        day_tomorow="Wed";
        break;
        case 3:
        day_tomorow="Thurs";
        break;
        case 4:
        day_tomorow ="Fri"
        break;
        case 5:
        day_tomorow ="Sat";
        break;
        case 6:
        day_tomorow ="Sun";
        break;
        }





$('.by-region').children('.page-title').remove();
$('ul.breadcrumbs>li:nth-child(2)').children('a').text('Stores').attr('title' , 'Stores');
function slidetostore() {
   stost1 = '#'+$('.store_name:contains('+$('.gm-style-iw:visible').text().replace('View on Google Maps' ,'')+')').parent('li').attr('id');
   $('.actual_stores').css('border' , '1px solid #ccc')
   $('#'+$('.store_name:contains('+$('.gm-style-iw:visible').text().replace('View on Google Maps' ,'')+')').parent('li').attr('id')).css('border' , '2px solid #034694');
   $('html, body').delay(300).animate({
   scrollTop: ($(stost1).offset().top-60)
  },500);    
}

//----------------------------------Google Maps Function 2019

function core_gm() {

var locations = current_loc

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: current_zoom,
  center: current_center,
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;
for (i = 0; i < locations.length; i++) {  
marker = new google.maps.Marker({
position: new google.maps.LatLng(locations[i][1], locations[i][2]),
map: map
});
google.maps.event.addListener(marker, 'click', (function(marker, i) {
return function() {
  infowindow.setContent(locations[i][0]);
  infowindow.open(map, marker);
slidetostore()

}
})(marker, i));
}

}

//---------------------------------------------------------------------------





var Suffolk = '<li id="63" class="actual_stores" data="Suffolk"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR063"></div></div></li><li id="28" class="actual_stores" data="Suffolk"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR028"></div></div></li><li id="7" class="actual_stores" data="Suffolk"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR007"></div></div></li><li id="8" class="actual_stores" data="Suffolk"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR008"></div></div></li><li id="9" class="actual_stores" data="Suffolk"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR009"></div></div></li><li id="14" class="actual_stores" data="Suffolk"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR014"></div></div></li><li id="27" class="actual_stores" data="Suffolk"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR027"></div></div></li><li id="54" class="actual_stores" data="Suffolk"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR054"></div></div></li><li id="6" class="actual_stores" data="Suffolk"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR006"></div></div></li>';

var Suffolk_m = "<span class='heightlight-d'><h2>Get Long Island's Lowest Prices on Appliances and Electronics</span></h2><br>Make P.C. Richard & Son your source for home appliances, entertainment gear, and mattresses on Long Island. We have nine convenient locations throughout Suffolk County, from Elwood to Southampton, with an excellent selection, friendly staff, and unbeatable values.<br><br>Stop by our appliance and electronics sections for name brand must-haves at guaranteed low prices. Don't leave without exploring our premium mattresses and furnishings to make your home as comfortable and stylish as it is functional. Visit your nearest Suffolk County P.C. Richard & Son store today!";

var Suffolk_t ='Electronic & Appliance Stores in Suffolk, NY | P.C. Richard & Son';

var Suffolk_h1 = 'P.C. Richard & Son Stores in Suffolk County, NY';

var Suffolk_meta = 'Stop by any of the nine convenient P.C. Richard & Son locations in Suffolk County, NY for the guaranteed lowest prices on appliances, electronics, mattresses, and more.';

var Nassau = '<li id="4" class="actual_stores" data="Nassau"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR004"></div></div></li><li id="16" class="actual_stores" data="Nassau"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR016"></div></div></li><li id="2" class="actual_stores" data="Nassau"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR002"></div></div></li><li id="30" class="actual_stores" data="Nassau"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR030"></div></div></li><li id="15" class="actual_stores" data="Nassau"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR015"></div></div></li><li id="55" class="actual_stores" data="Nassau"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR055"></div></div></li><li id="3" class="actual_stores" data="Nassau"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR003"></div></div></li><li id="5" class="actual_stores" data="Nassau"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR005"></div></div></li><li id="37" class="actual_stores" data="Nassau"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR037"></div></div></li>';

var Nassau_m = "<span class='heightlight-d'><h2>Nassau County's Lowest Prices on Appliances and Electronics</span></h2><br>Save on essential home appliances, electronics, and furnishings at any of the nine convenient P.C. Richard & Son locations throughout Nassau County. Shop computers, audio systems, designer appliances, luxury mattresses, smart-home connected devices, and much more at the neighborhood store nearest you. Some of our stores even offer specialty services like car audio installation. Wherever you are in western Long Island, there's a P.C. Richard & Son location nearby.";

var Nassau_t = 'Electronic & Appliance Stores in Nassau, NY | P.C. Richard & Son';

var Nassau_meta = 'Shop great deals on appliances and electronics at any P.C. Richard & Son location in Nassau County, NY. Stop by today for guaranteed low prices on high-quality goods.';

var Nassau_h1 = 'P.C. Richard & Son Stores in Nassau County, NY';

var Staten_Island = '<li id="66" class="actual_stores" data="Staten_Island"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR066"></div></div></li>';

var Staten_Island_m = "<span class='heightlight-d'><h2>Staten Island's Biggest Selection and Best Prices</span></h2><br>On Staten Island, there's only one place where you can find the best deals on appliances, electronics, mattresses, and more. P.C. Richard & Son is centrally and conveniently located on Richmond Avenue with the biggest and best selection of everything you need to make your home more enjoyable.<br><br>Shop smart TVs from top brands, browse our designer home appliance showroom, and test-drive the latest computers and tablets. Even upgrade your ride with professional car audio gear and installation. Do it all here at the P.C. Richard & Son on Staten Island.";

var Staten_Island_t = "Electronic & Appliance Stores in Staten Island, NY | P.C. Richard & Son";

var Staten_Island_meta = "Shop P.C. Richard & Son for Staten Island's lowest prices on appliances, electronics, mattresses, and more. Check out our selection in Staten Island today!";

var Staten_Island_h1 = 'P.C. Richard & Son Stores in Staten Island, NY';


var Westchester = '<li id="46" class="actual_stores" data="Westchester"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR046"></div></div></li>';

var Westchester_m = "<span class='heightlight-d'><h2>Save on Appliances and Electronics in Westchester County</span></h2><br>Head to your Westchester County P.C. Richard & Son store located in Yonkers/Scarsdale for great deals on appliances, electronics, and much more. Our Westchester superstore is packed with an amazing selection of the most fun and functional gear for your home.<br><br>Shop TVs, computers and tablets, A/Cs, and even washers and dryers. And if you're looking for a better night's sleep, don't pay those outrageous mattress store prices – we carry quality mattresses at our famously low prices, guaranteed.<br><br>Stop by our Westchester County location and see all the savings for yourself!";

var Westchester_t = 'Electronic & Appliance Stores in Westchester, NY | P.C. Richard & Son';

var Westchester_meta = 'Why pay more when you can get the lowest prices guaranteed at your Westchester P.C. Richard & Son? Save on housewares and entertainment essentials today!';

var Westchester_h1 = 'P.C. Richard & Son Stores in Westchester County, NY';


var Manhattan ='<li id="65" class="actual_stores" data="Manhattan"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR065"></div></div></li><li id="60" class="actual_stores" data="Manhattan"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR060"></div></div></li><li id="57" class="actual_stores" data="Manhattan"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR057"></div></div></li><li id="64" class="actual_stores" data="Manhattan"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR064"></div></div></li>';

var Manhattan_m = '<span class="heightlight-d">Appliances, Electronics, and More in Manhattan</span><br>We take the hassle out of finding the best deals on electronics, appliances, and housewares in Manhattan. At P.C. Richard & Son, premium brands and amazing values all live under one roof. Check out the latest Mac computers from Apple, or test-drive a state-of-the-art Surface Pro from Microsoft. Save big on audio systems, TVs, and great gear for your home, including designer appliances, mattresses, and more essentials.<br><br>Visit any of our convenient Manhattan locations, and discover how P.C. Richard & Son brings you even more of the things you want, for less.';

var Manhattan_t = 'Electronic & Appliance Stores in Manhattan, NY | P.C. Richard & Son';

var Manhattan_meta = 'Visit P.C. Richard & Son Manhattan stores for low prices on appliances, computers, electronics, and mattresses. Shop today, and save big on name brands!';

var Manhattan_h1 = 'P.C. Richard & Son Stores in Manhattan, NY';

var Bronx = '<li id="56" class="actual_stores" data="Bronx"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR056"></div></div></li><li id="50" class="actual_stores" data="Bronx"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR050"></div></div></li>';

var Bronx_m = "<span class='heightlight-d'><h2>Get the Lowest Prices on Appliances and Electronics in The Bronx</span></h2><br>If you're looking for the best deals on computers, electronics, and home appliances in The Bronx, head over to your local P.C. Richard & Son store. We carry the best in entertainment gear, including audio equipment, TVs, and media players from the industry's leading brands. Shop designer home appliances as well as high-quality, affordable mattresses for your best night's sleep yet.<br><br>With a long history of offering quality goods at the lowest prices, we're proud to serve our neighbors in The Bronx and beyond.";

var Bronx_t = 'Electronic & Appliance Stores in Bronx, NY | P.C. Richard & Son';

var Bronx_meta = 'No other appliance, electronics, or mattress store in The Bronx can beat the prices and selection at P.C. Richard & Son. Visit any of our Bronx locations today!';

var Bronx_h1 = 'P.C. Richard & Son Stores in The Bronx, NY';


var Brooklyn = '<li id="51" class="actual_stores" data="Brooklyn"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR051"></div></div></li><li id="33" class="actual_stores" data="Brooklyn"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR033"></div></div></li><li id="34" class="actual_stores" data="Brooklyn"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR034"></div></div></li><li id="32" class="actual_stores" data="Brooklyn"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR032"></div></div></li><li id="38" class="actual_stores" data="Brooklyn"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR038"></div></div></li><li id="31" class="actual_stores" data="Brooklyn"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR031"></div></div></li><li id="35" class="actual_stores" data="Brooklyn"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR035"></div></div></li>';

var Brooklyn_m = "<span class='heightlight-d'><h2>Brooklyn's Original Appliance and Electronics Store</span></h2><br>Brooklyn is where P.C. Richard & Son got its start over 100 years ago. Ever since then, we've been providing our neighbors in Brooklyn with excellent value, reliable service, and a wide selection of entertainment and living essentials.<br><br>Shop our seven borough locations for appliances and housewares, mattresses, audio systems, TVs, and the latest in computers and tablets. Stop by the P.C. Richard & Son nearest you for our famously low prices.";

var Brooklyn_t = 'Electronic & Appliance Stores in Brooklyn, NY | P.C. Richard & Son ';

var Brooklyn_meta = "Visit the store that's been serving Brooklyn for over 100 years. Shop appliances, electronics, and more at our seven P.C. Richard & Son Brooklyn locations.";

var Brooklyn_h1 = 'P.C. Richard & Son Stores in Brooklyn, NY';


var Queens = '<li id="29" class="actual_stores" data="Queens"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR029"></div></div></li><li id="17" class="actual_stores" data="Queens"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR017"></div></div></li><li id="39" class="actual_stores" data="Queens"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR039"></div></div></li><li id="26" class="actual_stores" data="Queens"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR026"></div></div></li><li id="1" class="actual_stores" data="Queens"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR001"></div></div></li><li id="18" class="actual_stores" data="Queens"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR018"></div></div></li><li id="61" class="actual_stores" data="Queens"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR061"></div></div></li>';

var Queens_m = "<span class='heightlight-d'><h2>Queen's Lowest Prices on Appliances and Mattresses</span></h2><br>Save on essential home appliances, electronics, and furnishings at any of the seven convenient P.C. Richard & Son locations throughout Queens. Shop computers, audio systems, appliances, mattresses, smart-home connected devices, and much more at the neighborhood store nearest you. Some of our stores even offer specialty services like car audio installation. Wherever you are in Queens, there's a P.C. Richard & Son location nearby.";

var Queens_t = 'Electronic & Appliance Stores in Queens, NY | P.C. Richard & Son ';

var Queens_meta = "Queens's Original Appliance and Electronics Store<br>Queens's is where P.C. Richard & Son got its start over 100 years ago. Ever since then, we've been providing our neighbors in Queens's with excellent value, reliable service, and a wide selection of entertainment and living essentials.<br><br>Shop our seven borough locations for appliances and housewares, mattresses, audio systems, TVs, and the latest in computers and tablets. Stop by the P.C. Richard & Son nearest you for our famously low prices.";

var Queens_h1 = 'P.C. Richard & Son Stores in Queens, NY';


var Rockland = '<li id="67" class="actual_stores" data="Rockland"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR067"></div></div></li>';

var Rockland_m = "<span class='heightlight-d'><h2>Shop Appliances, Electronics, and Mattresses in Rockland County</span></h2><br>Visit your local P.C. Richard & Son store in Rockland County, and browse our selection of name brand goods at our guaranteed lowest prices. Located in Nanuet, we carry designer appliances, A/Cs, premium mattresses, and top-of-the-line housewares to make your home more comfortable and functional. For fun and entertainment, check out our selection of audio equipment, TVs, computers, and smart home devices.<br><br>Stop by P.C. Richard & Son today to shop Rockland's best selection of must-have gear.";

var Rockland_t ='Electronic & Appliance Stores in Rockland, NY | P.C. Richard & Son';

var Rockland_meta = 'From appliances to electronics, mattresses, and more, P.C. Richard & Son has it all. Visit our Rockland store in Nanuet for our low price guarantee.';

var Rockland_h1 = 'P.C. Richard & Son Stores in Rockland County, NY';

var Central_Jersey = '<li id="45" class="actual_stores" data="Central_Jersey"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR045"></div></div></li><li id="68" class="actual_stores" data="Central_Jersey"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR068"></div></div></li><li id="52" class="actual_stores" data="Central_Jersey"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR052"></div></div></li><li id="62" class="actual_stores" data="Central_Jersey"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR062"></div></div></li><li id="47" class="actual_stores" data="Central_Jersey"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR047"></div></div></li><li id="59" class="actual_stores" data="Central_Jersey"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR059"></div></div></li>';


var Central_Jersey_m = "<span class='heightlight-d'><h2>Save on Appliances and Electronics in Central Jersey</span></h2><br>Why spend your time visiting a different store for appliances, electronics, and mattresses when you can find it all at your local P.C. Richard & Son store? Our wide selection includes everything you need to bring added comfort, convenience, and high-tech fun to your home.<br><br>Check out any one of our Central Jersey locations to discover innovative and efficient appliances, powerful air conditioners, TVs, premium mattresses, and more. With all the top brands and our low-price guarantee, we make it easy to find what you're looking for, for less.";

var Central_Jersey_t ='Electronic & Appliance Stores in Central NJ | P.C. Richard & Son';

var Central_Jersey_meta = 'Find the lowest prices on appliances, electronics, and home furnishings at P.C. Richard & Son stores in Central Jersey. Visit a location near you today!';

var Central_Jersey_h1 = 'P.C. Richard & Son Stores in Central Jersey, NJ';


var Northern_Jersey = '<li id="43" class="actual_stores" data="Northern_Jersey"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR043"></div></div></li><li id="58" class="actual_stores" data="Northern_Jersey"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR058"></div></div></li><li id="42" class="actual_stores" data="Northern_Jersey"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR042"></div></div></li><li id="44" class="actual_stores" data="Northern_Jersey"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR044"></div></div></li><li id="41" class="actual_stores" data="Northern_Jersey"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR041"></div></div></li><li id="75" class="actual_stores" data="Northern_Jersey"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR075"></div></div></li><li id="48" class="actual_stores" data="Northern_Jersey"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR048"></div></div></li>';

var Northern_Jersey_m = "<span class='heightlight-d'><h2>Value, Service, and Selection in Northern Jersey</span></h2><br>Upgrade your home with the latest in high-performance appliances, next-generation electronics, and stylish housewares. P.C. Richard & Son brings the best in service, selection, and prices to each of our Northern Jersey locations. Whether you're looking for efficient new appliances for your home, the latest TV for entertainment, or even a quality new mattress for a better night's sleep, we're your source for name brand products at the lowest prices guaranteed.<br><br>Visit any of our Northern Jersey locations to discover the incredible P.C. Richard & Son value and customer service!";

var Northern_Jersey_t ='Electronic & Appliance Stores in Northern NJ | P.C. Richard & Son';

var Northern_Jersey_meta = 'Shop P.C. Richard & Son for quality appliances, electronics, mattresses, and more in Northern Jersey. Find unbeatable value, service, and selection here.';


var Northern_Jersey_h1 = 'P.C. Richard & Son Stores in Northern Jersey, NJ';


var Southern_Jersey = '<li id="69" class="actual_stores" data="Southern_Jersey"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR069"></div></div></li><li id="71" class="actual_stores" data="Southern_Jersey"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR071"></div></div></li><li id="72" class="actual_stores" data="Southern_Jersey"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR072"></div></div></li><li id="70" class="actual_stores" data="Southern_Jersey"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR070"></div></div></li>';

var Southern_Jersey_m = "<span class='heightlight-d'><h2>Appliances, Electronics, and Mattresses in Southern Jersey</span></h2><br>If you're shopping for electronics, appliances, or mattresses in Southern Jersey, come by your local P.C. Richard & Son store. Get the lowest price guarantee on our massive selection of home and car audio systems, TVs, mattresses, home appliances, and housewares.<br><br>We've been serving customers with honesty, integrity, and reliability for over 100 years. At P.C. Richard & Son, we service what we sell using our own factory-trained technicians, so residents of Southern Jersey can shop with confidence.";

var Southern_Jersey_t = 'Electronic & Appliance Stores in South NJ | P.C. Richard & Son';

var Southern_Jersey_meta = 'Shop the amazing selection of appliances, electronics, and more at P.C. Richard & Son stores in Southern Jersey. Stop by today for the guaranteed lowest prices!';


var Southern_Jersey_h1 = 'P.C. Richard & Son Stores in Southern Jersey, NJ';



var Fairfield = '<li id="80" class="actual_stores" data="Fairfield"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR080"></div></div></li><li id="81" class="actual_stores" data="Fairfield"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR081"></div></div></li><li id="83" class="actual_stores" data="Fairfield"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR083"></div></div></li>';

var Fairfield_m = "<span class='heightlight-d'><h2>Shop Appliances, Electronics, and Mattresses in Fairfield County</span></h2><br>For the lowest price tags and best selection in southwest Connecticut, come to your local P.C. Richard & Son. We beat all other appliance and electronics stores on value, reliability, and customer service – just like we have for over 100 years.<br><br>Visit any location in Fairfield County for everything from the latest Apple Mac computers and Windows Surface tablets to high-quality mattresses for a peaceful night's sleep. While you're here, stop by our designer appliance galleries for great ideas to update your home.";

var Fairfield_t = 'Electronic & Appliance Stores in Fairfield County, CT | P.C. Richard & Son';

var Fairfield_meta = 'Find the best savings on appliances and electronics in Fairfield County, CT. Shop P.C. Richard & Son stores today for exceptional selection, value, and service.';


var Fairfield_h1 = 'P.C. Richard & Son Stores in Fairfield County, CT';



var Hartford = '<li id="89" class="actual_stores" data="Hartford"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR089"></div></div></li><li id="87" class="actual_stores" data="Hartford"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR087"></div></div></li><li id="86" class="actual_stores" data="Hartford"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR086"></div></div></li>';

var Hartford_m = "<span class='heightlight-d'><h2>Hartford County's Leader in Value and Selection</span></h2><br>Want to find the best appliances and electronics in the heart of Connecticut? Visit your local P.C. Richard & Son! We proudly serve Hartford County with three convenient locations, offering our guaranteed low prices on everything you need to make your home more comfortable, stylish, and efficient. From audio systems and TVs to high-end appliances, quality mattresses, and even car stereo sales and installation, find exactly what you're looking for at prices you can't ignore.<br><br>Come by today, and discover why P.C. Richard & Son has been the leader in value and selection for over 100 years!";

var Hartford_t = 'Electronic & Appliance Stores in Hartford County, CT | P.C. Richard & Son';

var Hartford_meta = 'Find the best appliance and electronics values in Hartford County, CT at P.C. Richard & Son. Shop quality products by top brands at guaranteed low prices.';


var Hartford_h1 = 'P.C. Richard & Son Stores in Hartford County, CT';


var New_Haven = '<li id="82" class="actual_stores" data="New_Haven"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR082"></div></div></li>';

var New_Haven_m = '<span class="heightlight-d">Shop Appliances, Electronics, and More in New Haven County</span><br>You could spend all day looking for the best deals on appliances, TVs, electronics, mattresses, and housewares in New Haven County. Or, you could just visit your local P.C. Richard & Son! We carry a wide selection of top brands covering everything from air conditioners to smart-home connected gear, all at our guaranteed low prices.<br><br>Stop by one of our New Haven County locations today, and see how our combination of service, value, and selection makes all the difference!';

var New_Haven_t = 'Electronic & Appliance Stores in New Haven County, CT | P.C. Richard & Son';

var New_Haven_meta = 'Get top deals on appliances at P.C. Richard & Son in New Haven County, CT. Save on home audio, electronics, mattresses, and more with our famously low prices.';


var New_Haven_h1 = 'P.C. Richard & Son Stores in New Haven County, CT';

var Philadelphia = '<li id="90" class="actual_stores" data="Philadelphia"><div class="store_rat"><div data-bv-show="rating_summary" data-bv-productid="PCR090"></div></div></li>';

var Philadelphia_m = "<span class='heightlight-d'><h2>Save on Home Appliances and Electronics in Philadelphia</span></h2><br>From appliances and TVs to housewares and car audio, the P.C. Richard & Son superstore in Philadelphia has it all. Find computer deals in our Apple Mac computer showcase, and get ready for a better night's sleep at our premium mattress center. Shop our electronics section for entertainment essentials, including media players, home audio systems, and ultra-high-def TVs from today's top brands.<br><br>When it comes to value and selection in northeast Philly, nobody beats P.C. Richard & Son!";

var Philadelphia_t = 'Electronic & Appliance Stores in Philadelphia, PA | P.C. Richard & Son';

var Philadelphia_meta = 'Make P.C. Richard & Son your source for appliances and electronics in Philadelphia. Save on entertainment gear and living essentials for your home today!';

var Philadelphia_h1 = 'P.C. Richard & Son Stores in Philadelphia, PA';


key21 = $( "input[name='_dynSessConf']" ).val();
$('#_dynSessConf_key21').attr('value' , key21);






    region_stores_load = '';
    store_list = '/images/promos/PCR-Stores.xml';
    mydate21 = new Date().getDay();
    myhour21 = new Date().getHours() * 100 
    var select_the_day 

switch(mydate21) {
case  1: 
select_the_day = 7;
select_the_day2 = 1
break;

case  2: 
select_the_day = 1;
select_the_day2 = 2;
break;

case  3: 
select_the_day = 2;$
select_the_day2 = 3;
break;

case  4: 
select_the_day = 3;
select_the_day2 = 4;
break;

case  5: 
select_the_day = 4;
select_the_day2 = 5;
break;

case  6: 
select_the_day = 5;
select_the_day2 = 6;
break;

case  0: 
select_the_day = 6;
select_the_day2 = 7

}



    function xmlParser(xml) {
        $('.actual_stores').each(function () {
            $(this).wrap('<a href="'+$(xml).find('#' + $(this).attr('id')).children('storePageURL').text()+'" alt="'+$(xml).find('#' + $(this).attr('id')).children('name').text()+'"></a>')
            $(this).children('.store_name').text($(xml).find('#' + $(this).attr('id')).children('name').text());
            $(this).children('.store_addresss').children('.ap1').text($(xml).find('#' + $(this).attr('id')).children(
                'address1').text());
            $(this).children('.store_addresss').children('.ap2').text($(xml).find('#' + $(this).attr('id')).children(
                'city').text());
            $(this).children('.store_addresss').children('.ap3').text($(xml).find('#' + $(this).attr('id')).children(
                'state').text());
            $(this).children('.store_addresss').children('.ap4').text($(xml).find('#' + $(this).attr('id')).children(
                'zip').text());
            finder = ' ' + parseInt($(xml).find('#' + $(this).attr('id')).children('next7Days').children('day:nth-child('+select_the_day+')').children('close').text()) / 100 -12;
            finder = ' '+finder.toString() + 'pm'

            if (finder === ' 090009pm') {
                finder = ' 9pm'
            }
            if (finder === ' 080008pm') {
                finder = ' 8pm'
            }
            if (finder === ' 060006pm') {
                finder = ' 6pm'
            }
            
            finder2 = ' ' + parseInt($(xml).find('#' + $(this).attr('id')).children('next7Days').children('day:nth-child('+select_the_day+')').children('open').text()) / 100;
            finder2 = ' '+finder2.toString() + 'am'

            if (finder2 === ' 090009am') {
                finder2 = ' 9am'
            }
            if (finder2 === ' 080008am') {
                finder2 = ' 8am'
            }
            if (finder2 === ' 060006am') {
                finder2 = ' 6am'
            }

            $(this).children('.openuntil').children('.closetime').text(finder);
            $(this).children('.whenstore_open').children('.opentime').text(finder2);
           

            finder3 = parseInt($(xml).find('#' + $(this).attr('id')).children('next7Days').children('day:nth-child('+select_the_day+')').children('close').text());
            finder3a = parseInt($(xml).find('#' + $(this).attr('id')).children('next7Days').children('day:nth-child('+select_the_day+')').children('open').text());
            finder4 = parseInt($(xml).find('#' + $(this).attr('id')).children('next7Days').children('day:nth-child('+select_the_day2+')').children('open').text());
            deviation = $(xml).find('#' + $(this).attr('id')).children('next7Days').children('day:nth-child('+select_the_day+')').children('deviationReason').text();


            if(myhour21 >= finder3 ) {
            $(this).children('.openuntil').addClass('imclosed21').hide();
            $(this).children('.whenstore_open').html('<span class="green-d">Closed<br></span><br>Opens '+day_tomorow+' at '+parseInt(finder4)/100+'am').css('font-size','0.9em');
            $(this).children('.whenstore_open').children('.green-d').css('font-size' , '1.1em');
            $(this).children('.whenstore_open').show();
            $(this).children('.store_addresss').css('font-size' , '0.82em');
            }
            

            if(myhour21 < finder3a) {
            $(this).children('.openuntil').addClass('imclosed21').hide();
            $(this).children('.whenstore_open').html('<span class="green-d">Closed<br></span><br>Opens Today at '+parseInt(finder3a/100)+'am').css('font-size','0.8em'); 
            $(this).children('.store_addresss').css('font-size' , '0.82em'); 
            $(this).children('.whenstore_open').fadeIn(600);  
            }

            if(deviation === 'Closed') {
            $(this).children('.openuntil').addClass('imclosed21').hide();
            $(this).children('.whenstore_open').html('<span class="green-d">Closed<br></span><br>Opens '+day_tomorow+' at '+parseInt(finder4)/100+'am').css('font-size','0.9em');
            $(this).children('.whenstore_open').children('.green-d').css('font-size' , '1.1em');
            $(this).children('.whenstore_open').show();
            $(this).children('.store_addresss').css('font-size' , '0.82em');    
            }

            $(this).children('.openuntil').not('.imclosed21').delay(200).fadeIn();

            $(this).attr('car-install', $(xml).find('#' + $(this).attr('id')).children('hasCarInstall').text());
            $(this).attr('design-center', $(xml).find('#' + $(this).attr('id')).children('hasDesignCenter').text());
            $(this).attr('Mac-store', $(xml).find('#' + $(this).attr('id')).children('macStore').text());
            $(this).attr('Mattress', $(xml).find('#' + $(this).attr('id')).children('hasMattressCenter').text());
        });
    }


    $('#f1').on('click', function () {

        if ($(this).attr('on') === '0') {
            $('.facets-d').not(this).attr('on', '0');
            $("[data=" + region_stores_load + "]").show();
            $('.facets-d').css('color', '#034694').css('background-color', 'transparent');
            $(this).css('color', '#fff').css('background-color', '#034694');
            $(".actual_stores[car-install='N']:visible").hide();
            $(this).attr('on', '1');
        } else {
            $("[data=" + region_stores_load + "]").show();
            $('.facets-d').css('color', '#034694').css('background-color', 'transparent');
            $(this).attr('on', '0');
        }

    });

    $('#f4').on('click', function () {

        if ($(this).attr('on') === '0') {
            $('.facets-d').not(this).attr('on', '0');
            $("[data=" + region_stores_load + "]").show();
            $('.facets-d').css('color', '#034694').css('background-color', 'transparent');
            $(this).css('color', '#fff').css('background-color', '#034694');
            $(".actual_stores[design-center='N']:visible").hide();
            $(this).attr('on', '1');
        } else {
            $("[data=" + region_stores_load + "]").show();
            $('.facets-d').css('color', '#034694').css('background-color', 'transparent');
            $(this).attr('on', '0');
        }

    });


    $('#f2').on('click', function () {

        if ($(this).attr('on') === '0') {
            $('.facets-d').not(this).attr('on', '0');
            $("[data=" + region_stores_load + "]").show();
            $('.facets-d').css('color', '#034694').css('background-color', 'transparent');
            $(this).css('color', '#fff').css('background-color', '#034694');
            $(".actual_stores[Mac-store='N']:visible").hide();
            $(this).attr('on', '1');
        } else {
            $("[data=" + region_stores_load + "]").show();
            $('.facets-d').css('color', '#034694').css('background-color', 'transparent');
            $(this).attr('on', '0');
        }

    });

    $('#f3').on('click', function () {

        if ($(this).attr('on') === '0') {
            $('.facets-d').not(this).attr('on', '0');
            $("[data=" + region_stores_load + "]").show();
            $('.facets-d').css('color', '#034694').css('background-color', 'transparent');
            $(this).css('color', '#fff').css('background-color', '#034694');
            $(".actual_stores[Mattress='N']:visible").hide();
            $(this).attr('on', '1');
        } else {
            $("[data=" + region_stores_load + "]").show();
            $('.facets-d').css('color', '#034694').css('background-color', 'transparent');
            $(this).attr('on', '0');
        }

    });


$('.store_list ul li').not('.live-region').on('click', function () {

 $('html, body').delay(300).animate({
   scrollTop: ('.pg-name')
  },500);  


function aftereffect() {
$('.stbreakcrumb').not('.ico').on('click', function() {
return false;
});

}

        $('.full-h1-d').remove()
        $(this).after('<div class="full-h1-d"><h1>P.C. Richard & Son Stores in Nassau County, NY</h1></div>');    
        region_stores_load = $(this).attr('data2');
        $('.store_list-small').empty();
        $('.store_list-small').append(eval(region_stores_load));

        $('.actual_stores').each(function()  {
$(this).prepend('<div class=store_name></div><div class=openuntil><span class=green-d>Open</span><br>until<span class=closetime></span></div><div class=whenstore_open><span class=green-d>Closed<br></span><br>Opens at<span class=opentime></span></div><div class=store_addresss><span class=ap1></span><br><span class=ap2></span> <span class=ap3></span> <span class=ap4></span></div><div class=see_details>See<br>Details</div>');

        })
        $.ajax({
        type: "GET",
        url: store_list,
        dataType: "xml",
        success: xmlParser,
        error: function () {
            $.ajax({
                url: store_list,
                dataType: "xml",
                success: xmlParser
            });
        }
    });


        $('.facets-d').css('color', '#034694').css('background-color', 'transparent').attr('on', '0');
        if ($(this).attr('data') === '0') {
            $(this).attr('data', '1');
            $('ul.breadcrumbs>li:nth-child(2)').children('a').attr('href' , '/storelocator/store-landing.jsp').addClass('s_return');
            $(this).not('.opened-d').css('width' ,'100% !important');
            $(this).not('.opened-d').children('.theex').show();
            $('.filterby-d').show();
            $('.actual_stores').hide();
            $('.titlelist').hide();
            $('.pg-name').hide();
            $(this).css('background-color', 'transparent').css('border-bottom', '1px solid #EFEFEF').css('line-height', '20px').css('font-weight', 'bold').css('padding-left' , '0%').css('height' , '25px');
            $(this).children('.store_amount').css('display' , 'none')
            $(this).addClass('opened-d');
            $(this).parent('a').parent('ul').parent('div').children('.google_map').show()
            $(this).parent('a').parent('ul').parent('div').children('.region_explainantion').fadeIn();
            $('.store_list').css('padding-top', '0px');
            $('.store_list ul li').not(this).hide();
            $("[data=" + region_stores_load + "]").delay(600).show();
            history.pushState(null, null, '/storelocator/store-landing.jsp?location='+region_stores_load);
            region_stores_load_meta = $('.rc:visible').text();
            $('title').html(region_stores_load_meta+' Appliance, TV, Electronics & Mattress Stores');
            $('meta[name=description]').attr('content' , eval(region_stores_load+'_meta'));
            $('.region_explainantion:visible').html(eval(region_stores_load+'_m'));
            $('.google_map').empty().removeAttr('id');
            $(' .store_list ul li').css('text-align' , 'right');
            $('ul.breadcrumbs>li:nth-child(3)').remove();
            $('ul.breadcrumbs>li:nth-child(4)').remove();

$('.google_map:visible').attr('id' , 'map');

switch(region_stores_load) {
 case  'Nassau':
 current_loc = [['Carle Place', 40.74403, -73.61877, 8],['Elmont', 40.68971, -73.72337, 7],['Greenvale', 40.81115, -73.62446, 6],['Levittown', 40.7255, -73.52545, 5],['New Hyde Park', 40.74267, -73.69546, 4],['Oceanside', 40.6405, -73.65518, 3],['Plainview', 40.78506, -73.44812, 2],['Rockville Centre', 40.65756, -73.64285, 1]];
 current_center = new google.maps.LatLng(40.74403, -73.61877)
 current_zoom = 10
 core_gm()
 $('ul.breadcrumbs>li:nth-child(2)').after('<li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp" title="New York">New York</a></li><li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp?location=Nassau" title="Nassau Stores">Nassau</a></li>');
 aftereffect()

        break;
 case  'Suffolk':
 current_loc =[['Bayshore', 40.734017, -73.258069, 9],['Deer Park', 40.764674, -73.311759, 8],['Elwood', 40.840376, -73.315192, 7],['Hauppauge', 40.809712, -73.211560, 6],['Patchogue', 40.776150, -73.036828, 5],['Riverhead', 40.923613, -72.699685, 4],['Southampton', 40.897655, -72.412451, 3],['Stony Brook', 40.873715, -73.122533, 2],['Babylon', 40.708750, -73.354806, 1]];
 current_center = new google.maps.LatLng(40.809712, -73.211560) 
 current_zoom = 9   
 core_gm()
 $('ul.breadcrumbs>li:nth-child(2)').after('<li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp" title="New York">New York</a></li><li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp?location=Suffolk" title="Suffolk Stores">Suffolk</a></li>');
 aftereffect()

        break;
 case  'Staten_Island':
 current_loc = [['Richmond Avenue', 40.590019, -74.166192, 1]];
 current_center = new google.maps.LatLng(40.590019, -74.166192)
 current_zoom = 10
 core_gm()
 $('ul.breadcrumbs>li:nth-child(2)').after('<li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp" title="New York">New York</a></li><li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp?location=Staten_Island" title="Staten Island Stores">Staten Island</a></li>');
 aftereffect()

        break;
 case  'Westchester':
 current_loc = [['Yonkers', 40.978071, -73.831094, 1]];
 current_center = new google.maps.LatLng(40.978071, -73.831094)
 current_zoom = 10
 core_gm()
 $('ul.breadcrumbs>li:nth-child(2)').after('<li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp" title="New York">New York</a></li><li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp?location=Westchester" title="Westchester Stores">Westchester</a></li>');
 aftereffect()

        break;
 case  'Manhattan':
 current_loc = [['Chelsea', 40.742463, -73.99172, 4],['Harlem', 40.810776, -73.951642, 3],['Upper East Side', 40.778786, -73.953123, 2],['Upper West Side', 40.788587, -73.975898, 1]];
 current_center = new google.maps.LatLng(40.788587, -73.975898)
 current_zoom = 11
 core_gm()
 $('ul.breadcrumbs>li:nth-child(2)').after('<li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp" title="New York">New York</a></li><li><a class="ico stbreakcrumb" href="/store-landing.jsp?location=Manhattan" title="Manhattan Stores">Manhattan</a></li>');
 aftereffect()

        break;
 case  'Bronx':
 current_loc = [['Bay Plaza', 40.866538, -73.830447, 2],['E. Fordham Road', 40.862739, -73.897325, 1]];
 current_center = new google.maps.LatLng(40.862739, -73.897325)
 current_zoom = 11
 core_gm()
 $('ul.breadcrumbs>li:nth-child(2)').after('<li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp" title="New York">New York</a></li><li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp?location=Bronx" title="Bronx Stores">Bronx</a></li>');
 aftereffect()

        break;
 case  'Brooklyn':
 current_loc = [['Atlantic Avenue', 40.683985, -73.977732, 7],['Bay Ridge', 40.620093, -74.023941, 6],['Brooklyn - 86th Street', 40.604690, -73.998673, 5],['Flatbush',40.617657, -73.931188, 4],['Gateway', 40.65197, -73.87453, 3],['Kings Highway', 40.604183, -73.973534, 2],['Ralph Avenue', 40.622814, -73.917431, 1]];
 current_center = new google.maps.LatLng(40.65197, -73.87453)
 current_zoom = 11
 core_gm()
 $('ul.breadcrumbs>li:nth-child(2)').after('<li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp" title="New York">New York</a></li><li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp?location=Brooklyn" title="Brooklyn Stores">Brooklyn</a></li>');
 aftereffect()

        break;
 case  'Queens':
 current_loc = [['Astoria', 40.754843, -73.922358, 7],['Bayside', 40.757770, -73.783539, 6],['College Point', 40.781650, -73.836492, 5],['Forest Hills', 40.717351, -73.835934, 4],['Ozone Park', 40.680702, -73.845202, 3],['Rego Park', 40.732026, -73.867675, 2],['Woodside', 40.742444, -73.914887, 1]];
 current_center = new google.maps.LatLng(40.732026, -73.867675)
 current_zoom = 11
 core_gm()
 $('ul.breadcrumbs>li:nth-child(2)').after('<li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp" title="New York">New York</a></li><li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp?location=Queens" title="Queens Stores">Queens</a></li>');
 aftereffect()

        break;
 case  'Rockland':
 current_loc = [['Nanuet', 41.100366, -74.023231, 1]];
 current_center = new google.maps.LatLng(41.100366, -74.023231)
 current_zoom = 11
 core_gm()
 $('ul.breadcrumbs>li:nth-child(2)').after('<li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp" title="New York">New York</a></li><li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp?location=Rockland" title="Rockland Stores">Rockland</a></li>');
 aftereffect()

        break;
case 'Northern_Jersey':
current_loc = [['Hanover', 40.816213, -74.403358, 7],['Jersey City', 40.722891, -74.091743, 6],['Paramus', 40.942440, -74.072203, 5],['Roxbury', 40.871494, -74.648377, 4],['Wayne', 40.894956, -74.244478, 3],['West Carteret Retail & Clearance Outlet', 40.592363, -74.237670, 2],['West New York', 40.785302, -74.022998, 1]];
current_center = new google.maps.LatLng(40.816213, -74.403358)
current_zoom = 9
core_gm()
$('ul.breadcrumbs>li:nth-child(2)').after('<li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp" title="New Jersey">New Jersey</a></li><li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp?location=Northern_Jersey" title="Northern Jersey Stores">Northern Jersey</a></li>');
aftereffect()

        break;
case 'Central_Jersey':
current_loc = [['East Brunswick', 40.45477, -74.40004, 6],['Eatontown', 40.291094,-74.046633, 5],['Raritan',40.578071, -74.633159, 4],['Union', 40.695846, -74.25708, 3],['Watchung', 40.639299, -74.421848, 2],['Woodbridge', 40.568978, -74.290528, 1]];
current_center = new google.maps.LatLng(40.695846, -74.25708)
current_zoom = 8
core_gm()
$('ul.breadcrumbs>li:nth-child(2)').after('<li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp" title="New Jersey">New Jersey</a></li><li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp?location=Central_Jersey" title="Central Jersey Stores">Central Jersey</a></li>');
aftereffect()

        break;
case 'Southern_Jersey':
current_loc = [['Brick', 40.056750, -74.152505, 4],['Lawrenceville', 40.294780, -74.681966, 3],['Manalapan', 40.292108, -74.299684, 2],['Mount Laurel', 39.942298, -74.957293, 1]];
current_center = new google.maps.LatLng(40.292108, -74.299684)
current_zoom = 8
core_gm()
$('ul.breadcrumbs>li:nth-child(2)').after('<li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp" title="New Jersey">New Jersey</a></li><li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp?location=Southern_Jersey" title="Southern Jersey Stores">Southern Jersey</a></li>');
aftereffect()

        break;
  case 'Fairfield':
  current_loc = [['Danbury', 41.415947, -73.422221, 2],['Norwalk', 41.099959, -73.441739, 1], ];
  current_center = new google.maps.LatLng(41.099959, -73.441739)
  current_zoom = 8
  core_gm()
  $('ul.breadcrumbs>li:nth-child(2)').after('<li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp" title="Connecticut">Connecticut</a></li><li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp?location=Fairfield" title="Fairfield Stores">Fairfield</a></li>');
 aftereffect()

        break;
  case 'Hartford':
 current_loc = [['Enfield', 41.998187, -72.577695, 3],['Manchester', 41.808293, -72.533906, 2],['Newington', 41.653592, -72.726525, 1]];
 current_center = new google.maps.LatLng(41.808293, -72.533906)
 current_zoom = 8
 core_gm()
$('ul.breadcrumbs>li:nth-child(2)').after('<li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp" title="Connecticut">Connecticut</a></li><li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp?location=Hartford" title="Hartford Stores">Hartford</a></li>');
aftereffect()

        break;
  case 'New_Haven':
current_loc = [['North Haven', 41.349799, -72.869019, 1]];
current_center = new google.maps.LatLng(41.349799, -72.869019)
current_zoom = 11
core_gm()
$('ul.breadcrumbs>li:nth-child(2)').after('<li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp" title="Connecticut">Connecticut</a></li><li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp?location=New_Haven" title="New Haven Stores">New Haven</a></li>');
aftereffect()

        break;
  case 'Philadelphia':
current_loc = [['Northeast Pennsylvania', 40.046884, -75.058583, 1]];
current_center = new google.maps.LatLng(40.046884, -75.058583)
current_zoom = 10
core_gm()
$('ul.breadcrumbs>li:nth-child(2)').after('<li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp" title="Pennsylvania">Pennsylvania</a></li><li><a class="ico stbreakcrumb" href="/storelocator/store-landing.jsp?location=Philadelphia" title="Philadelphia Stores">Philadelphia</a></li>');
aftereffect()        
break;
    default:
}

            $('title').html(eval(region_stores_load+'_t'));
            $('.full-h1-d').children('h1').html(eval(region_stores_load+'_h1'));
            $('.full-h1-d').css('display' , 'block');
        } else {
            $('.theex').hide();  
            $(' .store_list ul li').css('text-align' , 'left');
            $('.stbreakcrumb').parent('li').remove();
            $('.titlelist').show();
            $(this).not('.opened-d').css('width' ,'30% !important');
            $(this).removeClass('opened-d');
            $(this).attr('data', '0');
            $('.actual_stores').hide();
            $('.filterby-d').hide();
            $('.pg-name').show();
            $('.store_list').css('padding-top', '35px');
            $(this).parent('a').parent('ul').parent('div').children('.google_map').hide();
            $(this).parent('a').parent('ul').parent('div').children('.region_explainantion').hide();
            $('.store_list ul li').css('background-color', '#EFEFEF').css('border', 'none').css('text-align', 'left').css('line-height', '65px').css('font-weight', 'normal').css('padding-left' , '2%').css('height' , 'auto');
            $(this).children('.store_amount').css('right', '20px').css('line-height', '28px').css('font-weight','normal').css('position', 'absolute').css('top', '20px').css('display' , 'block');
            $('.store_list ul li').not(this).show();
           history.pushState(null, null, '/storelocator/store-landing.jsp');
           $('title').html('P.C. Richard & Son Store Locations - Appliance, TV, Electronics & Mattresses');
           $('meta[name=description]').attr('content' , 'Visit one of our 66 P.C. Richard & Son store locations for low prices on appliances, TVs, computer, electronics, and mattresses.');
           $('.full-h1-d').children('h1').html('');
           $('.full-h1-d').css('display' , 'none');
        }
    
    });


$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
}

region_stores_load2 = $.urlParam('location');
$("li[data2='"+region_stores_load2+"']" ).click()
region_stores_load_meta = $('.rc:visible').text();
$('title').html(eval(region_stores_load+'_t'));



$('.store_rat').click(function() {
  return false
});

$('.s_return').on('click' , function() {
  $('.theex:visible').parent('li').click();
  return false
});

$(document).ready(function() {
 $('.findastore-d').attr('style' , 'color:#333 !important');
});

    
  
    $(window).on('popstate', function() {
    if(window.location.href.indexOf("#") > -1) { 
    } else {
        location.reload(true);
        console.log('returned')
    }
   });





   (function($, window) {
        var adjustAnchor = function() {

            var $anchor = $(':target'),
                    fixedElementHeight = 100;

            if ($anchor.length > 0) {

                $('html, body')
                    .stop()
                    .animate({
                        scrollTop: $anchor.offset().top - fixedElementHeight
                    }, 200);

            }

        };

        $(window).on('hashchange load', function() {
            adjustAnchor();
        });

    })(jQuery, window);





})(jQuery);});