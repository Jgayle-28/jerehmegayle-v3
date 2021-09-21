// *********************************
// Contact Form
// *********************************
export const initialState = {
  name: '',
  email: '',
  message: '',
};
// *********************************
// Page Load Animations
// *********************************
export const headerVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      x: {
        ease: 'easeOut',
        duration: 1.0,
      },
      opacity: {
        duration: 1.0,
      },
    },
  },
  hidden: { opacity: 0, x: -80 },
};
export const sectionVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      y: {
        ease: 'easeOut',
        duration: 1.0,
      },
      opacity: {
        duration: 1.0,
      },
    },
  },
  hidden: { opacity: 0, y: 80 },
};
// *********************************
// Slider Settings
// *********************************
export const sliderSettings = {
  dots: true,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
  ],
};
