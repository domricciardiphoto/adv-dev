var version = 'Verison 1.0 Release Canidate  &nbsp; &nbsp;<br>';
var smalltxt = 'BY: Dominick Ricciardi &nbsp; &nbsp;';
var csv_destination = 'http://10.4.6.20/webtest/audit/processed_files/All%20Products%20With%20Variance%20Linear%20Report%20(02-27-2018%2002-01%20PM)_Ranges.csv';
var getsel = '';
var gotoproduct = '';
var seen = '';
var selectproduct = '0';
var showallvendors = '0';
var clearallvendors = '0';
var onlypcrvendor = '0';
var brandsearch = '0';
var selectedvendor = '0';
var scroll_to_product = 'nothing yet';
var whatsiteisit = '';
var a = 0;
var secondary_book = 0;
var change_cost = '';
var file = 'cheese';
var table_data = '<table id="headerTable" class="table table-bordered table-striped">';
helpfile = '<div class="close_help">X</div>' + 'Welcome to Domcel!<br><br>1) When The Spreedsheet loads its going to show ALL the Retailers and Vendors<br><br>2) On PCRICHARD records--<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To Modify the price, type in the new price and hit submit.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The original price will be displayed in the same box along with the modified price.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The GMD info will reflect the total PROFIT after modifing the price<br><br>3) Clicking on a model number and it will go to the website of the vendor selling using its search page! (List is in progress)<br><br>4) To Print your modified file or just the record. right click on your screen select print follow printing prompt. It will print what is CURRENTLY BEING DISPLAYED<br><br>5) To export the spreadsheet to an excel file: Click "Export to Excel" Button, Follow the prompt to either name your file or just use todays date and the file will be in your downloads folder.<br> Your Excel file will have what was DISPLAYED ON YOUR SCREEN when you exported. Open up your new excel file in excel or worksheet application<br><br>6) To see the raw data being brought in, click the "Dual Workbook" Button and the original csv file table will be displayed next to your workbook.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hover over a row in the Raw File and it will expand.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To go back to full view click the Single Workbook button.<br><br> The function list keeps growing! Stay tuned to whats coming!';
var todaysdate = new Date().toLocaleString().split(',')[0];
var todaysdate2 = todaysdate.toString().replace(/\//g, '-');
$('title').append(new Date().toLocaleString().split(',')[0]);
$('.headerim span').html(version + smalltxt);


//---------------------------------------------------------------------------------------------------------

var xport = {

    _fallbacktoCSV: true,
    toXLS: function (tableId, filename) {
        this._filename = (typeof filename == 'undefined') ? tableId : filename;

        //var ieVersion = this._getMsieVersion();
        //Fallback to CSV for IE & Edge
        if ((this._getMsieVersion() || this._isFirefox()) && this._fallbacktoCSV) {
            return this.toCSV(tableId);
        } else if (this._getMsieVersion() || this._isFirefox()) {
            alert("Not supported browser");
        }

        //Other Browser can download xls
        var htmltable = document.getElementById(tableId);
        var html = htmltable.outerHTML;

        this._downloadAnchor("data:application/vnd.ms-excel" + encodeURIComponent(html), 'xls');
    },
    toCSV: function (tableId, filename) {
        this._filename = (typeof filename === 'undefined') ? tableId : filename;
        // Generate our CSV string from out HTML Table
        var csv = this._tableToCSV(document.getElementById(tableId));
        // Create a CSV Blob
        var blob = new Blob([csv], {
            type: "text/csv"
        });

        // Determine which approach to take for the download
        if (navigator.msSaveOrOpenBlob) {
            // Works for Internet Explorer and Microsoft Edge
            navigator.msSaveOrOpenBlob(blob, this._filename + ".csv");
        } else {
            this._downloadAnchor(URL.createObjectURL(blob), 'csv');
        }
    },
    _getMsieVersion: function () {
        var ua = window.navigator.userAgent;

        var msie = ua.indexOf("MSIE ");
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
        }

        var trident = ua.indexOf("Trident/");
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf("rv:");
            return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
        }

        var edge = ua.indexOf("Edge/");
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
        }

        // other browser
        return false;
    },
    _isFirefox: function () {
        if (navigator.userAgent.indexOf("Firefox") > 0) {
            return 1;
        }

        return 0;
    },
    _downloadAnchor: function (content, ext) {
        var anchor = document.createElement("a");
        anchor.style = "display:none !important";
        anchor.id = "downloadanchor";
        document.body.appendChild(anchor);

        // If the [download] attribute is supported, try to use it

        if ("download" in anchor) {
            anchor.download = this._filename + "." + ext;
        }
        anchor.href = content;
        anchor.click();
        anchor.remove();
    },
    _tableToCSV: function (table) {
        // We'll be co-opting `slice` to create arrays
        var slice = Array.prototype.slice;

        return slice
            .call(table.rows)
            .map(function (row) {
                return slice
                    .call(row.cells)
                    .map(function (cell) {
                        return '"t"'.replace("t", cell.textContent);
                    })
                    .join(",");
            })
            .join("\r\n");
    }
};


//------------------------------------Save To Excel--------------------------------------------------------------------------------------

function fnExcelReport() {
    $('#export_to_excel').empty();
    $('tr:hidden').addClass('no_excel');
    $('#headerTable').clone().appendTo("#export_to_excel");
    var name_that_file = prompt("Name Your Excel Download");
    if (name_that_file == null || name_that_file == "") {
        name_that_file2 = name_that_file;
    } else {
        name_that_file2 = '-' + name_that_file;
    }
    todaysdate2 = name_that_file + '_' + todaysdate.toString().replace(/\//g, '-');
    $('#export_to_excel').children('#headerTable').attr('id', todaysdate2);
    $('#' + todaysdate2 + ' tr.no_excel').remove();
    $('#' + todaysdate2 + ' tr input').remove();

    setTimeout(function () {
        xport.toCSV(todaysdate2);
    }, 1500);
    $('tr.no_excel').each(function () {
        $(this).removeClass('no_excel');
    });

}

//--------------------------------------------------------------------------------------------------------------------------



function close_dual() {
    $('.buttons').show();
    $('#workbenches').show();
    $('#close_dual').hide();
    $('.del_content').hide();
    $('.container').css('position', 'absolute').css('margin-right', '0%').css('left', '350px').css('zoom', '1').css('margin-top', '70px').css('width', '80%');
    $('#employee_table').css('max-height', 'inherit').css('min-height', '800px').css('overflow', 'auto');
    $('.small_titles').hide();
}


function workbenches() {
    $('.buttons').hide();
    $('.container').css('left', '20px').css('zoom', '0.5').css('margin-top', '185px').css('width', '48.5%').css('margin-right', '1%').css('position', 'relative').css('float', 'left');
    $('#employee_table').css('max-height', '2500px').css('min-height', '800px').css('overflow', 'auto');
    $('#workbenches').hide();
    if (secondary_book === 0) {
        $('#employee_table').prepend('<div class="small_titles">Live Workbook<br><br></div>');
        $('.workbook_info').prepend('<button id="close_dual" class="top_buttons" onclick="close_dual()">Single Workbook </button>');
        $('body').append('<div class="del_content" style="width:50%"><div class="small_titles">Raw CSV File<br><br></div><div class="raw_file"></div></div>');
        $.ajax({
            url: csv_destination,
            dataType: "text",
            success: function (data) {
                var employee_data = data.split(/\r?\n|\r/);
                var table_data =
                    '<table id="headerTable2" class="table table-bordered table-striped">';
                for (var count = 0; count < employee_data.length; count++) {
                    var cell_data = employee_data[count].split(",");
                    table_data += '<tr>';
                    for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
                        if (count === 0) {
                            table_data += '<th>' + cell_data[cell_count] + '</th>';
                        } else {
                            table_data += '<td>' + cell_data[cell_count] + '</td>';
                        }
                    }
                    table_data += '</tr>';
                }
                table_data += '</table>';
                $('.raw_file').html(table_data);
            }
        }).done(function () {
            $('.del_content .raw_file table tr').mouseover(function () {
                $(this).css('zoom', '2');
                $(this).children('td').css('background-color', '#ccc');
            });
            $('.del_content .raw_file table tr ').mouseleave(function () {
                $(this).css('zoom', '1');
                $(this).children('td').css('background-color', 'transparent');
            });
        });

    } else {
        $('#close_dual').show();
        $('.del_content').show();
        $('.small_titles').show();
    }
    secondary_book = 1;
}



function feature_request() {
    var src = "./mail/index.php";
    $.modal('<iframe src="' + src + '" height="450" width="830" style="border:0">', {
        closeHTML: "",
        containerCss: {
            backgroundColor: "#fff",
            borderColor: "#fff",
            height: 850,
            padding: 0,
            width: 800
        },
        overlayClose: true
    });

}


function changefieldcolor() {
    $('td:nth-child(5)').css('text-align', 'center');
    $('td:nth-child(1)').css('text-align', 'center');
    $('td:contains(PCRichard.com)').not('td:nth-child(6)').css('background-color', '#d41920').css('color', '#fff');
    $('td:contains(Amazon.com)').not('td:nth-child(6)').css('background-color', '#2a323f').css('color', '#fff');
    $('td:contains(BHPhotovideo.com)').not('td:nth-child(6)').css('background-color', '#7d9b42').css('color',
        '#fff');
    $('td:contains(Walmart.com)').not('td:nth-child(6)').css('background-color', '#3876c2').css('color', '#fff');
    $('td:contains(NewEgg.com)').not('td:nth-child(6)').css('background-color', '#efa84d').css('color', '#333');
    $('td:contains(Jet.com)').not('td:nth-child(6)').css('background-color', '#761bf5').css('color', '#fff');
    $('td:contains(Sears.com)').not('td:nth-child(6)').css('background-color', '#1b3b7b').css('color', '#fff');
    $('td:contains(Bestbuy.com)').not('td:nth-child(6)').css('background-color', '#1c3d61').css('color', '#fff');
    $('td:contains(Target.com)').not('td:nth-child(6)').css('background-color', '#fff').css('color', '#cf0000').css(
        'font-weight', 'bold').css('border', '1px solid #cf0000 ');
    $('td:contains(JCPenney.com)').not('td:nth-child(6)').css('background-color', '#a3261c').css('color', '#fff');
    $('td:contains(TigerDirect.com)').not('td:nth-child(6)').css('background-color', '#2a5bb1').css('color', '#fff');
    $('td:contains(BJs.com)').not('td:nth-child(6)').css('background-color', '#ba2b3b').css('color', '#fff');
    $('td:contains(Crutchfield.com)').not('td:nth-child(6)').css('background-color', '#244c6b').css('color', '#fff');
    $('td:contains(BigBoxSuperStore.com)').not('td:nth-child(6)').css('background-color', '#fff').css('color',
        '#2a323f').css('font-weight', 'bold').css('border', '1px solid #2a323f');
    $('td:contains(BrandsMartUSA.com)').not('td:nth-child(6)').css('background-color', '#2a5af5').css('color',
        '#fff');
    $('td:contains(Frys.com)').not('td:nth-child(6)').css('background-color', '#b93b38').css('color', '#fff');
    $('td:contains(Adorama.com)').not('td:nth-child(6)').css('background-color', '#32689e').css('color', '#fff');
    $('td:contains(BuyDig.com)').not('td:nth-child(6)').css('background-color', '#4086b7').css('color', '#fff');
    $('td:contains(BeachCamera.com)').not('td:nth-child(6)').css('background-color', '#418242').css('color', '#fff');
    $('td:contains(PriceFalls.com)').not('td:nth-child(6)').css('background-color', '#000').css('color', '#fff');
    $('td:contains(AJMadison.com)').not('td:nth-child(6)').css('background-color', '#174189').css('color', '#fff');
    $('td:contains(ABT.com)').not('td:nth-child(6)').css('background-color', '#1e70b9').css('color', '#fff');
    $('td:contains(Dell.com)').not('td:nth-child(6)').css('background-color',
        '#204576').css('color', '#fff');

    $('td:contains(EastCoastTVs.com)').not('td:nth-child(6)').css('background-color',
        '#fff').css('color', '#000055');

    $('td:contains(AppliancesConnection.com)').not('td:nth-child(6)').css('background-color',
        '#005baa').css('color', '#fff');

    $('td:contains(TechForLess.com)').not('td:nth-child(6)').css('background-color',
        '#6f97c4').css('color', '#fff');
    $('td:contains(HHGregg.com)').not('td:nth-child(6)').css('background-color',
        '#e81c33').css('color', '#fff');
    $('td:contains(BedBathandBeyond.com)').not('td:nth-child(6)').css('background-color',
        '#273691').css('color', '#fff');
    $('td:contains(OfficeDepot.com)').not('td:nth-child(6)').css('background-color',
        '#ce0000').css('color', '#fff');

    $('td:contains("HomeDepot.com - Farmingdale)').not('td:nth-child(6)').html('HomeDepot.com<br>Farmingdale');

    $('.live_button:contains("HomeDepot.com - Farmingdale)').html('HomeDepot.com<br>Farmingdale').css('line-height', '17px');
}

function productclickvendor(goingtosite) {
    var r = confirm("Search " + whatsiteisit + " on " + goingtosite + "?");
    if (r == true) {
        switch (goingtosite) {
            case ('PCRichard.com'):
                window.open('https://www.pcrichard.com/catalog/catalog-product.jsp?prodId=' + whatistheproduct);
                break;

            case ('Amazon.com'):
                window.open('https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=' + whatistheproduct);
                break;

            case ('BHPhotovideo.com'):
                window.open('https://www.bhphotovideo.com/c/search?Ntt=' + whatistheproduct);
                break;

            case ('TigerDirect.com'):
                window.open('http://www.tigerdirect.com/applications/SearchTools/search.asp?keywords=' + whatistheproduct);
                break;

            case ('HHGregg.com'):
                window.open('https://www.hhgregg.com/_CGI/SEARCH3?PN=' + whatistheproduct);
                break;

            case ('Target.com'):
                window.open('https://www.target.com/s?searchTerm=' + whatistheproduct);
                break;

            case ('NewEgg.com'):
                window.open('https://www.newegg.com/Product/ProductList.aspx?Submit=ENE&DEPA=0&Order=BESTMATCH&Description=' + whatistheproduct);
                break;

            case ('Bestbuy.com'):
                window.open('https://www.bestbuy.com/site/searchpage.jsp?st=' + whatistheproduct + '&_dyncharset=UTF-8&id=pcat17071');
                break;

            case ('Walmart.com'):
                window.open('https://www.walmart.com/search/?query=' + whatistheproduct);
                break;

            case ('Jet.com'):
                window.open('https://jet.com/search?term=' + whatistheproduct);
                break;

            case ('Plessers.com'):
                window.open('https://www.plessers.com/search.html/' + whatistheproduct + '/4;1');
                break;

            case ('BedBathandBeyond.com'):
                window.open('https://www.bedbathandbeyond.com/store/s/' + whatistheproduct);
                break;

            case ('BrandsMartUSA.com'):
                window.open('https://www.brandsmartusa.com/browse?Ntt=' + whatistheproduct);
                break;

            case ('US-Appliance.com'):
                window.open('https://www.us-appliance.com/' + whatistheproduct + '.html');
                break;

            case ('Frys.com'):
                window.open('https://www.frys.com/search?search_type=regular&sqxts=1&cat=&query_string=' + whatistheproduct + "&nearbyStoreName=false");
                break;

            case ('Sears.com'):
                window.open('http://www.sears.com/search=' + whatistheproduct);
                break;

            case ('JCPenney.com'):
                window.open('https://www.jcpenney.com/s/' + whatistheproduct + '?Ntt=' + whatistheproduct);
                break;

            case ('PriceFalls.com'):
                window.open('https://www.pricefalls.com/search?q=' + whatistheproduct);
                break;


            case ('"Lowes.com - FARMINGDALE'):
                window.open('https://www.lowes.com/search?searchTerm=' + whatistheproduct);
                break;


            case ('AbesOfMaine.com'):
                window.open('http://www.abesofmaine.com/Search?q=' + whatistheproduct);
                break;


            case ('BigBoxSuperStore.com'):
                window.open('https://www.amazon.com/s/ref=nb_sb_noss?url=me%3DAF4T0IC0JIEJ0&field-keywords=' + whatistheproduct);
                break;


            case ('BeachCamera.com'):
                window.open('https://www.beachcamera.com/shop/list/keyword/' + whatistheproduct);
                break;


            case ('BJs.com'):
                window.open('http://www.bjs.com/search?Ntt=' + whatistheproduct + '&N=');
                break;

            case ('Crutchfield.com'):
                window.open('https://www.crutchfield.com/shopsearch/' + whatistheproduct + '.html');
                break;

            case ('Dell.com'):
                window.open('http://pilot.search.dell.com/' + whatistheproduct);
                break;


            case ('Adorama.com'):
                window.open('https://www.adorama.com/l/?searchinfo=' + whatistheproduct);
                break;

            case ('EastCoastTVs.com'):
                window.open('http://www.eastcoasttvs.com/SearchResults.asp?Search=' + whatistheproduct);
                break;

            case ('TechForLess.com'):
                window.open('https://www.techforless.com/cgi-bin/tech4less/process?mv_session_id=iInB6cR9&mv_doit=return&mv_nextpage=split_search&new_search=1&q_phrase=' + whatistheproduct);
                break;

            default:
                var x = confirm("Website not built into Domcel yet... Go to website anyway?");
                if (x == true) {
                    window.open('http://' + goingtosite);
                }

        }

    }

}



function factorcheck() {

    $('tr').each(function () {
        nchild1 = $(this).children('td:nth-child(1)').text();
        nchild5 = $(this).children('td:nth-child(5)').text();
        $('.select_brand').append('<option value="' + nchild1 + '">' + nchild1 + '</option>');
        $('#vendorlist').append('<div class="live_button" clicked="notclicked">' + nchild5 + '</div>');
    });

    $('tr').not('formated').click(function () {
        nchild5 = $(this).children('td:nth-child(5)').text();
        if (nchild5 === 'PCRichard.com') {
            if ($(this).hasClass("formated")) {
                return false;
            } else {
                $(this).addClass('formated');
                liveprice = parseFloat($(this).children('td:nth-child(8)').text().replace('$', '').replace('"', ''));
                $(this).append('<td class="liveprice">' + liveprice + '<td>');
                tr_info = $(this).children('td:nth-child(8)').text().replace('$', '').replace('"', '');
                $(this).children('td:nth-child(8)').html("<div class='original'>(" + tr_info + ")</div> " +
                    "<form><input value='" +
                    tr_info +
                    "'></input><div class='price_clicker'>Submit<div></form>");
                $(this).children('td').not('td:nth-child(11)').not('td:nth-child(12)').css("background-color", "slategray").css('color', '#fff');

                changeprice = parseFloat($(this).children('input').val());
                change_cost = $(this).children('td:nth-child(13)').text();
                change_freight = $(this).children('td:nth-child(14)').text();
                if (change_freight === '') {
                    change_freight = 0;
                }
                var math1 = parseFloat(tr_info);
                var math2 = parseFloat(change_cost);
                var math3 = parseFloat(change_freight);
                var math_total = math1 - math2 - math3;
                $(this).children('td.liveprice').html(math_total.toFixed(2));
                $('.liveprice').css('background-color', 'green');
                $('.liveprice:contains("-")').css('background-color', 'red');
            }
            $('.price_clicker').click(function () {
                changeprice = parseFloat($(this).parent('form').children('input').val());
                change_cost = $(this).parent('form').parent('td').parent('tr').children('td:nth-child(13)').text();
                change_freight = $(this).parent('form').parent('td').parent('tr').children('td:nth-child(14)').text();
                if (change_freight === '') {
                    change_freight = 0;
                }
                var math1 = parseFloat(changeprice);
                var math2 = parseFloat(change_cost);
                var math3 = parseFloat(change_freight);
                var math_total = math1 - math2 - math3;
                console.log(math_total.toFixed(2) + ' math total');
                $(this).parent('form').parent('td').parent('tr').children('td.liveprice').html(math_total.toFixed(2));
                $(this).parent('form').parent('td').children('.original').show();
                $('.liveprice').css('background-color', 'green');
                $('.liveprice:contains("-")').css('background-color', 'red');
            });
        }
    });


}



function sort_menu_items() {
    $(".live_button").not('.live_button:contains(PCRichard.com)').sort(asc_sort).appendTo('#vendorlist');

    function asc_sort(a, b) {
        return ($(b).text()) < ($(a).text()) ? 1 : -1;
    }
}

function removedoubles(t) {
    $(t).each(function () {
        var see = $(this).text();
        if (seen.match(see)) {
            $(this).remove();
        } else {
            seen = seen + $(this).text();
        }
    });
}


function narrowitdown() {
    //console.log('Combine code = ' + combindcode);
    switch (combindcode) {
        case '00000':
            if (selectproduct == '1') {
                selectproduct = '0';
                return false;
            } else {
                $('tr').show();

            }
            break;
        case '00001':
            $('td:nth-child(1):contains(' + $('option:selected').text() + ')').parent('tr').show();
            break;
        case '00010':

            $('td:nth-child(1):contains(' + $('option:selected').text() + ')').parent('tr').show();

            $('.remove_vendor').remove();
            $('tr:visible').children('td:nth-child(5)').each(function () {
                selbut = $(this).text();
                $('.close_section').append('<div class="live_button remove_vendor" data="1">' + selbut + '</div>');

            });
            var map = {};
            $(".remove_vendor").each(function () {
                var value = $(this).text();
                if (map[value] == null) {
                    map[value] = true;
                } else {
                    $(this).remove();
                }
            });
            $('#vendorlist').hide();
            $('.close_section').slideDown();

            $('.remove_vendor').click(function () {
                vendor_hidden = $(this).attr('data');
                if (vendor_hidden === '1') {
                    getsel = $(this).text();
                    $('td:contains(' + getsel + ')').parent('tr').hide();
                    $(this).attr('data', '0');
                    $(this).css('background-color', '#ccc').css('color', '#333')
                } else {
                    getsel = $(this).text();
                    $('td:contains(' + getsel + ')').parent('tr').children('td:contains(' + $('option:selected').text() + ')').parent('tr').show();
                    $(this).attr('data', '1');
                    $(this).css('background-color', 'slategray').css('color', '#fff')
                }


            });

            break;
        case '00100':
            $('td:nth-child(1):contains(' + $('option:selected').text() + ')').parent('tr').show();
            $('#vendorlist').show();
            if ($('option:selected').text() === 'All') {

                if (selectproduct === '1') {
                    selectproduct = '0';
                    return false;
                } else {
                    $('td:contains(PCRichard.com)').parent('tr').show();
                }
            } else {
                alert('Bug! Please Alert Dom Ricciardi ADV');
            }

            break;
        case '01000':
            $('td:nth-child(1):contains(' + $('option:selected').text() + ')').parent('tr').show();
            break;
        case '10000':

            $('tr').show();
            $('#vendorlist').show();
            showallvendors = '0';
            break;
        case '10010':
            if ($('option:selected').text() === 'All') {
                $('tr').show();
                brandsearch = '0';
            } else {
                $('tr').hide();
                $('td:nth-child(1):contains(' + $('option:selected').text() + ')').parent('tr').show();
            }
            break;

        case '01010':
            $('td:nth-child(1):contains(' + $('option:selected').text() + ')').parent('tr').show();
            break;

        case '00110':
            $('td:nth-child(1):contains(' + $('option:selected').text() + ')').parent('tr').show();



    }


}


function enableclicks() {

    $('.live_button').click(function () {

        getsel = $(this).text();
        getsel2 = $(this).attr('clicked');
        if (getsel2 === 'notclicked') {
            $(this).not('#show_all').not('#ony_pcr_vendor').addClass('live_button-active').attr('clicked', 'clicked');
            $('td:contains(' + getsel + ')').parent('tr').hide();
        } else {
            $(this).not('#show_all').not('#ony_pcr_vendor').removeClass('live_button-active').attr('clicked', 'notclicked');
            $('td:contains(' + getsel + ')').parent('tr').show();
        }


    });



    $(".select_brand").change(function () {
        if ($('option:selected').text() === 'All') {
            $('tr').show();
            $('#vendorlist').show();
            $('#clearallvendors').show();
            $('.close_section').hide();
            $('#show_all').hide();
            combindcode = '00000';
            if (selectproduct === '1') {
                $('tr').hide();
                $('tr').children('td:nth-child(4):contains(' +
                    scroll_to_product + ')').parent('tr').show();
            }
            narrowitdown();
        } else {
            $('tr').not($('th:contains(GMD)').parent('tr')).hide();
            brandsearch = '1';
            combindcode = '00010';
            $('#clearallvendors').show();
            $('#show_all').hide();
            narrowitdown();

        }

    });

    $('td:nth-child(4)').click(function () {
        whatistheproduct = $(this).text().replace(/\./g, '-').replace(/\//g, '-');
        goingtosite = $(this).parent('tr').children('td:nth-child(5)').text();
        whatsiteisit = $(this).parent('tr').children('td:nth-child(4)').text();
        productclickvendor(goingtosite);
    });

}


function finishup() {
    //$('tr').not($('td:contains(PCRichard.com)').parent('tr')).not($('th:contains(Brand)').parent('tr')).hide();
    $('tr').first().append('<th>GMD<th>');
    $('#vendorlist').show();
    $('#show_all').hide();
    $('.domcel').hide();
}



$('#help').click(function () {
    $('.container').not('.help_added').prepend('<div class="helpframe"></div>');
    $('.helpframe').html(helpfile);
    $('.container').addClass('help_added');
    $('.helpframe').toggle();




    $('.close_help').click(function () {
        $('.helpframe').slideUp();
    });
    $(document).scrollTop(0);

});

$('#show_all').click(function () {

    if ($('option:selected').text() === 'All') {
        $('.domcel').css('background-image', "url('./images/blog-excel-logo5.png')");
        $('tr').show();
        $('#show_all').hide();
        $('.live_button').not(this).attr('clicked', 'notclicked').removeClass('live_button-active');
        $('#vendorlist').show();
        $('#clearallvendors').show();
        $('.domcel').deley(800).fadeOut();
        $('div.live_button').show();
        $('.intro').show();
    } else {
        $('#clearallvendors').show();
        $('.remove_vendor').attr('data', '1').css('background-color', 'slategray').css('color', '#fff');
        $(this).hide();
        combindcode = '00010';
        narrowitdown();
        $('th:contains(GMD)').parent('tr').show();
    }

});

$('#ony_pcr_vendor').click(function () {
    $('.close_section').hide();
    $('tr').not($('td:contains(PCRichard.com)').parent('tr')).not($('th:contains(GMD)').parent('tr'))
        .hide();
    $('.live_button').not(this).addClass('live_button-active').attr('clicked', 'clicked');
    $('#US').attr('clicked', 'notclicked').removeClass('live_button-active');
    if ($('option:selected').text() === 'All') {
        onlypcrvendor = '1';
        clearallvendors = '0';
        showallvendors = '0';
        combindcode = showallvendors + clearallvendors + onlypcrvendor + brandsearch + selectedvendor;
        $('#show_all').show();
        $("#clearallvendors").show();
        narrowitdown();
    }
});


$('#clearallvendors').click(function () {

    if ($('option:selected').text() === 'All') {
        $('tr').not($('th:contains(GMD)').parent('tr')).hide();
        $('th').parent('tr').show();
        $('.live_button').not(this).addClass('live_button-active');
        $('.live_button').not(this).attr('clicked', 'clicked');
        $('.close_section').hide();
        $('#show_all').show();
        $(this).hide();
        clearallvendors = '1';
        showallvendors = '0';
        onlypcrvendor = '0';

    } else {
        $('.remove_vendor').attr('data', '0').css('background-color', '#ccc').css('color', '#333');
        $('tr').not($('th:contains(GMD)').parent('tr')).hide();
        $('#show_all').show();
    }


});



$(document).ready(function () {
    $.ajax({
        url: csv_destination,
        dataType: "text",
        success: function (data) {
            var employee_data = data.split(/\r?\n|\r/);
            var table_data =
                '<table id="headerTable" class="table table-bordered table-striped">';
            for (var count = 0; count < employee_data.length; count++) {
                var cell_data = employee_data[count].split(",");
                table_data += '<tr>';
                for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
                    if (count === 0) {
                        table_data += '<th>' + cell_data[cell_count] + '</th>';
                    } else {
                        table_data += '<td>' + cell_data[cell_count] + '</td>';
                    }
                }
                table_data += '</tr>';
            }
            table_data += '</table>';
            $('#employee_table').html(table_data);
            $('.domcel').css('background-image', "url('./images/blog-excel-logo2.png')");
            $('#smalltext').html(" There are " + $('tr').length + ' records');
        }
    }).done(function () {
        factorcheck();
    }).done(function () {
        removedoubles('option');
        removedoubles('.live_button');
        enableclicks();
        changefieldcolor();
    }).done(function () {
        $('.domcel').css('background-image', "url('./images/blog-excel-logo3.png')");
        setTimeout(finishup, 800);
    });


    $("#product_search").click(function () {
        $(document).scrollTop(0);
        $('.domcel').css('background-image', "url('./images/blog-excel-logo4.png')");
        $('.domcel').show();
        setTimeout(function () {
            setTimeout(function () {
                -
                    $('.domcel').fadeOut();
            }, 100);
            $('.remove_vendor').remove();
            selectproduct = '1';
            scroll_to_product = $('#lname').val();
            $('.select_brand').val("All").change();
            $('#vendorlist').hide();
            $('.intro').hide();
            $("#clearallvendors").show();
            $("#show_all").show();
        }, 2000);


        $('.remove_vendor').click(function () {
            vendor_hidden = $(this).attr('data');
            if (vendor_hidden === '1') {
                getsel = $(this).text();
                $('td:contains(' + getsel + ')').parent('tr').hide();
                $(this).attr('data', '0');
                $(this).css('background-color', '#ccc').css('color', '#333');
            } else {
                getsel = $(this).text();
                $('td:contains(' + getsel + ')').parent('tr').children('td:contains(' + $('input').val() + ')').parent('tr').show();
                $(this).attr('data', '1');
                $(this).css('background-color', 'slategray').css('color', '#fff');
            }

        });


    });

});