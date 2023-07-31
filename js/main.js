$(function(){
    function sliderSetting(){
        $('.slider').slick({
            autoplay: true,    
            autoplaySpeed: 4000,
            speed: 1000,     
            dots: true,
            arrows: true,
            infinite: true,    
            pauseOnHover: false,
            pauseOnFocus: false,
            puseOnDotsHover: false,
            adaptiveHeight: true,
            prevArrow: '<img src="picture/arrowl.png" class="slide-arrow prev-arrow">',
            nextArrow: '<img src="picture/arrowr.png" class="slide-arrow next-arrow">',
        })
    }
    sliderSetting();
    $(window).resize(function() {
        sliderSetting();
    })
})
button = ["#slick-slide-control00", "#slick-slide-control01", "#slick-slide-control02"];
$('button').on("mouseenter", function() {
    let id = $(this).attr('id');
    let click = button[Number(id)];
    $(click).click();
    },
);