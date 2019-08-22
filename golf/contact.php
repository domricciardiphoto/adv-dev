<!DOCTYPE html>
<html>

<head>
    <title>P.C. Richard &amp; Son Foundation | Contact</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.5, user-scalable=yes">
    <link rel="icon" type="image/x-icon" href="https://www.pcrichard.com/images/favicon.ico">
    <link href="css/golf-css-2019.css" rel="stylesheet" type="text/css" />
    <link href="css/golf-contact.css" rel="stylesheet" type="text/css" />
</head>

<body>
<?php include './includes/header.php'; ?>
    <div class="content-wrapper">


        <div class="mobile_menu">

            <a title="Home" href="home.php">
                <div class="mobile_menu_item">Home</div>
            </a>
            <a title="Charities" href="charities.php">
                <div class="mobile_menu_item">Charities</div>
            </a>
            <a title="RSVP" href="rsvp.php">
                <div class="mobile_menu_item">RSVP</div>
            </a>
            <a title="Agenda" href="agenda.php">
                <div class="mobile_menu_item">Agenda</div>
            </a>
            <a title="Hotels" href="accomodations.php">
                <div class="mobile_menu_item">Hotels</div>
            </a>
            <a title="Event Partners" href="partners.php">
                <div class="mobile_menu_item">Event Partners</div>
            </a>
            <a title="Contact Us" href="contact.php">
                <div class="mobile_menu_item">Contact Us</div>
            </a>

        </div>


        <div class="pagetitle-d">Contact Us</div>

        <div class="content">

            <div class="email_100">
                <div class="email_50">
                    <div class="contact_title">Marketing & Promotions Manager</div>
                    <div class="contact_name">Tara O'Rourke</div>
                    <div class="contact_contact">
                        <a href="mailto:Tara.ORourke@pcrichard.com">
                            <div class="contact_email">Tara.ORourke@pcrichard.com</div>
                        </a>
                        <a href="tel:1-631-843-4475">
                            <div class="contact_phone">631.843.4475</div>
                        </a>
                    </div>
                </div>
                <div class="email_50">
                    <div class="contact_title">Executive Assistant to Mr. Gregg Richard</div>
                    <div class="contact_name">Louiseann Pietrowicz</div>
                    <div class="contact_contact">
                        <a href="mailto:louiseann@pcrichard.com">
                            <div class="contact_email">louiseann@pcrichard.com</div>
                        </a>
                        <a href="tel:1-631-843-4305">
                            <div class="contact_phone">631.843.4305</div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="email_1002">
                <div class="contact_form_title">We'd love to hear from you.</div>






                <form action="#" method="POST">
                    <input type="text" name="name" placeholder="Name">
                    <input type="text" name="email" placeholder="Email">
                    <textarea name="message" rows="6" cols="25"
                        placeholder="Ask us any questions regarding your upcoming trip or let us know of any changes or cancellations."></textarea><br />
                    <input type="submit" value="Send">
                </form>



            </div>

        </div>
    </div>
    <?php include './includes/footer.php'; ?>



</body>

</html>


<script src="js/golf-js-2019.js"></script>


<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "Tara.ORourke@pcrichard.com";
$subject = "WEB GOLF CONTACT FORM";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");

?>