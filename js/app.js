$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrolloffset = $(window).scrollTop();


        /* Header fixed */
        checkScroll (scrolloffset)

    $(window).on("scroll", function() {

        scrolloffset = $(this).scrollTop();

        checkScroll(scrolloffset);

    });

    function checkScroll (scrolloffset) {
        if( scrolloffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


});