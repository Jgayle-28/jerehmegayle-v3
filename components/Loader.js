import React from 'react';

const Loader = () => {
  return (
    <div className='preloader'>
      <p>Loading...Test</p>
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
