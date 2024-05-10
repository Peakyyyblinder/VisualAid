let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

$(document).ready(function() {
    $(window).on('resize', function() {
        var navbarHeight = $('.navbar').outerHeight();
        var viewportWidth = $(window).width();
        if (viewportWidth <= 991.98) {
            if ($('.navbar').hasClass('fixed-top')) {
                $('body').addClass('navbar-fixed');
            } else {
                $('body').removeClass('navbar-fixed');
            }
        } else {
            $('body').removeClass('navbar-fixed');
        }
    });
});
