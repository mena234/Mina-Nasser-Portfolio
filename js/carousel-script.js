$("#carousel").Cloud9Carousel({
    buttonLeft: $("#buttons > .left"),
    buttonRight: $("#buttons > .right"),
    autoPlay: 1,
    bringToFront: true
});

$(window).resize(function () {
    var newwidth = $(".box-padding").innerWidth();
    $("#carousel").width(newwidth);
});
