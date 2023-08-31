import DoubleChevronRight from 'icons/DoubleChevronRight'
import Plus from 'icons/Plus'
import React from 'react'

function Brand() {
  return (
    <div id='brand-wrapper'>
      {/* <!-- Make sure data-text equals the text you put inside the tags. --> */}
      <p
        className='glitch tracking-wider md:text-2xl font-light mb-0 pb-0'
        data-text='Jerehme'
      >
        {/* <p className='font-light glitch mb-0 pb-0' data-text='Jerehme Gayle'> */}
        Jerehme
      </p>
      <p
        className='glitch md:text-2xl font-light mb-0 pb-0 flex flex-row items-center tracking-widest'
        data-text='Gayle'
      >
        <span className='text-brandPrimary mr-2'>
          <Plus />
        </span>
        Gayle
        {/* <p className='font-light glitch mb-0 pb-0' data-text='Jerehme Gayle'> */}
      </p>
      {/* <span className='sub uppercase'>Full Stack Developer</span> */}
    </div>
  )
}

export default Brand
