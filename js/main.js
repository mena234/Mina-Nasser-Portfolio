/* eslint-disable no-unused-vars */
/*jslint browser:true, evil: true */
/* eslint-env browser */
/*global alert, console, Debug, prompt ,switch, case*/
/* eslint-disable no-console */
/*jslint plusplus: true */


$(function () {

    "use strict";

    $("#bottom").click(function () {

        $("#aside").slideToggle();

    });

});


$(function () {

    "use strict";

    $("#icon-home").click(function () {

        $("#aside .bottom-aside i").removeClass("main-color");

        $(this).css("transform", "scale(1)");

        $(this).siblings().css("transform", "scale(1)");

        $("#page-home").siblings().animateTransform("translateX(3000px)", function () {

            $(".layout, .home-text").css("filter", "blur(0px)");

        });

    });

});

$(function () {

    "use strict";

    $("#icon-about").click(function () {

        $(".layout, .home-text").css("filter", "blur(2px)");

        $("#icon-about i").addClass("main-color");

        $("#aside .bottom-aside i").not("#icon-about i").removeClass("main-color");

        $(this).css("transform", "scale(1)");

        $(this).siblings().css("transform", "scale(.7)");

        $("#page-about").siblings().animateTransform("translateX(3000px)", function () {

            $("#page-about").animateTransform("translateX(0px)");

        });

    });

});

$(function () {

    "use strict";

    $("#icon-resume").click(function () {

        $(".layout, .home-text").css("filter", "blur(2px)");

        $("#icon-resume i").addClass("main-color");

        $("#aside .bottom-aside i").not("#icon-resume i").removeClass("main-color");

        $(this).css("transform", "scale(1)");

        $(this).siblings().css("transform", "scale(.7)");

        $("#page-resume").siblings().animateTransform("translateX(3000px)", function () {

            $("#page-resume").animateTransform("translateX(0px)");

        });

    });

});


$(function () {

    "use strict";

    $("#icon-portofilio").click(function () {

        $(".layout, .home-text").css("filter", "blur(2px)");

        $("#icon-portofilio i").addClass("main-color");

        $("#aside .bottom-aside i").not("#icon-portofilio i").removeClass("main-color");

        $(this).css("transform", "scale(1)");

        $(this).siblings().css("transform", "scale(.7)");

        $("#page-portofilio").siblings().animateTransform("translateX(3000px)", function () {

            $("#page-portofilio").animateTransform("translateX(0px)");

        });

    });

});

$(function () {

    "use strict";

    $("#icon-blog").click(function () {

        $(".layout, .home-text").css("filter", "blur(2px)");

        $("#icon-blog i").addClass("main-color");

        $("#aside .bottom-aside i").not("#icon-blog i").removeClass("main-color");

        $(this).css("transform", "scale(1)");

        $(this).siblings().css("transform", "scale(.7)");

        $("#page-blog").siblings().animateTransform("translateX(3000px)", function () {

            $("#page-blog").animateTransform("translateX(0px)");

        });

    });

});


$(function () {

    "use strict";

    $("#icon-contact").click(function () {

        $(".layout, .home-text").css("filter", "blur(2px)");

        $("#icon-contact i").addClass("main-color");

        $("#aside .bottom-aside i").not("#icon-contact i").removeClass("main-color");

        $(this).css("transform", "scale(1)");

        $(this).siblings().css("transform", "scale(.7)");

        $("#page-contact").siblings().animateTransform("translateX(3000px)", function () {

            $("#page-contact").animateTransform("translateX(0px)");

        });

    });

});


var testimonialOne = document.getElementById("testimonial-one"),
    testimonialTwo = document.getElementById("testimonial-two"),
    buttonOne = document.getElementById("button-one"),
    buttonTwo = document.getElementById("button-two"),
    smallButtonOne = document.getElementById("small-button-one"),
    smallButtonTwo = document.getElementById("small-button-two"),
    smallButtonThree = document.getElementById("small-button-three"),
    smallButtonFour = document.getElementById("small-button-four");




var intervalFade;


function theFade() {

    "use strict";

    $(testimonialOne).fadeOut();
    $(testimonialTwo).fadeIn();
    $(smallButtonOne).fadeOut();
    $(smallButtonTwo).fadeIn();
    $(smallButtonFour).fadeOut();
    $(smallButtonThree).fadeIn();

}

var intervalFade = setInterval(theFade, 10000);



var intervalFadeTwo;


function theFadeTwo() {

    "use strict";

    $(testimonialTwo).delay(5000).fadeOut();
    $(testimonialOne).delay(5000).fadeIn();
    $(smallButtonTwo).delay(5000).fadeOut();
    $(smallButtonOne).delay(5000).fadeIn();
    $(smallButtonThree).delay(5000).fadeOut();
    $(smallButtonFour).delay(5000).fadeIn();
}

var intervalFadeTwo = setInterval(theFadeTwo, 10000);



$(function () {

    "use strict";


    $(buttonTwo).click(function () {

        $(testimonialOne).fadeOut();
        $(testimonialTwo).fadeIn();
        $(smallButtonOne).fadeOut();
        $(smallButtonTwo).fadeIn();
        $(smallButtonFour).fadeOut();
        $(smallButtonThree).fadeIn();

    });
});


$(function () {

    "use strict";

    $(buttonOne).click(function () {

        $(testimonialTwo).fadeOut();
        $(testimonialOne).fadeIn();
        $(smallButtonTwo).fadeOut();
        $(smallButtonOne).fadeIn();
        $(smallButtonThree).fadeOut();
        $(smallButtonFour).fadeIn();

    });

});


$(function () {

    "use strict";

    $(".color-box i").click(function () {

        $("#color-box").toggleClass("color-box-translate");
    });
});


var colorLi = $(".color-box .color-option ul li"),
    darkStyle = $(".color-box .color-option ul li.style-one"),
    grayStyle = $(".color-box .color-option ul li.style-two"),
    blogBox = $(".blog .blog-big-contain .blog-small-contain .blog-text"),
    readMore = $(".blog .blog-big-contain .blog-small-contain .blog-read-more");

$(function () {

    "use strict";

    colorLi.click(function () {

        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });

    darkStyle.click(function () {

        $(".box-style").css("background", "rgba(0, 0, 0, 0.5)");
    });

    grayStyle.click(function () {

        $(".box-style").css("background", "#333333");
        blogBox.css("background", "#333333");
        readMore.css("background", "#333333");
    });
});

$(function () {
    "use strict";
    $(".loading-layout").fadeOut(1000);
});


















/**************************************************/
