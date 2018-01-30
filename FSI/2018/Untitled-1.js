            $(".menu_item").click(function () {
                location.hash = $(this).attr("data"),
                    $(".fsi").css("display", "none"),
                    $(".productdrilldown").css("left", "-102%"),
                    $("#pg" + location.hash.replace("#", "")).not(".finished").html(eval("content_page" + location.hash.replace("#", ""))),
                    $("#pg" + location.hash.replace("#", "")).addClass("finished"),
                    $(".promo_box").each(function () {
                        $(this).attr("id", "p" + nu),
                            $(this).not(".loaded").append('<div class="dynamic"></div>').addClass("loaded"), nu++
                    }),
                    wrapprogram(),
                    $("#pg" + location.hash.replace("#", "")).show(),
                    $("#pageof").val(parseInt(location.hash.replace("#", "")) + 1),
                    $(".menu_item").removeClass("menu_clicked_class"),
                    $("#menuFSI" + location.hash.replace("#", "")).addClass("menu_clicked_class"),
                    $(window).scrollTop(0), "#0" === location.hash ? $(".left_arrow").css("display", "none") : $(".left_arrow").css("display", "block"),
                    $("#menu_box_desktop_name strong").text($("#pg" + location.hash.replace("#", "")).attr("data2")),
                    "#" + lastpage === location.hash ? $(".right_arrow").hide() : $(".right_arrow").show(), runajaxcontent(), marketing()
            }),