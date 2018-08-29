$(function() {
    var header = $(".navbar");
    var navlink = $(".nav-link");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled") && navlink.addClass("nav-link-style");
        } else {
            header.removeClass("scrolled") && navlink.removeClass("nav-link-style");
        }
    });

});
