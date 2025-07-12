import React from 'react'
import { useState } from 'react';


const Input = ({ onclick }) => {

  const [inpt, setInpt] = useState('');

  const handleClick = () => {
    inpt && onclick(inpt)
    setInpt('')
  }

  return (
    <div className="relative z-10 flex justify-center mt-6">
      <div className="flex gap-2 bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-md border border-white/20">
        <input
          type="text"
          value={inpt}
          onChange={(e) => setInpt(e.target.value)}
          placeholder="Enter city"
          className="px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/70 outline-none border border-white/30 focus:ring-2 focus:ring-white/40"
        />
        <button
          onClick={handleClick}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-all"
        >
          Check!
        </button>
      </div>
    </div>
  )
}

export default Input