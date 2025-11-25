import React from 'react'

export default function Error() {
  return (
    <div>
      <div className='container mx-auto'>
        <div className='flex w-33.5 h-5.25 justify-between mt-20'>
          <p>Home</p>
          <p>/</p>
          <p>404 Error</p>
        </div>
        <p className='text-center text-9xl mt-10'>404 Not Found</p>
        <p className='text-center text-[17px] mt-10'>Your visited page not found. You may go home page.</p>
        <button className='mx-auto w-63.5 h-14 bg-red-700 flex border-2 rounded-[4px] mt-15'><p className='mx-auto flex items-center text-[17px]'>Back to home page</p></button>
      </div>
    </div>
  )
}
