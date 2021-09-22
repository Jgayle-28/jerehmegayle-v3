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
export const buttonVariants = {
  visible: {
    opacity: 1,
    transition: {
      opacity: {
        ease: 'easeOut',
        duration: 1.4,
        delay: 1,
      },
    },
  },
  hidden: { opacity: 0 },
};
export const headerVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      x: {
        ease: 'easeOut',
        duration: 1.0,
        delay: 0.2,
      },
      opacity: {
        duration: 1.0,
        delay: 0.2,
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
export const transitionVariants = {
  // hidden: { opacity: 0, x: -200, y: 0 },
  // enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

// *********************************
// Slider Settings
// *********************************
export const sliderSettings = {
  dots: true,
  arrows: true,
  // infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
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
