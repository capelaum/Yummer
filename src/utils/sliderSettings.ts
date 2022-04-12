export const sliderSettings = {
  dots: true,
  arrows: false,
  slidesToShow: 2,
  infinite: false,
  autoplay: false,
  autoplaySpeed: 1000,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        rows: 2,
        slidesPerRow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
