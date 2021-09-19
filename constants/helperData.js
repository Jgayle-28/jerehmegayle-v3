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
        duration: 1.2,
      },
      opacity: {
        duration: 1.2,
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
        duration: 1.2,
      },
      opacity: {
        duration: 1.2,
      },
    },
  },
  hidden: { opacity: 0, y: 80 },
};
