# Digital &amp; Paper FSI

## v2018 &amp; Current Feature Set

### Current Development info

---

#### 01-11-18 By: Dominick Ricciardi

**Current stable build 01-01-18**\
Up to 40 digital pages\
Unlimited paper pages

##### 1: CSS is in progress of being updated with additional layout options. Additional CSS classes and updates being pushed to main file soon as proven fully stable

##### 2: Looking to increase speed on the Dynamic image used pages. The load is sequencial and not immediate. This has to change

##### 3: Revising the menu UI to accomidate 30+ pages (Beta 1)

---

### Include files

Place at the beginning of document:

```HTML
<link href="FSI-01-02-2018.min.css" rel="stylesheet" type="text/css">
```

Place at the end of document:

```HTML
<script type="text/javascript" src="FSI-01-02-2018.min.js"></script>
```

## Core system

### Pages written in

id = reference to page\
data2 = what icon will light up when page is displayed

```HTML
 <div class="fsi" id="pg0" data2="Appliances"></div>
 <div class="fsi" id="pg1" data2="Recliners"></div>
 <div class="fsi" id="pg2" data2="Fitness"></div>
```

### Pages var written in

"fo" is where the content for the page goes\
 all content must inside the internalflyer class

```javascript
var content_page0 = '<div class=internalflyer> fo </div>';
var content_page1 = '<div class=internalflyer> fo </div>';
var content_page3 = '<div class=internalflyer> fo </div>';
```

## Menu

```HTML
<div id="submenu">
    <div id="ae4" class="submenu_overflow">

---menu goes here---

   </div>
</div>
```

**Menu icons are pulled from the website CSS and are baked in.**\
**"data"** is the page number that the icon is going to (starting from 0)\
**"i"** class determines icon\
**"undermenu"** text displays text under icon

```HTML
        <div class="submenu_button" data="9">
            <i class="icon-icon_healthBeauty"></i>
            <div class="undermenu">Fitness</div>
        </div>

        <div class="submenu_button" data="10">
            <i class="icon-icon_heater"></i>
            <div class="undermenu">Heaters &amp; Humidifers</div>
        </div>
```

## Icons

`<i class="icon-icon_heater"></i>`

Each class displays an icon

```HTML
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

---

## Digital FSI

### Default element structure

### Full URL or Landing Page

```HTML
<div class="promo_box_940" data="/category/Home-Furnishings/Headboards-Upholstered-Beds/Headboards/_/N-1gl4z5q">
    <img src="/images/promos/flyer-12-31-17-pg8-hero1.jpg" alt="Headboards">
</div>
```

### Going to Single Model Number

```HTML
<div class="promo_box_940" data="FE140">
    <img src="/images/promos/flyer-12-31-17-pg8-hero1.jpg" alt="Headboards">
</div>
```

### Different Sizes Available for Layout

* .promo_box_940    100% element
* .promo_box_66     66% element
* .promo_box_50     50% element
* .promo_box_33     33% element

```HTML
<div class="promo_box_940"> fo </div>
<div class="promo_box_66"> fo </div>
<div class="promo_box_50"> fo </div>
<div class="promo_box_33"> fo </div>
```

URL added by adding data="foo" atrribute on .promo_box"940,50.,33" classed div.

`<div class="promo_box_940" data="/content/PCTECH"></div> or <div class="promo_box_940" data="FE140"></div>`

if data attribute is not used, the child IMG (typical) or child element will not be wrapped in a \
`<a href="{url in data tag or URL to Model #}" title="{model # or url in data tag}"></a>`

-- (This part is automated by the **JS**) and be unclickable.

if only one model number  data="FE140"
\
if multiple model numbers or a Landing Page data="/content/landingpage.html"

(MODEL NUMBER MUST BE IN CAPS)    (ALL "/" AND "." NEED TO BE CONVERT TO "-")
\
**Example** - **CP.PT.003.000** needs to become **CP-PT-0003-000**

### Video Module

```HTML
<video poster="/images/promos/flyer-4-30-17-pg3-hero2.jpg">
<source src="/images/promos/pureWash_Pro-HIW.mp4" type="video/mp4">
Your browser does not support this video
</video>
```

This will show a video on click and will expand to fill the area at 100% on desktop and mobile

### Dynamic Products

Products are brought in via a search link

3 Products across 100%

`<div class="promo_box" data="/browse?Ntt=UN75MU8000+UN75MU9000+UN82MU8000"></div>`

2 Products across 66%  (small) (Two across) \
Requires a 33% element to fill the hole on desktop

`<div class="promo_box show only two" data="/browse?Ntt=UN75MU8000+UN75MU9000"></div>`

2 Products across 100% (large) (Two across)

`<div class="promo_box show get large" data="/browse?Ntt=UN75MU8000+UN75MU9000"></div>`

### Dynamic Graphical element with dynamic pricing

```HTML
<div class="promo_box singlepromo singlepromo-multi videogame" data="FB502SBKL" data2="/browse?Ntt=FB502S*"
style="background-image:url(/images/promos/flyer-12-31-17-pg21-hero18.jpg)">
<div class="promo_des_price"></div>
</div>
```

`data` = where the pricing is coming from\
`data2` = used whem there the link needs to go to MORE THEN ONE PRODUCT OR LANDING PAGE\
`style="background-image"` shows the background image for product, logo , etc\

**MUST HAVE CLASS**  `.singlepromo-multi` to use **data2**\
If only **ONE** product is being targeted remove `singlepromo-multi` or link will direct to **"UNKNOWN"**

**Classes for alternitive layouts**\
Add class `videogame33`  to end of class string for 33% with no border\
Add class `videogame66`  to end of class string for 66% with no border\
Add class `videogame33b` to end of class string for 33% with border\
Add class `videogame66b` to end of class string for 66% with border\

#### Element takes up a 50% slot on desktop and 100% on mobile

---

## Paper Flyer

The paper flyer is the digital flyer without all of the dynamic pricing but still retains all the functionality of the digital.
Adding dynamic elements and classes to IMGs used in the Digital version will work the same in the paper one.\

**Paper flyers are constructed by Photoshop sliced .html file.**\
From `<table>` to `</table>`\
Removing head,html,Doctype,etc tags\
NO NEED TO REMOVE ANY TABLE ELEMENTS JS removes unnessasry code

`<table id="Table_01" width="1000" height="952" border="0" cellpadding="0" cellspacing="0">`

Each img needs a data tag added\

### Full URL

```HTML
<td colspan="2">
<img data="/browse?Ntt=fgss2635tf+fggf3036tf+fgmv176ntf+fgid2466qf"
src="/images/promos/01-14-18-PG2_N_06.jpg" width="513"height="352" alt="">
</td>
```

### Only One Model

```HTML
<td colspan="2">
<img data="FE140" src="/images/promos/01-14-18-PG2_N_06.jpg" width="513"height="352" alt="">
</td>
```