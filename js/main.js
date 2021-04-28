$(document).ready(function() {
    /* nav shirink */
    $(window).on("scroll", function() {
            if ($(this).scrollTop() > 90) {
                $(".navbar").addClass("navbar-menu")
            } else {
                $(".navbar").removeClass("navbar-menu")
            }

        })
        /* video */
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function() {
        if ($(".video-popup").hasClass("open")) {
            $(".video-popup").removeClass("open")
            $("#player-1").attr("src", "")
        } else {
            $(".video-popup").addClass("open");
            if ($("#player-1").attr("src") == '') {
                $("#player-1").attr("src", videoSrc);
            }
        }
    });

    /* freatures */

    $('.features-carousel').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1000: {
                items: 3,

            },
        }
    })
})


















let content = 'Landing Page App'
let cont = 0
let text = document.getElementById('text')
let speed = 350

function typeWriter() {
    if (cont < content.length) {
        text.textContent += content.charAt(cont)
        cont++
        setTimeout(typeWriter, speed)
    } else {
        text.textContent = '';
        cont = 0;
        typeWriter();
    }
}
typeWriter()