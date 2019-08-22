<!DOCTYPE html>
<html>

<head>
    <title>P.C. Richard &amp; Son Foundation | Login</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.5, user-scalable=yes">
    <link rel="icon" type="image/x-icon" href="https://www.pcrichard.com/images/favicon.ico">
    <link href="css/golf-css-2019.css" rel="stylesheet" type="text/css" />

    <style type="text/css">
        .loginTable {
            color: #fff;
        }

        .logonField {
            width: 60%;
            min-height: 25px;
            float: left;
            padding-left: 5%;
            margin-left: 5%;
        }



        .loginTable {
            width: 50%;
            max-width: 400px;
            margin-top: 30px;
        }

        .label {
            text-align: right;
        }

        input[type=button],
        input[type=submit],
        input[type=reset] {
            padding-top: 0px;
            text-decoration: none;
            cursor: pointer;
            width: 150px !important;
            font-size: 1em;
            padding: 20px;
            line-height: 20px;
            margin-top: 10px;
        }


        @media (max-width: 767px) {
            .loginTable {
width:100%
            }

            input[type=button], input[type=submit], input[type=reset] {
    padding-top: 0px;
    text-decoration: none;
    cursor: pointer;
    width: 150px !important;
    font-size: 1em;
    padding: 10px;
    line-height: 20px;
    margin-top: 10px;
    background-color: #fff;
    margin-bottom: 20px;
}

.logonField {
    width: 80%;
    min-height: 25px;
    float: left;
    padding-left: 5%;
    margin-left: 5%;
}

.top_promo {
    width: 100%;
    min-height: 165px;
    background-color: #000;
    text-align: center;
    padding-top: 20px;
    background-size: cover;
    object-fit: cover;
    background-position: center;
}


        }
    </style>


</head>

<body>
    <div class="hambr" data="0"></div>

    <div class="header">

        <div class="footer_content">
            <div class="logo">
                <img src="./images/Straight.png" title="P.C. Richard and Son Foundation" />
            </div>
            <div class="menu_item">
                <a title="Contact Us" href="contact.php">Contact Us</a>
            </div>

            <div class="menu_item">
                <a title="Home" href="home.php">Home</a>
            </div>

        </div>

    </div>
    <div class="content-wrapper">


        <div class="mobile_menu">

            <a title="Home" href="home.php">
                <div class="mobile_menu_item">Home</div>
            </a>
            <a title="Contact Us" href="contact.php">
                <div class="mobile_menu_item">Contact Us</div>
            </a>


        </div>


        <div class="top_promo">

            <form name="loginForm" id="loginForm" method="post" action="#" style="margin:0px;">
                <table class="loginTable" align="center" cellpadding="0" cellspacing="4" border="0">
                    <tbody>
                        <tr>
                            <td class="label">Email Address:</td>
                            <td><input class="logonField" type="text" name="email" id="email" size="25" maxlength="50">
                            </td>
                        </tr>
                        <tr>
                            <td class="label">Password:</td>
                            <td><input class="logonField" type="password" name="password" id="password" size="25"
                                    maxlength="50"></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="error" id="error">&nbsp;</td>
                        </tr>
                        <tr>
                            <td colspan="2" class="buttonWrapper"><input class="button" type="button" id="submit"
                                    name="btnLogin" value="Login"></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>




        <div class="content">

            <div class="homepage_text">
                <h2>Welcome to the 2019 P.C. RICHARD FOUNDATION CHARITY GOLF CLASSIC...</h2> <br>
                Since 1994, the P.C. Richard Foundation has provided assistance to numerous charities and organizations
                in need throughout the tri-state area including, Lt. Michael P. Murphy Navy Seal Museum, Long Island
                State Veterans Home, Marty Lyons Foundation, Boys and Girls Clubs of America, Saint Jude Children's
                Research Hospital, Stiller Foundation, Newsday's Charities and thousands of local charities. <br><br>
                We are committed to the communities and families within in our reach and it is our intent that the
                proceeds from this event be used for the same, and/or similar causes in the future.

            </div>
        </div>
    </div>
    <div class="footer">


        <div class="footer_content">
            <div class="footer_item">
                <img src="./images/PCRFoundation_2019.png" title="P.C. Richard and Son Foundation" />
            </div>
            <div class="footer_item">
                <a title="Home" href="index.php">Home</a>
            </div>

            <div class="footer_item">
                <a title="Contact Us" href="contact.php">Contact Us</a>
            </div>
            <div class="footer_item copytext">
                &copy; P.C. Richard Foundation Charity Golf Classic 2019
            </div>
        </div>

    </div>
</body>

</html>


<script src="js/golf-js-2019.js"></script>