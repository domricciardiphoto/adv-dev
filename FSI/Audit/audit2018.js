var pagesource = '<style>#pg1,#pg3,#pg4{margin-left:auto;margin-right:auto;font-size:12px}#pg3,#pg4{float:left}#pg1,.button{text-align:center}#counts,#pg1,#pg3{max-height:850px;overflow:auto}#counts,.ilink,a{color:#ccc}html{background-color:#666;color:#999}#pg0{display:none}#pg1,#pg3{background-color:#350000;min-height:500px;padding:10px 10px 10px 15px;line-height:30px;-webkit-border-radius:5px 5px 5px 30px;border-radius:5px 5px 5px 30px;-webkit-box-shadow:inset 2px 2px 2px 2px #300;box-shadow:inset 2px 2px 2px 2px #300}#pg4,.button{background-color:#333;padding:10px}#pg3{background-color:#333;width:60%}#pg4{max-width:1000px;line-height:37px}#pg1{width:38%;margin-right:2%;float:left}#pg5,.promo_box_940{width:100%;float:left}#pg5{margin-top:10px}.promo_box_50{width:50%;float:left}.promo_box_33{width:33%;float:left;min-height:420px}.promo_box_33 img,.promo_box_50 img,.promo_box_940 img{width:100%}.asset,.fsi,.title_im2{margin-left:auto;margin-right:auto;width:1000px}.title_im2{margin-bottom:10px}.audit_title{font-size:20px;max-width:50%}.button{olor:#ccc;font-size:12px;max-width:200px}.asset{position:relative;min-height:50px}.fsi{background-image:none;display:block;olor:#ccc;float:inherit}.gb{font-size:16px}.ilink{cursor:pointer}a{text-decoration:none}#counts{background-color:#350000;min-height:100px;padding:10px 10px 10px 15px;line-height:30px;font-size:12px;width:38%;float:left;margin-right:2%}#pg4{width:50%!important;min-width:60%!important;min-height:170px!important}.title_im{max-width:50%!important;width:40%!important;color:#333;float:left;margin:10px auto}.button{float:right;line-height:20px!important;min-height:30px!important;color:#ccc!important;width:220px!important;min-width:200px}#breaker{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee;float:left;width:100%}</style><div class="asset"><div class="title_im audit_title" style="float:left"><span id="controlnum"></span><br><span id="joke" style="font-size:10px">Today the Digital FSI... Tomorow the world!</span></div><a href="http://10.4.6.20/webtest/control.php"><div class="title_im audit_title button" style="float:right">Back To Testing Server</div></a></div><div class="title_im2"><hr>These are the Model Numbers</div><div class="fsi"><div class="internalflyer" id="pg1"><span class="gb">Loading Models!<hr></span></div><div class="internalflyer" id="pg0"></div><div class="internalflyer" id="pg3"><span class="gb">Loading Links!<hr></span></div><hr id="breaker"><div class="title_im">These are the common link counts</div><div class="title_im">If there was a video its here</div><div id="counts"><div class="history">1) History link was used <span id="history">0</span> times</div><div class="installation">2) Installation link was used <span id="installation">0</span> times</div><div class="credit">3) Credit Card link was used <span id="credit">0</span> times</div><div class="Shipping">4) Shipping link was used <span id="Shipping">0</span> times</div><div class="Instorepickup">5) In Store Pickup link was used <span id="Instorepickup">0</span> times</div></div><div class="internalflyer" id="pg4"><span class="gb">Loading Videos!<hr></span></div><div class="internalflyer" id="pg5"></div></div>';
var control_num = 'R.T.S. Audit 3.0.2';
var joke = 'Everything is Clickable Go for it!!';
var myaudit;
var myaudit0 = 'FE140';
var myaudit3;
var browselite;
var browselite1;
var ilinkbr;
var word4 = '0';
var word3 = '0';
var word2 = '0';
var word1 = '0';
var word = '0';
var regex4 = 0;
var regex3 = 0;
var regex2 = 0;
var regex1 = 0;
var regex = 0;
var modellink = '';
var modellink2 = '';
var pg0 = content_page0 + content_page1 + content_page2 + content_page3 + content_page4 +
    content_page5 + content_page6 + content_page7 + content_page8 + content_page9 + content_page10 +
    content_page11 + content_page12 + content_page13 + content_page14 + content_page15 +
    content_page16 + content_page17 + content_page18 + content_page19 + content_page20 +
    content_page21 + content_page22 + content_page23 + content_page24 + content_page25 +
    content_page26 + content_page27 + content_page28 + content_page29 + content_page30 +
    content_page31 + content_page32 + content_page33 + content_page34 + content_page35 +
    content_page36 + content_page37 + content_page38 + content_page39 + content_page40;

var word = '/our-company/history';
var word2 = '/customer-service/pcr-credit-card';
var word3 = '/help-center/shipping-info';
var word4 = '/help-center/in-store-pickup';
var word1 = '/help-center/installation-info';


$('.center').append(pagesource);


function linkloaderFX(t) {
    $(t).each(function () {
        myaudit0 = $(this).attr('data');
        if (myaudit0.indexOf('/browse?Ntt=') != -1) {
            browselite = myaudit0.replace('/browse?Ntt=', '').replace(/\+/g, ' ');
            browselite1 = '<a target="_blank" href="https://www.pcrichard.com/browse?Ntt=' + browselite + '">' + browselite.toUpperCase() + '</a>' + '<br>';
            $('#pg1').append(browselite1);
        } else {
            $('#pg3').append('<a target="_blank" href="https://www.pcrichard.com' + myaudit0 + '">' + myaudit0 + '</a>' + '<br/>');
        }
    });
    $('.gb').fadeOut();
}

function livefunc(i) {
    $(i).each(function () {
        myaudit = $(this).attr('data').replace(
            '/browse/_/N-d3zn94?Ns=sku.sortPrice%7C0&Ntt=', '').replace(
            '&Ntx=mode+matchany', '').replace('/browse?Ntt=', '').replace(
            '&nofollow=1', '').replace('/browse/_/N-d3zn94Z1tdu4y?Ns=sku.sortPrice%7C0&Ntt=', '').replace(
            '/browse/_/N-d3zn94Z1metzg2?Ntt=', '').replace('/browse/_/N-d3zn94Z1io1vrw?Ntt=', '').replace(
            '/browse/_/N-d3zn94Z1tdu4y?Ntt=', '').replace(
            '/browse/_/N-d3zn94Z1metzg2?Ns=sku.sortPrice%7C0&Ntt=', '').replace(
            '/browse/_/N-d3zn94?Ns=product.displayName%7C0&Ntt=', '').replace(
            '/browse/_/N-d3zn94Z19db2lo?Ns=sku.sortPrice%7C0&Ntt=', '').replace(
            '/browse/_/N-d3zn94?Ns=product.displayName%7C1&Ntt=', '').replace(
            /\+/g, '<br/>').toUpperCase();
        $('#pg1').append('<span class="ilink">' + myaudit + '</span>' + '<br/>');
    });
}


function livecounts() {
    var regex = new RegExp(word, "gi");
    $('#history').text($('body').text().match(regex).length);
    var regex2 = new RegExp(word2, "gi");
    $('#credit').text($('body').text().match(regex2).length);
    var regex3 = new RegExp(word3, "gi");
    $('#Shipping').text($('body').text().match(regex3).length);
    var regex4 = new RegExp(word4, "gi");
    $('#Instorepickup').text($('body').text().match(regex4).length);
    var regex1 = new RegExp(word1, "gi");
    $('#installation').text($('body').text().match(regex1).length);
}


$(document).ready(function () {
    $('#pg0').html(pg0);
    $('#controlnum').text(control_num);
    $('#joke').text(joke);
    livecounts();
    livefunc(".promo_box");
    linkloaderFX('.promo_box_66');
    linkloaderFX('.promo_box_33');
    linkloaderFX('.promo_box_50');
    linkloaderFX('.promo_box_940');

});


$(window).load(function () {

    $('span.ilink').click(function () {
        modellink = $(this).html().replace('/<br>/gi', '+');
        modellink2 = 'https://www.pcrichard.com/browse?Ntt=' + modellink.replace(/<br>/gi, '+');
        window.open(modellink2, '_blank');
    });


    $('.center img').each(function () {
        img1 = $(this).attr('src');
        $(this).attr('src', 'http://www.pcrichard.com' + img1);
        $('#pg5').append($(this).parent('div'));
    });

});