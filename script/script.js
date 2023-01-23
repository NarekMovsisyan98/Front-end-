jQuery(document).ready(function($) {
    $('.select_accent').select2()
    $('.faq_title').click(function (){
        $(this).toggleClass('active').next('.faq_desc').slideToggle();
    })
    $('.burger_btn').click(function (){
        $('.header_item').slideToggle();
    })
    // $('.selector').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     dots: false,
    //     autoplay: false,
    //     prevArrow: '<button class="slick-arrow slick-prev"><img src="/wp-content/themes/digitalbeverly/assets/img/webarrowleft.svg" alt=""></button>',
    //     nextArrow: '<button class="slick-arrow slick-next"><img src="/wp-content/themes/digitalbeverly/assets/img/linkarrow.svg" alt=""></button>',
    //     responsive: [{
    //         breakpoint: 767,
    //         settings: {
    //             arrows: false,
    //         }
    //     }]
    // });
});