FSI DEV 1.1


current stable build 01-01-18
CSS /images/promos/FSI-01-02-2018.min.css
JS  /images/promos/FSI-01-02-2018.min.js


Default element structure-------------------------------------------------

.promo_box_940    100% element<br> 
.promo_box_66     66% element<br> 
.promo_box_50     50% element<br> 
.promo_box_33     33% element<br> 


<div class="promo_box_940"></div><br> 
<div class="promo_box_66"></div><br> 
<div class="promo_box_50"></div><br> 
<div class="promo_box_33"></div><br> 


URL added by adding data="FO" atrribute on .promo_box"940,50.,33" classed div.
Example-----<div class="promo_box_940" data="/content/PCTECH"></div> or <div class="promo_box_940" data="FE140"></div>

if data attribute is missing child IMG or element will not be wrapped in
<a href="{url in data tag or URL to Model #}" title="{model # or url in data tag}"></a> -- (This part is automated by the JS)
and be unclickable.

if only one model number  data="FE140"
if multiple model numbers or a Landing Page data="/content/landingpage.html"

<div class="promo_box_940" data="/category/Home-Furnishings/Headboards-Upholstered-Beds/Headboards/_/N-1gl4z5q">
    <img src="https://www.pcrichard.com/images/promos/flyer-12-31-17-pg8-hero1.jpg" alt="Headboards">
</div>

<div class="promo_box_940" data="FE140">
    <img src="https://www.pcrichard.com/images/promos/flyer-12-31-17-pg8-hero1.jpg" alt="Headboards">
</div>

(MODEL NUMBER MUST BE IN CAPS)    (ALL "/" AND "." NEED TO BE CONVERT TO "-")  
Example CP.PT.003.000 === CP-PT-0003-000


Video Module---------------------------------------------------

<video poster="/images/promos/flyer-4-30-17-pg3-hero2.jpg">
<source src="/images/promos/pureWash_Pro-HIW.mp4" type="video/mp4">
Your browser does not support this video
</video>

This will show a video on click.
The video module is 100% on desktop and mobile


Graphical element with dynamic pricing-----------------------------
    <div class="promo_box singlepromo singlepromo-multi videogame" data="FB502SBKL" data2="/browse?Ntt=FB502S*" style="background-image:url(/images/promos/flyer-12-31-17-pg21-hero18.jpg)">
        <div class="promo_des_price"></div>
    </div>

Element takes up a 50% SLOT" and 100% on mobile
data = where the pricing is coming from
data2 = used whem there the link needs to go to MORE THEN ONE PRODUCT OR LANDING PAGE
(MUST HAVE CLASS "singlepromo-multi" TO USE DATA2)
IF ONLY ONE PRODUCT IS BEING USED REMOVE "singlepromo-multi" or link will come up "unkown"





Menu written in-------------------------------------------------

<div id="submenu">
    <div id="ae4" class="submenu_overflow">
    
menu goes here

   </div>
</div>
        
        <div class="submenu_button" data="9">
            <i class="icon-icon_healthBeauty"></i>
            <div class="undermenu">Fitness</div>
        </div>

        <div class="submenu_button" data="10">
            <i class="icon-icon_heater"></i>
            <div class="undermenu">Heaters &amp; Humidifers</div>
        </div>


Icons-----------------------------------------   

<i class="icon-icon_heater"></i>

icon-icon_appliances<br>        
icon-icon_bed<br>   
icon-icon_healthBeauty<br>   
icon-icon_heater<br>   
icon-icon_homeAutomation<br>   
icon-icon_tv<br>   
icon-icon_laptop<br>   
icon-icon_headphone<br>   
icon-icon_camera<br>   
icon-caraudio<br>   
icon-icon_grill<br>   
icon-icon_officeDesk<br>   
icon-icon_bed<br>   
icon-icon_game<br>   
icon-icon_vacuum<br>   


Pages written in-------------------------------------------------

    <div class="fsi" id="pg0" data2="Appliances"></div>
    <div class="fsi" id="pg1" data2="Recliners"></div>
    <div class="fsi" id="pg2" data2="Fitness"></div>
                                                                   etc.

Pages var written in---------------------------------------------

    var content_page0 = '<div class=internalflyer> fo </div>';
    var content_page1 = '<div class=internalflyer> fo </div>';
    var content_page3 = '<div class=internalflyer> fo </div>';
                                                                   etc.


