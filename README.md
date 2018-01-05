<strong>FSI DEV 1.2</strong><br>


Current stable build 01-01-18<br>

Included files
```
<link href="/images/promos/FSI-01-02-2018.min.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="/images/promos/FSI-01-02-2018.min.js"></script>
```

Default element structure-------------------------------------------------

.promo_box_940    100% element<br> 
.promo_box_66     66% element<br> 
.promo_box_50     50% element<br> 
.promo_box_33     33% element<br> 


```
<div class="promo_box_940"></div> 
<div class="promo_box_66"></div>
<div class="promo_box_50"></div>
<div class="promo_box_33"></div>
```



URL added by adding data="FO" atrribute on .promo_box"940,50.,33" classed div.<br> 
Example-----
```
<div class="promo_box_940" data="/content/PCTECH"></div> or <div class="promo_box_940" data="FE140"></div>
```

if data attribute is missing child IMG or element will not be wrapped in<br> 
```
<a href="{url in data tag or URL to Model #}" title="{model # or url in data tag}"></a>
```
-- (This part is automated by the JS) and be unclickable.


if only one model number  data="FE140"<br> 
if multiple model numbers or a Landing Page data="/content/landingpage.html"<br> 

```
<div class="promo_box_940" data="/category/Home-Furnishings/Headboards-Upholstered-Beds/Headboards/_/N-1gl4z5q">
    <img src="/images/promos/flyer-12-31-17-pg8-hero1.jpg" alt="Headboards">
</div>
```
or
```
<div class="promo_box_940" data="FE140">
    <img src="/images/promos/flyer-12-31-17-pg8-hero1.jpg" alt="Headboards">
</div>
```

(MODEL NUMBER MUST BE IN CAPS)    (ALL "/" AND "." NEED TO BE CONVERT TO "-")  <br> 
Example CP.PT.003.000 === CP-PT-0003-000<br> 


Video Module---------------------------------------------------
```
<video poster="/images/promos/flyer-4-30-17-pg3-hero2.jpg">
<source src="/images/promos/pureWash_Pro-HIW.mp4" type="video/mp4">
Your browser does not support this video
</video>
```

This will show a video on click.<br> 
The video module is 100% on desktop and mobile<br> 


Graphical element with dynamic pricing-----------------------------<br> 
```
    <div class="promo_box singlepromo singlepromo-multi videogame" data="FB502SBKL" data2="/browse?Ntt=FB502S*" style="background-image:url(/images/promos/flyer-12-31-17-pg21-hero18.jpg)">
        <div class="promo_des_price"></div>
    </div>
 ```

Element takes up a 50% slot and 100% on mobile<br> 
data = where the pricing is coming from<br> 
data2 = used whem there the link needs to go to MORE THEN ONE PRODUCT OR LANDING PAGE<br> 
(MUST HAVE CLASS "singlepromo-multi" TO USE DATA2)<br> 
IF ONLY ONE PRODUCT IS BEING USED REMOVE "singlepromo-multi" or link will come up "unkown"<br> 



Menu written in-------------------------------------------------<br> 
```
<div id="submenu">
    <div id="ae4" class="submenu_overflow">
    
menu goes here

   </div>
</div>
 ```       
 ```
        <div class="submenu_button" data="9">
            <i class="icon-icon_healthBeauty"></i>
            <div class="undermenu">Fitness</div>
        </div>

        <div class="submenu_button" data="10">
            <i class="icon-icon_heater"></i>
            <div class="undermenu">Heaters &amp; Humidifers</div>
        </div>
```

Icons-----------------------------------------   
```
<i class="icon-icon_heater"></i>
```
icon-icon_appliances     
icon-icon_bed
icon-icon_healthBeauty   
icon-icon_heater
icon-icon_homeAutomation  
icon-icon_tv  
icon-icon_laptop  
icon-icon_headphone  
icon-icon_camera  
icon-caraudio   
icon-icon_grill   
icon-icon_officeDesk  
icon-icon_bed  
icon-icon_game 
icon-icon_vacuum  


Pages written in-------------------------------------------------
```
    <div class="fsi" id="pg0" data2="Appliances"></div>
    <div class="fsi" id="pg1" data2="Recliners"></div>
    <div class="fsi" id="pg2" data2="Fitness"></div>
 ```


Pages var written in---------------------------------------------

```
    var content_page0 = '<div class=internalflyer> fo </div>';
    var content_page1 = '<div class=internalflyer> fo </div>';
    var content_page3 = '<div class=internalflyer> fo </div>';
```