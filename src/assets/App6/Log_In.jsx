import React from 'react'

export default function Log_In() {
  return (
    <div>
        <div className=' w-[90%] h-195 flex mt-15 -mb-30'>
        <div className='w-201 h-195 bg-[rgb(CBE4E8)]  border-hidden'>
          <img src="public\cpam.png"/>
        </div>
        <div className=' h-195 flex flex-col ml-30 '>
        <div className='w-93 h-132 flex-col mt-31.5 '>
          <p className='text-[35px]'>Log in to Exclusive</p>
          <p className='text-[18px]  mt-2'>Enter your details below</p>
          <input placeholder='Email or Phone Number' className='border-b-2 w-full h-8 pl-2 pr-2 mt-7' type="text" />
          <input placeholder='Password' className='border-b-2 w-full h-8  pl-2 pr-2 mt-7' type="text" />
          <div className='flex w-full justify-between mt-7'>
          <button className='flex w-[45%] h-14 bg-red-500  rounded-[4px]'>
            <p className='mx-auto items-center flex text-[19px]'>Log In</p>
            </button>
          <button className='flex w-[45%] h-14 bg-white  rounded-[4px]'>
            <p className='mx-auto items-center flex text-[19px]'>Forget Password?</p>
            </button>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}
