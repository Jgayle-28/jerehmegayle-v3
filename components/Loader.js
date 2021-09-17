import React from 'react';
import '../styles/Home.module.css';

const Loader = () => {
  return (
    <div className='preloader'>
      <div className='folding-cube'>
        <div className='cube1 cube'></div>
        <div className='cube2 cube'></div>
        <div className='cube4 cube'></div>
        <div className='cube3 cube'></div>
      </div>
    </div>
  );
};

export default Loader;
