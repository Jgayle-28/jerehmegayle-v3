import React from 'react'

const LandingSectionHeader = ({ headerName, ...rest }) => {
  return (
    <h1
      className='text-7xl md:text-8xl lg:text-9xl max-w-lg font-bold text-black mt-20 mb-10 md:my-20 md:my-0 md:text-black dark:text-brandPrimary text-left '
      {...rest}
    >
      {headerName}
    </h1>
  )
}

export default LandingSectionHeader
