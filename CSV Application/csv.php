<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<link rel="apple-touch-icon" sizes="57x57" href="./images/fav/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="./images/fav/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="./images/fav/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="./images/fav/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="./images/fav/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="./images/fav/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="./images/fav/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="./images/fav/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="./images/fav/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192" href="./images/fav/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="./images/fav/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="./images/fav/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="./images/fav/favicon-16x16.png">
<link rel="manifest" href="/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">
<title>Product Audit: </title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
<link href="./css/csv_audit2018.css" type="text/css" rel="stylesheet">
</head>


<body>
    <div class="domcel"></div>
    <div id="export_to_excel"></div>
    <iframe id="txtArea1"></iframe>
    <div class="headerim">
        <span></span>
    </div>
 <div class="top_buttons">
 <button id="close_dual" onclick="close_dual()" style="margin-top: 40px; display:none">Single Workbook</button>

 </div>
   

    <div class="buttons" style="zoom:0.8">
        <span id="smalltext"></span>
        <br>
        <div class="intro">Hide and Show Retailers
        </div>
        <form>
            <div id="US" class="live_button" clicked="notclicked">PCRichard.com</div>
            <div id="vendorlist">
                <br>
            </div>
            <div style="width:100%; float:left">
                <div class="internal_div">
                    <hr>
                    <div style="width:100%; float:left">Brand Search</div>
                    <select id="select_brand" class="select_brand">
                        <option value="All">All</option>

                    </select>
                </div>
                <div class="internal_div">
                    <hr>
                    <div style="width:100%; float:left">Product Search</div>
                    <form>
                        <input type="text"  value="55H9DPLUS" name="lname" id="lname">
                        <br>
                        <div id="product_search" class="live_button2" clicked="clicked">Submit</div>
                    </form>
                    <div class="close_section">
                        <hr>
                        <div class="intro">Close Individual Retailers</div>
                    </div>
                    <div style="width:100%; float:left">
                        <hr>
                    </div>
                </div>
                <div class="section100">
                    <div class="section50">
                        <div id="clearallvendors" class="live_button2">Clear All Retailers</div>
                    </div>
                    <div class="section50">
                        <div id="show_all" class="live_button2">Show All Retailers</div>
                    </div>
                </div>

                <div class="section100">
                    <div class="section50">
                        <div id="ony_pcr_vendor" class="live_button2">Only P.C. Richard &amp; Son</div>
                    </div>
                    <div class="section50">
                        <div id="help" class="live_button2">Help</div>
                    </div>
                </div>
            </div>
            <div id="buttons_container" style="width:100%; float:left">
                
            <hr/>
                 Tools and View Options<br/><br/>
                 <button id="btnExport" onclick="fnExcelReport()">Export to Excel</button>
                 <button id="workbenches" onclick="workbenches()">Dual Workbooks</button>
                 
                 <button id="feature_request" className="top_buttons" onclick="feature_request()">Feature Request</button>
                 <br/><br/>
                
               
                
                
            </div>
        
        </form>
    </div>
    <div class="container">
        <div class="table-responsive">
            <div id="employee_table">
            </div>
        </div>
    </div>






<script type="text/babel">


// const Buttons = () => (
  //               <div id="intro">
    //             <hr/>
      //           Tools and View Options<br/><br/>
        //         <button id="btnExport" onclick={this.fnExcelReport}>Export to Excel</button>
          //       <button id="workbenches" onclick="workbenches()">Dual Workbooks</button>
            //     <button id="feature_request" className="top_buttons" onclick="feature_request()">Feature Request</button>
              //   <br/><br/>
            // </div>
            // )

       // ReactDOM.render(
       // <Buttons/>,
        // document.getElementById('buttons_container') 
       // );


</script>



</body>
</html>



<script type="text/javascript" src="./js/jquery.simplemodal.1.4.4.min.js"></script>
<script type="text/javascript" src="./js/csv_audit2018.js"></script>