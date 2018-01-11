<h1>Digital / Paper FSI DEV 1.0 &amp; Feature Set</h1><br>
Current stable build 01-01-18<br>
Up to 40 digital pages<br>
Unlimited paper pages<br>

Current Development info<br>
-------------------------------------------------
<h6>
CSS is in progress of being updated with additional layout options<br>
Additional CSS classes and updates being pushed to main file soon as
proven fully stable<br>
01-11-18 Dominick Ricciardi
</h6>
<br><br>


<strong>Include file</strong><br>

Place at the beginning of document:
```
<link href="FSI-01-02-2018.min.css" rel="stylesheet" type="text/css">
```
Place at the end of document:
```
<script type="text/javascript" src="FSI-01-02-2018.min.js"></script>
```

<h2>Core system</h2>
<h3>Pages written in</h3>
id = reference to page<br>
data2 = what icon will light up when page is displayed<br><br>

   ``` <div class="fsi" id="pg0" data2="Appliances"></div>```<br>
   ``` <div class="fsi" id="pg1" data2="Recliners"></div>```<br>
   ``` <div class="fsi" id="pg2" data2="Fitness"></div>```<br>
 


<h3>Pages var written in</h3>
"fo" is where the content for the page goes<br>
 all content must inside the internalflyer class

```
    var content_page0 = '<div class=internalflyer> fo </div>';
    var content_page1 = '<div class=internalflyer> fo </div>';
    var content_page3 = '<div class=internalflyer> fo </div>';
```



<h2>Menu</h2>
```
<div id="submenu">
    <div id="ae4" class="submenu_overflow">
    
---menu goes here---

   </div>
</div>
 ```  
 Menu icons are pulled from the website CSS and are baked in.
"data" is the page number that the icon is going to (starting from 0)<br>
"i" class determines icon<br>
"undermenu" text displays text under icon

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
<h2>Icons</h2>  
```
<i class="icon-icon_heater"></i>
```

Each class displays an icon
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
```



<h2>Digital FSI</h2>

<strong>Default element structure</strong>

```.promo_box_940```    100% element<br> 
```.promo_box_66```     66% element<br> 
```.promo_box_50```     50% element<br> 
```.promo_box_33```     33% element<br> 



```<div class="promo_box_940"> fo </div> ```<br>
```<div class="promo_box_66"> fo </div>```<br>
```<div class="promo_box_50"> fo </div>```<br>
```<div class="promo_box_33"> fo </div>```<br>




URL added by adding data="foo" atrribute on .promo_box"940,50.,33" classed div.<br> 
```
<div class="promo_box_940" data="/content/PCTECH"></div> or <div class="promo_box_940" data="FE140"></div>
```

if data attribute is not used, the child IMG (typical) or child element will not be wrapped in a<br> 
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
Example - CP.PT.003.000 becomes CP-PT-0003-000<br> 


<strong>Video Module</strong>
```
<video poster="/images/promos/flyer-4-30-17-pg3-hero2.jpg">
<source src="/images/promos/pureWash_Pro-HIW.mp4" type="video/mp4">
Your browser does not support this video
</video>
```

This will show a video on click and will expand to fill the area at 100% on desktop and mobile<br> 


<strong>Dynamic Products</strong><br>
Products are brought in via a search link

3 Products across 100%
```
<div class="promo_box" data="/browse?Ntt=UN75MU8000+UN75MU9000+UN82MU8000"></div>
```

2 Products across 66%  (small) (Two across)<br>
Requires a 33% element to fill the hole on desktop
```
<div class="promo_box show only two" data="/browse?Ntt=UN75MU8000+UN75MU9000"></div>
```

2 Products across 100% (large) (Two across)
```
<div class="promo_box show get large" data="/browse?Ntt=UN75MU8000+UN75MU9000"></div>
```




<strong>Graphical element with dynamic pricing</strong>

Element takes up a 50% slot on desktop and 100% on mobile<br> 
```data``` = where the pricing is coming from<br> 
```data2``` = used whem there the link needs to go to MORE THEN ONE PRODUCT OR LANDING PAGE<br> 
```style="background-image"``` shows the background image for product, logo , etc
<br><br> 
MUST HAVE CLASS ```.singlepromo-multi``` to use data2 <br> <br> 

IF ONLY ONE PRODUCT IS BEING TARGETED --- remove ```singlepromo-multi``` or link will direct to "UNKNOWN"<br> 


Classes for alternitive layouts<br>
Add class ```videogame33```  to end of class string for 33% with no border<br>
Add class ```videogame66```  to end of class string for 66% with no border<br>
Add class ```videogame33b``` to end of class string for 33% with border<br>
Add class ```videogame66b``` to end of class string for 66% with border<br>

```
<div class="promo_box singlepromo singlepromo-multi videogame" data="FB502SBKL" data2="/browse?Ntt=FB502S*" style="background-image:url(/images/promos/flyer-12-31-17-pg21-hero18.jpg)">
<div class="promo_des_price"></div>
</div>
 ```

 
 
<h2>Paper Flyer</h2>
The paper flyer is the digital flyer without all of the dynamic pricing but still retains all the functionality of the digital.
Adding dynamic elements and classes to IMGs used in the Digital version will work the same in the paper one.<br><br>

Paper flyers are constructed by Photoshop sliced .html file.<br>
From ``<table> </table>``<br>
Removing head,html,Doctype,etc tags<br><br>
NO NEED TO REMOVE ANY TABLE ELEMENTS JS removes unnessasry code<br>
```<table id="Table_01" width="1000" height="952" border="0" cellpadding="0" cellspacing="0">```

Each img needs a data tag added<br>

Full URL<br>
```
<td colspan="2">
<img data="/browse?Ntt=fgss2635tf+fggf3036tf+fgmv176ntf+fgid2466qf" src="/images/promos/01-14-18-PG2_N_06.jpg" width="513"height="352" alt="">
</td>
```
Only One Model<br>
```
<td colspan="2">
<img data="FE140" src="/images/promos/01-14-18-PG2_N_06.jpg" width="513"height="352" alt="">
</td>
```