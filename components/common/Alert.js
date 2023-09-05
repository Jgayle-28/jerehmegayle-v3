import React, { Children } from 'react'

function Alert({ type, children }) {
  const bgColor = type === 'success' ? 'bg-brandPrimary/10' : 'bg-red-700/10'
  const borderColor =
    type === 'success' ? 'border-brandPrimary' : 'border-red-700/75'
  return (
    <div
      className={`p-4 w-full ${bgColor} text-sm text-white rounded-md shadow-lg mb-3 border ${borderColor}`}
      role='alert'
    >
      {children}
    </div>
  )
}

export default Alert
