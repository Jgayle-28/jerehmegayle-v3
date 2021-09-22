import React, { useEffect, useState, useRef } from 'react';
import { testimonials } from '@constants/testimonials';
import { motion, useAnimation } from 'framer-motion';
import useWindowDimensions from '@hooks/useWindowDimensions';
import BoxArrowOutRight from 'icons/BoxArrowOutRight';
import LandingSectionHeader from './common/LandingSectionHeader';

export default function Testimonials() {
  const testHeaderRef = useRef();
  const { height, width } = useWindowDimensions();

  const controls = useAnimation();

  const [userScrollAmount, setUserScrollAmount] = useState(0);
  const [headerOffset, setHeaderOffset] = useState(0);
  const [headerOnScreen, setHeaderOnScreen] = useState(false);

  useEffect(() => {
    // let elem = document.getElementById('code-header');
    // let rect = elem.getBoundingClientRect();
    // console.log('rect :>> ', rect.bottom);
    // setHeaderOffset(rect.top);
    const { offsetTop } = testHeaderRef.current;
    // console.log('offsetTop :>> ', offsetTop);
    setHeaderOffset(offsetTop + 1030);
  }, []);

  // Controls event listener for scroll / sticky nav
  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener('scroll', handleScrollChange);
    }
    return () => {
      window.removeEventListener('scroll', handleScrollChange);
    };
  }, []);

  useEffect(() => {
    if (headerOnScreen === true) return;
    if (userScrollAmount > headerOffset) {
      setHeaderOnScreen(true);
    }
  }, [userScrollAmount]);

  const handleScrollChange = () => {
    const scrollAmount = window.scrollY;
    setUserScrollAmount(scrollAmount);
  };

  // Animates header in
  useEffect(() => {
    if (headerOnScreen) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1.6,
          delay: 0.1,
          ease: 'anticipate',
        },
      });
    }
  }, [headerOnScreen]);

  return (
    <section className='bg-[#F6F8F9] -mt-40 dark:bg-gray-900 pb-40 px-5'>
      <div className='max-w-6xl mx-auto mb-6'>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={controls}
          id='testimonial-header'
          ref={testHeaderRef}
          className='flex flex-wrap flex-row md:justify-between items-center md:pt-24 mx-0 md:mx-10'>
          <LandingSectionHeader headerName='Kind Words' />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={controls}
        id='code-header'
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto lg:-mt-4 gap-y-20'>
        {testimonials &&
          testimonials.map((testimonial, idx) => (
            <TestimonialCard testimonial={testimonial} key={idx} />
          ))}
      </motion.div>
    </section>
  );
}

const TestimonialCard = ({ testimonial }) => {
  return (
    <div class='w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 dark:text-gray-600 text-gray-800 dark:bg-gray-800 transform hover:scale-95 hover:translate-y-1 hover:!shadow-none transition duration-300 ease-out'>
      <div class='w-full pt-1 pb-5'>
        <div class='overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg'>
          <img src={testimonial.avatar} alt='avatar' />
        </div>
      </div>
      <div class='w-full mb-10'>
        <div class='text-3xl text-brandPrimary text-left leading-tight h-3'>
          “
        </div>
        <p class='text-sm text-gray-600 text-center px-5'>{testimonial.text}</p>
        <div class='text-3xl text-brandPrimary text-right leading-tight h-3 -mt-3'>
          ”
        </div>
      </div>
      <div class='w-full'>
        <p class='text-md text-brandPrimary dark:text-white font-bold text-center'>
          {testimonial.name}
        </p>
        <p class='text-xs text-gray-500 text-center'>{testimonial.title}</p>
      </div>
    </div>
  );
};
