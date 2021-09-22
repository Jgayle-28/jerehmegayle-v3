import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Data
import userData from '@constants/data';
import {
  initialState,
  headerVariants,
  sectionVariants,
} from '@constants/helperData';
// Icons
import Instagram from 'icons/Instagram';
import LinkedIn from 'icons/LinkedIn';
import Mail from 'icons/Mail';

export default function Contact() {
  const [state, setState] = useState(initialState);
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        // form.reset();
        setFormStatus('SUCCESS');
      } else {
        setFormStatus('ERROR');
      }
    };
    xhr.send(data);
    // Reset Form and Messages
    setTimeout(() => {
      setFormStatus(null);
    }, 300);
    setState(initialState);
  };

  const getFormAction = () => {
    // If Form has not been submitted or cleared
    if (formStatus === null) {
      return (
        <button
          type='submit'
          className='bg-white border border-1 border-brandPrimary rounded-md w-1/2 mx-4 mt-8 py-2 text-brandPrimary hover:text-white text-xs font-bold hover:bg-brandPrimary transition-all duration-500 ease'>
          Send It
        </button>
      );
    }
    // Notification for form submission
    return (
      <Notification
        type={formStatus}
        msg={
          formStatus === 'SUCCESS'
            ? 'Thank you for your time. Your message was sent successfully, I will get back to you shortly'
            : ' OOps, something went wrong. Please refresh and try again.'
        }
      />
    );
  };

  return (
    <section>
      <div className='max-w-6xl mx-auto h-36 md:h-48 bg-white dark:bg-gray-800 antialiased'>
        <motion.h1
          variants={headerVariants}
          initial='hidden'
          animate='visible'
          className='text-7xl md:text-9xl font-bold py-20 text-left px-5'>
          Contact
        </motion.h1>
      </div>
      <motion.div
        variants={sectionVariants}
        initial='hidden'
        animate='visible'
        className='relative z-10 rounded-md shadow-md p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 bg-brandGray dark:bg-gray-900  z-0'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='md:ml-4'>
            <header className=''>
              <h1 className='text-gray-700 dark:text-gray-50 font-semibold text-2xl'>
                Get in touch, let's talk.
              </h1>
              <p className='font-light text-base text-gray-500 dark:text-gray-200 mt-2'>
                Fill in the details and I'll get back to you as soon as I can.
              </p>
            </header>
            <div className='icons-container inline-flex flex-col mt-10 mb-5'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={`mailto:${userData.email}`}
                className='flex flex-row items-center space-x-6 rounded-md border border-[#eceff1] dark:border-gray-900 hover:border hover:!border-brandPrimary p-4 cursor-pointer transition all ease duration-300'>
                <Mail />
                <p className='text-gray-500 dark:text-gray-50 font-light text-sm'>
                  {userData.email}
                </p>
              </a>
            </div>
            <div className='social-icons flex flex-row space-x-2'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={userData.socialLinks.linkedin}
                className='text-gray-500 h-10 w-10 rounded-full hover:bg-brandPrimary flex items-center justify-center cursor-pointer hover:text-white transition all ease duration-300'>
                <LinkedIn />
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={userData.socialLinks.instagram}
                className='text-gray-500 h-10 w-10 rounded-full hover:bg-brandPrimary flex items-center justify-center cursor-pointer hover:text-white transition all ease duration-300'>
                <Instagram />
              </a>
            </div>
          </div>

          <form
            action='https://formspree.io/mqkqodbk'
            method='POST'
            onSubmit={handleSubmit}
            className='form rounded-lg bg-white p-4 flex flex-col'>
            <label htmlFor='name' className='text-sm text-gray-600 mx-4'>
              Your Name
            </label>
            <input
              type='text'
              required={true}
              onChange={(e) => handleChange(e)}
              value={state.name}
              className='font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-brandPrimary'
              name='name'
            />
            <label htmlFor='email' className='text-sm text-gray-600 mx-4 mt-4'>
              Email
            </label>
            <input
              type='text'
              required={true}
              onChange={(e) => handleChange(e)}
              value={state.email}
              className='font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-brandPrimary'
              name='email'
            />
            <label
              htmlFor='message'
              className='text-sm text-gray-600 mx-4 mt-4'>
              Message
            </label>
            <textarea
              rows='4'
              type='text'
              required={true}
              value={state.message}
              onChange={(e) => handleChange(e)}
              className='font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-brandPrimary'
              name='message'></textarea>
            {getFormAction()}
          </form>
        </div>
      </motion.div>
    </section>
  );
}

const Notification = ({ type, msg }) => {
  return (
    <div
      className={`rounded-md p-3 mt-2 mx-4 ${
        type === 'ERROR' ? 'bg-[#ec407a]' : 'bg-[#1de9b6]'
      }`}>
      <span className='font-light text-sm'>{msg}</span>
    </div>
  );
};
