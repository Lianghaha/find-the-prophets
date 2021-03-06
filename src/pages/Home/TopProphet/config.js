//Antd Carousel Settings
export const settings = {
   arrows: false,
   dots: { className: "AntDCarouselDots" },
   infinite: true,
   speed: 600,
   slidesToShow: 6,
   slidesToScroll: 6,
   initialSlide: 0,
   draggable: true,
   responsive: [
      {
         breakpoint: 2480,
         settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
         },
      },
      {
         breakpoint: 2060,
         settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
         },
      },
      {
         breakpoint: 1650,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
         },
      },
      {
         breakpoint: 1230,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
         },
      },
      {
         breakpoint: 818,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         },
      },
   ],
}
