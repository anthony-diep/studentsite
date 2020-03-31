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