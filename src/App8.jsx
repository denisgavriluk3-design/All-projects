import React from 'react'

export default function App8() {
  return (
    <div className="min-h-screen flex">
        <div className="w-1/2 bg-gradient-to-b from-indigo-500 to-pink-500 flex items-center justify-center">
         <div className='text-center px-6'>
            <h1 className="text-4xl font-bolt text-white mb-4">TAILWIND TEST</h1>
            <p className="mb-6 text-white/90">if background is red - Tailwind works</p>
            <button className=' bg-white text-indigo-500 px-5 py-2 rounded-full font-semibold hover:bg-indigo-100 transition'>Tab for more</button>
         </div>
        </div>
        <div className='w-1/2 flex items-center justify-center bg-gray-100'>
            <h2 className='text-2xl font-semibold text-gray-700'>тут будет твой контент</h2>
        </div>
        <div>
          
        </div>
    </div>
  )
}
