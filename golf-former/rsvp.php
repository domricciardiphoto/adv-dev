
<!DOCTYPE html>
<html>

<head>
    <title>P.C. Richard &amp; Son Foundation | RSVP</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.5, user-scalable=yes">
    <link rel="icon" type="image/x-icon" href="https://www.pcrichard.com/images/favicon.ico">
    <link href="css/golf-css-2019.css" rel="stylesheet" type="text/css" />
    <link href="css/golf-rsvp.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="js/rsvp.js?v=14"></script>
    <script type="text/javascript" src="js/common.js"></script>

<style type="text/css">

fieldset input {
    min-height:25px;
}


fieldset input[type="text"] {
    min-height: 25px;
    min-width: 80%;
    margin-bottom:10px;
    max-width:400px;
}

fieldset input[type="radio"] {
margin-top:10px;
margin-bottom:10px;
}
 
.attending_title {
    width: 20%;
    float: left;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 80%;
}


fieldset {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
}

#submitRSVP {
   widht:50%;
   margin-left:25%;
   float:right

}



@media (max-width: 767px) {
    fieldset {
    width: 94%;
    margin-left: auto;
    margin-right: auto;
}



.attending_title {
    width: 100%;
    float: left;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 0%;
}


#submitRSVP {
    width:100%;
}


}

</style>

</head>

<body>

<?php include './includes/header.php'; ?>




    <div class="content-wrapper">


        <div class="mobile_menu">

            <a title="Home" href="home.php"><div class="mobile_menu_item">Home</div></a>
            <a title="Charities" href="charities.php"><div class="mobile_menu_item">Charities</div></a>
            <a title="RSVP" href="rsvp.php"><div class="mobile_menu_item">RSVP</div></a>
            <a title="Agenda" href="agenda.php"><div class="mobile_menu_item">Agenda</div></a>
            <a title="Hotels" href="accomodations.php"><div class="mobile_menu_item">Hotels</div></a>
            <a title="Event Partners" href="partners.php"><div class="mobile_menu_item">Event Partners</div></a>
            <a title="Contact Us" href="contact.php"><div class="mobile_menu_item">Contact Us</div></a>


        </div>

        <div class="pagetitle-d">RSVP</div>

        <div class="content">

<div class="kindly">

    Please Kindly Respond<br>
    by<br>
    August 1st, 2019


</div>


<div class="including">

<ul>
<li>Your $25,000 donation includes the following, for four participants:</li>
<li>Golf and accommodations</li>
<li>Two nights local hotel accommodations.</li>
<li>An elegant dinner at the Long Island Aquarium, where the walls are alive with gorgeous tropical fish tanks and afer dinner port, cocktails and cigars on the edge of the peconic River</li>
<li>A day of golf at the exclusive Sebonack Golf Course, including breakfast, use of the facilities, on course refreshments, cocktails, hors d'oeuvres and awards</li>
<li>Transportation to and from Sebonack Golf Course on Tuesday morning and evening</li>
<li>Exclusive Premium P.C. Richard &amp; Son Foundation Gift bags</li>
<li> * Please contact Tara O'Rourke for an invoice: <a href="mailto:tara.orourke@pcrichard.com?subject=Golf%20Outing">tara.orourke@pcrichard.com</a>.</li>
</ul>

</div>




        <div id="content2">
 <form name=rsvpForm id=rsvpForm action="#" style="margin:0">
 
 <div id="rsvpInitial">
  <p style="text-align:center;">Will you or your Company be attending?</p>
  <p style="text-align:center;">
  <input id="rsvp1" class="button rsvpButton" type=button name=attending value="Delightfully Attending!" onclick="handleAttending('Yes');"><br><br>
  <input id="rsvp2" class="button rsvpButton" type=button name=attending value="Unable to Attend" onclick="handleAttending('No');"></p>
 
 </div>
 
 <div id="attendingInformation" >

 <div class="attending_title" >
     Enter your information below
     </div>


<div class="main_content">


<fieldset name="groupPlayer1">
             <legend style="font-weight:bold;">Player 1</legend>
               <table cellpadding=2 cellspacing=0 border=0 width="100%">
                <tr><td colspan=2>Check the evenings in which you will require hotel accommodations</td></tr>
                <?php outputDates("hotelGolfer1", $data["hotelGolfer1Day1"], $data["hotelGolfer1Day2"]); ?>
                <tr><td colspan=2>&nbsp;</td></tr>
                <?php outputText("First Name", "firstName1", $data["firstName1"], 25); ?>
                <?php outputText("Last Name", "lastName1", $data["lastName1"], 25); ?>
                <?php outputText("Title", "title1", $data["title1"], 25); ?>
                <?php outputText("Company", "company", $data["company"], 50); ?>
                <?php outputText("Address", "address", $data["address"], 50); ?>
                <?php outputText("City", "city", $data["city"], 30); ?>
                <?php outputStates("State", "state", $data["state"]); ?>
                <?php outputText("Zip Code", "zip", $data["zip"], 5, 5); ?>
                <?php outputText("Email", "email1", $data["email1"], 50); ?>
                <?php outputText("USGA Handicap", "handicap1", $data["handicap1"], 4, 4); ?>
                <?php outputShirtSize("Golf Shirt Size", "shirtSize1", $data["shirtSize1"]); ?>
                <?php outputClubRental("Club Rental", "clubRental1", $data["clubRental1"]); ?>
               </table>
           </fieldset>



 


     

 	 <!--  FORM DATA -->     
     <table cellpadding=0 cellspacing=0 border=0 width="100%">
      <tr>
    
       <div class="attending_title" >
Enter the information below for the remaining 3 players in your foursome
     </div>


       <td style="vertical-align:top;" width="2%"></td>
       
       <!--  ADDITIONAL CONTACTS  -->
       <td style="vertical-align:top;" width="100%">
           <?
            for ($i = 2; $i <=4; $i++) {
                if ($i>2){
                    echo "<br>\r\n";
                }
           ?>
           <fieldset name="groupPlayer <?php echo $i?>">
            <legend style="font-weight:bold;">Player <?php echo $i?></legend>
             <table cellpadding=2 cellspacing=0 border=0 width="100%">
                <tr><td colspan=2>Check the evenings in which you will require hotel accommodations</td></tr>
                <?php outputDates("hotelGolfer$i", $data["hotelGolfer" . $i . "Day1"], $data["hotelGolfer" . $i . "Day2"]); ?>
                <tr><td colspan=2>&nbsp;</td></tr>
                <?php outputText("First Name", "firstName$i", $data["firstName$i"], 25); ?>
                <?php outputText("Last Name", "lastName$i", $data["lastName$i"], 25); ?>
                <?php outputText("Title", "title$i", $data["title$i"], 25); ?>
            	<?php outputText("Email", "email$i", $data["email$i"], 50); ?>
            	<?php outputText("USGA Handicap", "handicap$i", $data["handicap$i"], 4, 4); ?>
            	<?php outputShirtSize("Golf Shirt Size", "shirtSize$i", $data["shirtSize$i"]); ?>
            	<?php outputClubRental("Club Rental", "clubRental$i", $data["clubRental$i"]); ?>
            	<tr><td colspan=2 style="text-align:right;"><input type=button class="resetAdditionalGolfer" golferNumber="<?php echo $i ?>" value="Clear"></td></tr>
             </table>
           </fieldset>
           <?php } ?>  
        </td>
       </tr>
       <tr><td colspan=3>&nbsp;</td></tr>
       <tr><td colspan=3 id="message" style="text-align:center">&nbsp;</td></tr>
       <?php if ($data["company"]!=""){ ?>
         <tr><td colspan=3 class=buttonWrapper><input class=button type=button id=submitRSVP value="Update RSVP"><br><input class=button type=button id=cancelRSVP value="Cancel RSVP" style="font-style:italic;font-size:9pt;margin-top:6px;"></td></tr>
       <?php }else{ ?>
         <tr><td colspan=3 class=buttonWrapper><input class=button type=button id=submitRSVP value="Save RSVP"></td></tr>
       <?php } ?>
       <tr><td colspan=3>&nbsp;</td></tr>
     </table>
 </div>
 <input type=hidden name=rsvp value="">
 </form>
</div>
          
        </div>
    </div>
    <?php include './includes/footer.php'; ?>
</body>

</html>


<script src="js/golf-js-2019.js"></script>


<?


/********************************************************************/
function formCheckbox($compare1, $compare2){
    if ($compare1==$compare2){
        return 'checked="checked"';
    }else{
        return '';
    }
}

/********************************************************************/
function outputText($label, $name, $value, $maxlength=0, $size=0){
    $htmlValue=htmlentities($value);
    
    if ($maxlength>0){
        $htmlMaxlength=' maxlength="' . $maxlength . '"';
    }
    
    if ($size>0){
        $htmlSize=' size="' . $size . '"';
    }
    
  echo <<<OUTPUT
    <tr>
     <td class="label">$label:</td>
     <td><input $htmlSize $htmlMaxlength type=text name="$name" id="$name" value="$htmlValue"></td>
    </tr>
OUTPUT;
}

/********************************************************************/
function outputDates($name, $value1, $value2){
    $checked1=formCheckbox("Y", $value1);
    $checked2=formCheckbox("Y", $value2);
    $nameDay1=$name . "Day1";
    $nameDay2=$name . "Day2";
    
    echo <<<OUTPUT
     <tr>
      <td colspan=2><input type=checkbox name="$nameDay1" $checked1 value="Y" title="Monday, May 23">Monday, May 23&nbsp;&nbsp;<input type=checkbox name="$nameDay2" $checked2 value="Y" title="Tuesday, May 24">Tuesday, May 24</td>
     </tr>
OUTPUT;
}
 
/********************************************************************/
function outputStates($label, $name, $value){
    echo <<<OUTPUT
    <tr>
     <td class="label">$label:</td>
     <td><select name="$name" id="$name">
      <option value="">&lt; Select &gt;</option>
OUTPUT;

    //state definition
    $states["AL"]="Alabama";
    $states["AK"]="Alaska";
    $states["AZ"]="Arizona";
    $states["AR"]="Arkansas";
    $states["CA"]="California";
    $states["CO"]="Colorado";
    $states["CT"]="Connecticut";
    $states["DE"]="Delaware";
    $states["DC"]="District Of Columbia";
    $states["FL"]="Florida";
    $states["GA"]="Georgia";
    $states["HI"]="Hawaii";
    $states["ID"]="Idaho";
    $states["IL"]="Illinois";
    $states["IN"]="Indiana";
    $states["IA"]="Iowa";
    $states["KS"]="Kansas";
    $states["KY"]="Kentucky";
    $states["LA"]="Louisiana";
    $states["ME"]="Maine";
    $states["MD"]="Maryland";
    $states["MA"]="Massachusetts";
    $states["MI"]="Michigan";
    $states["MN"]="Minnesota";
    $states["MS"]="Mississippi";
    $states["MO"]="Missouri";
    $states["MT"]="Montana";
    $states["NE"]="Nebraska";
    $states["NV"]="Nevada";
    $states["NH"]="New Hampshire";
    $states["NJ"]="New Jersey";
    $states["NM"]="New Mexico";
    $states["NY"]="New York";
    $states["NC"]="North Carolina";
    $states["ND"]="North Dakota";
    $states["OH"]="Ohio";
    $states["OK"]="Oklahoma";
    $states["OR"]="Oregon";
    $states["PA"]="Pennsylvania";
    $states["RI"]="Rhode Island";
    $states["SC"]="South Carolina";
    $states["SD"]="South Dakota";
    $states["TN"]="Tennessee";
    $states["TX"]="Texas";
    $states["UT"]="Utah";
    $states["VT"]="Vermont";
    $states["VA"]="Virginia";
    $states["WA"]="Washington";
    $states["WV"]="West Virginia";
    $states["WI"]="Wisconsin";
    $states["WY"]="Wyoming";
    
    foreach ($states as $key => $desc) {
        if ($key==$value){
            $selected="selected";
        }else{
            $selected="";
        }
        
        echo "<option $selected value=\"$key\">$desc</option>\r\n";
    }
}

/********************************************************************/
function outputShirtSize($label, $name, $value){
    $selectSM=formCheckbox("SM", $value);
    $selectMD=formCheckbox("MD", $value);
    $selectLG=formCheckbox("LG", $value);
    $selectXL=formCheckbox("XL", $value);
    $select2XL=formCheckbox("2XL", $value);

    echo <<<OUTPUT
    <tr>
     <td class="label">$label:</td>
     <td><input $selectSM type=radio name="$name" value="SM" title="SM"> SM 
         <input $selectMD type=radio name="$name" value="MD" title="MD"> MD
         <input $selectLG type=radio name="$name" value="LG" title="LG"> LG
         <input $selectXL type=radio name="$name" value="XL" title="XL"> XL
         <input $select2XL type=radio name="$name" value=2XL" title="2XL"> 2XL
     </td>
    </tr>
OUTPUT;
}
    
/********************************************************************/
function outputClubRental($label, $name, $value){
    $selectNone=formCheckbox("NONE", $value);
    $selectLeft=formCheckbox("LEFT", $value);
    $selectRight=formCheckbox("RIGHT", $value);

    echo <<<OUTPUT
    <tr>
     <td style="vertical-align:top;" class="label">$label:</td>
     <td><input $selectNone type=radio name="$name" value="NONE" title="No rental required"> No rental required<br>
         <input $selectLeft type=radio name="$name" value="LEFT" title="Left Handed clubs"> Left Handed clubs<br>
         <input $selectRight type=radio name="$name" value="RIGHT" title="Right Handed clubs"> Right Handed clubs
     </td>
    </tr>
OUTPUT;
}

/***************************************************/
function handlePage(){
    if ($_SERVER["REQUEST_METHOD"]=="GET"){
        return getRSVP();
    }else{
        saveReservation();
    }
}

/***************************************************/
function getRSVP(){
    $result=loadPCRRESTData('POST',
        'CGRSGO',
        array('email'=>getLoggedInUser(),
            'action'=>'GET',
            'eventCode'=>EVENT_CODE,
            'username'=>getWebServiceUsername(),
            'password'=>getWebServicePassword()
        )
        );

    $returnData=json_decode($result, true);
    if ($returnData===false){
        return array();
    }

    return $returnData;
}

/***************************************************/
function saveReservation(){
    $result=loadPCRRESTData('POST',
        'CGRSGO',
        array('email'=>getLoggedInUser(),
            'action'=>'SAVE',
            'eventCode'=>EVENT_CODE,
            'username'=>getWebServiceUsername(),
            'password'=>getWebServicePassword(),
            'ipAddress'=>$_SERVER["REMOTE_ADDR"],
            $_POST
        )
        );
    doJSONHeader();
    echo $result;
    exit;
}
?>





