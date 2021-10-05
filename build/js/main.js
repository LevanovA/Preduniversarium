$(document).ready(function(){
    'use strict'

    //Прокрутка до блока с указанным id в ссылке
    $('.anchor').on('click', function (event) {
        event.preventDefault();
        var href = $(this).attr('href');
        if ($(href).length) {
            $("html, body").animate({
                scrollTop: $(href).offset().top + "px"
            }, {
                duration: 500,
                easing: "swing"
            });
        }
    })
});

'use strict';

$(document).ready(function(){

    $('.burger').on('click', function(){
        $(this).toggleClass('burger--active')
        $('.menu__mobile').slideToggle(400)
    });
});

'use strict';

$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

//# sourceMappingURL=main.js.map
