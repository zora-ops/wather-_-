import React from 'react'

const Nav = () => {
  return (
    <div className='flex w-full'>
      <div className='w-1/2 p-2 '>
      <img src="/icons/partly_cloudy_day_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
      </div>
        <ul className='w-1/2 flex justify-end gap-3'>
          <li className='p-2'>Home</li>
          <li className='p-2'>About</li>
        </ul>
    </div>
  )
}

export default Nav