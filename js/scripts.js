$(document).ready(function() {
    let screen = document.body.clientWidth;
    $(".triangle").css("border-left-width", screen);
    $(".triangle--services").css("border-right-width", screen);

    $(window).resize(function() {
        let screenb = document.body.clientWidth;
        $(".triangle").css("border-left-width", screenb);
        $(".triangle--services").css("border-right-width", screenb);
    });

    //SLIDER
    let swiper = new Swiper(".swiper-container--feed ", {
        slidesPerView: 2,
        pagination: {
            el: ".swiper-pagination--feed",
            clickable: true
        },
        breakpoints: {
            // when window width is <= 575px
            575: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is <= 767px
            767: {
                slidesPerView: 1,
                spaceBetween: 20
            }
        }
    });

    //SLIDER GALLERY
    let swiper2 = new Swiper(".swiper-container--gal", {
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination--gal",
            clickable: true
        },
        breakpoints: {
            // when window width is <= 575px
            575: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is <= 991px
            767: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    });

    //vertical slider
    let swiper1 = new Swiper(".swiper-container--vert", {
        direction: "vertical",
        speed: 700,
        pagination: {
            el: ".swiper-pagination--vert",
            clickable: true
        }
    });

    let rPag = $(".container__js").offset().left;
    $(".container--pag").css("right", rPag);

    $(window).resize(function() {
        let rPag2 = $(".container__js").offset().left;
        $(".container--pag").css("right", rPag2);
    });

    //FOR ICONS
    var wow = new WOW({
        boxClass: "wow1",
        callback: function(box) {
            if (screen >= 1200) {
                showImg();
            }
        },
        scrollContainer: null
    });
    wow.init();

    function showImg() {
        $(".ad-img1").animate(
            {
                height: 81
            },
            1500
        );
        setTimeout(function() {
            $(".ad-img2").animate(
                {
                    height: 81
                },
                1500
            );
        }, 1000);

        setTimeout(function() {
            $(".ad-img3").animate(
                {
                    height: 81
                },
                1500
            );
        }, 2000);
    }

    //SERVICES
    var wow = new WOW({
        boxClass: "wow2",
        callback: function(box) {
            if (screen >= 1200) {
                flipImg();
            }
        },
        scrollContainer: null
    });
    wow.init();

    function flipImg() {
        $(".ser1").addClass("rotate360");
        setTimeout(function() {
            $(".ser2").addClass("rotate360");
        }, 1000);

        setTimeout(function() {
            $(".ser3").addClass("rotate360");
        }, 1500);
    }
});
