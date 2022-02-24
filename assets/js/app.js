$(document).ready(function(){
    $('.dj-sliders').slick({
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 2,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: true,
        draggable: true,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="bi bi-chevron-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="bi bi-chevron-right"></i></button>`,
        dots: false,
        
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]

    });
  });