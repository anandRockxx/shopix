// Slider1 Script
$("#slider1").owlCarousel({
    loop: true,
    margin: 70,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        719: {
            items: 1
        },
        720: {
            items: 2
        },
        1025: {
            items: 3
        }
    }
});


// slider2 Script
$('#slider2').owlCarousel({
    lazyLoad: true,
    loop: true,
    autoplayHoverPause: false,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 50,
    center: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        720: {
            items: 2
        },
        1140: {
            items: 2
        }
    }
});

// Brand Script
$('#brand').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    margin: 100,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});

// popup script
$('.zoom-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
        verticalFit: true,
        titleSrc: function(item) {
            return item.el.attr('title');
        }
    },
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,
        duration: 300,
        opener: function(element) {
            return element.find('img');
        }
    }
});

//smooth scrolling
$(document).on('click', 'a', function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});