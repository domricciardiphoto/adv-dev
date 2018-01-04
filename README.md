FSI DEV 1.0

Default element structure-------------------------------------------------

<div class=""></div>
.promo_box_940    100% element
.promo_box_50     50% element
.promo_box_33     33% element

URL added by adding data="asdf" atrribute on .promo_box"940,50.,33" classed div.
if data attribute is missing child IMG or element will not be wrapped in
<a href="{url in data tag or URL to Model #}" title="{model # or url in data tag}"></a> -- (This part is automated by the JS)
and be unclickable.


"data tag" Structure: for a clickable element---

if only one model number  data="FE140"
if multiple model numbers or a Landing Page data="/content/landingpage.html"

<div class="promo_box_940" data="/category/Home-Furnishings/Headboards-Upholstered-Beds/Headboards/_/N-1gl4z5q">
    <img src="/images/promos/flyer-12-31-17-pg8-hero1.jpg" alt="Headboards">
</div>

<div class="promo_box_940" data="FE140">
    <img src="/images/promos/flyer-12-31-17-pg8-hero1.jpg" alt="Headboards">
</div>

(MODEL NUMBER MUST BE IN CAPS)    (ALL "/" AND "." NEED TO BE CONVERT TO "-")  
Example CP.PT.003.000 === CP-PT-0003-000


Video Module---------------------------------------------------

<video poster="/images/promos/flyer-4-30-17-pg3-hero2.jpg">
<source src="/images/promos/pureWash_Pro-HIW.mp4" type="video/mp4">
Your browser does not support this video
</video>


Menu written in-------------------------------------------------
        
        <div class="submenu_button" data="9">
            <i class="icon-icon_healthBeauty"></i>
            <div class="undermenu">Fitness</div>
        </div>

        <div class="submenu_button" data="10">
            <i class="icon-icon_heater"></i>
            <div class="undermenu">Heaters &amp; Humidifers</div>
        </div>


Icons-----------------------------------------   

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


Page written in-------------------------------------------------

    <div class="fsi" id="pg0" data2="Appliances"></div>
    <div class="fsi" id="pg8" data2="Recliners"></div>
    <div class="fsi" id="pg9" data2="Fitness"></div>
                                                                   etc.

Page var written in---------------------------------------------

    var content_page0 = '<div class=internalflyer> test1 </div>';
    var content_page1 = '<div class=internalflyer> test1 </div>';
                                                                   etc.


