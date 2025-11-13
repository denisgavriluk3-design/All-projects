import React from 'react'

export default function Sign_Up() {
  return (
    <div>
      <div className=' w-[90%] h-195 flex mt-15 -mb-30'>
        <div className='w-201 h-195 bg-[rgb(CBE4E8)]  border-hidden'>
          <img src="public\cpam.png"/>
        </div>
        <div className=' h-195 flex flex-col ml-30 '>
        <div className='w-93 h-132 flex-col mt-31.5 '>
          <p className='text-[35px]'>Create an account</p>
          <p className='text-[18px]  mt-2'>Enter your details below</p>
          <input placeholder='Name' className='border-b-2 w-full h-8  pl-2 pr-2 mt-7'  />
          <input placeholder='Email or Phone Number' className='border-b-2 w-full h-8 pl-2 pr-2 mt-7' type="text" />
          <input placeholder='Password' className='border-b-2 w-full h-8  pl-2 pr-2 mt-7' type="text" />
          <button className='flex w-full h-14 bg-red-500 mt-7 rounded-[4px]'><p className='mx-auto items-center flex text-[19px]'>Create Account</p></button>
          <button className='flex w-full h-14 bg-white mt-3 rounded-[4px]'>
            <div className='mx-auto items-center flex gap-3'>
            <img className='w-6 h-6 ' src="public\Icon-Google.png"/>
            <p className='text-[19px]'>Sign up with Google</p>
            </div>
            </button>
            <div className='flex w-70 mx-auto gap-3 mt-5 text-[19px]'>
          <p>Already have account?</p>
          <p className='relative after:content-["] after:block after:w-full after:h-[1px] after:bg-gray-500 after:mt-0.5'>Log in</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
