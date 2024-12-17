$(document).ready(function() {

    // --------------------
    // Hide Swiper When Click Outside (not move, only click)
    // --------------------
    $(document).mousedown(function(event) {
        if ($("#projects-project-view").css('display') === 'flex') {
            if (!$(event.target).closest('#carousel-tools, #carousel-view, #multiple-images, #single-image').length) {
                hideProjectView();
            }
        }
    });

    // --------------------
    // Hide 3D Object When Click Outside (not move, only click)
    // --------------------
    $(document).mousedown(function(event) {
        if ($("#projects-project-view-3D").css('display') === 'flex') {
            if (!$(event.target).closest('#project-view-3D-tools, #model-viewer-view').length) {
                hide3dProjectView();
            }
        }
    });

    // --------------------
    // Hide Swiper/3D/Film When Click On Close Button
    // --------------------
    $("#close-icon").click(hideProjectView);
    $("#close-icon-3D").click(hide3dProjectView);
    $("#close-icon-film").click(hideFilmProjectView);
    
    // --------------------
    // Show/Hide Menu (Mobile)
    // --------------------
    $("#navbar-mid-mobile-menu").click(function() {
        if ($("#navbar-mid-mobile-menu-table").css("display") === "none") {
            $("#navbar-mid-mobile-menu-table").fadeIn(200);
        }
        else {
            $("#navbar-mid-mobile-menu-table").fadeOut(200);
        }
    });

    // --------------------
    // Expand/Collapse Projects List
    // --------------------
    $("#show-more").click(function() {
        if ($(".list").hasClass("hidden")) {
            if (window.innerWidth > 700) {
                $("#projects-container").css('height', '1100px');
            } else {
                $("#projects-container").css('height', '900px');
            }

            $(".list").removeClass("hidden");

            $("#show-more").text(getTranslationWithoutLang("show-more-projects"));
        } else {
            $("#projects-container").css('height', 'unset');
            $(".list").addClass("hidden");

            $("#show-more").text(getTranslationWithoutLang("collapse-projects"));
        }
    })
});

// --------------------
// Debounces
// --------------------
window.addEventListener('scroll', debounce(checkScrollValue, 10));
window.addEventListener('scroll', debounce(checkScrollBeyondFeedback, 100));
window.addEventListener('resize', debounce(checkNavbarSettings, 200));
window.addEventListener('resize', debounce(checkProjectVisibility, 100));
window.addEventListener('load', debounce(checkProjectVisibility, 100));

$(window).on('load', function () {
    if (window.matchMedia('(hover: none)').matches) {
      $('head').append('<style>*:hover { all: unset !important; }</style>');
    }
});
