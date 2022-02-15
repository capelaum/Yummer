import { MdKeyboardArrowRight } from "react-icons/md";

export const sliderSettings = {
  dots: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "linear",
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};
