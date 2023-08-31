import React, { Children } from 'react'

function Alert({ type, children }) {
  const bgColor = type === 'success' ? 'bg-green-500/10' : 'bg-red-700/25'
  return (
    <div
      className={`p-4 w-full ${bgColor} text-sm text-white rounded-md shadow-lg mb-3`}
      role='alert'
    >
      {children}
    </div>
  )
}

export default Alert
