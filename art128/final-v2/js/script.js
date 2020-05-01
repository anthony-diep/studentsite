document.addEventListener('DOMContentLoaded', function () {

    // TOGGLE NAV
    var mymenubutton = document.querySelector('.menu-button');
    var mytogglemenu = document.querySelector('.toggle-nav');

    mymenubutton.addEventListener('click', function () {
        mytogglemenu.classList.toggle('expanded');
    });

    // STICKY NAV SCROLL LINKS FOR SINGLE PAGE SITES
    var stickynavlinks = document.querySelectorAll('.sticky nav a');
    for (var i = 0; i < stickynavlinks.length; i++) {
        stickynavlinks[i].onclick = function () {
            mytogglemenu.classList.remove("expanded");
        }
    };

});

    // ADJUST TRANSPARENCY OF MENU WHEN SCROLL
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".site-header.sticky").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".site-header.sticky").removeClass("active");
        }
    });