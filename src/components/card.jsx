import React from 'react'

const Card = ({param1, children}) => {
  return (
    <div className='w-[300px] sm:w-[200px] backdrop-blur-lg rounded-xl shadow-lg border border-white/30 p-6'>
      <div className=''>
        <h1>{param1}</h1>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Card