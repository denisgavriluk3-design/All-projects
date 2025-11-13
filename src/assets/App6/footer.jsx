import React from 'react'

export default function Footer() {
  return (
    <div>
        <div className="bg-black mt-5">
          <div className="container mx-auto flex justify-between text-white mt-35 pt-20">
              <div className="flex flex-col">
                <p className='text-[24px] '>Exclusive</p>
                <p className='text-[18px] mt-4'>Subscribe</p>
                <p className='text-[15px] mt-4'>Get 10% off your first order</p>
                <input placeholder="Enter your email" 
                className="w-54 h-12 pl-3 mt-4  border-1 rounded-[4px] bg-[url('/icon-send.png')]
                 bg-[length:24px_24px] bg-[93%_center] bg-no-repeat "/>
              </div>
              <div className="flex flex-col">
                <p className='text-[18px] mt-4'>Support</p>
                <p className='text-[15px] mt-4'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                <p className='text-[15px] mt-4'>exclusive@gmail.com</p>
                <p className='text-[15px] mt-4'>+88015-88888-9999</p>
              </div>
              <div className="flex flex-col">
                <p className='text-[18px] mt-4'>Account</p>
                <p className='text-[15px] mt-4'>My Account</p>
                <p className='text-[15px] mt-4'>Login / Register</p>
                <p className='text-[15px] mt-4'>Cart</p>
                <p className='text-[15px] mt-4'>Wishlist</p>
                <p className='text-[15px] mt-4'>Shop</p>
              </div>
              <div className="flex flex-col">
                <p className='text-[18px] mt-4'>Quick Link</p>
                <p className='text-[15px] mt-4'>Privacy Policy</p>
                <p className='text-[15px] mt-4'>Terms Of Use</p>
                <p className='text-[15px] mt-4'>FAQ</p>
                <p className='text-[15px] mt-4'>Contact</p>
              </div>
              <div className="flex flex-col">
                <p className='text-[18px] mt-4'>Download App</p>
                <p className='text-[12px] mt-4'>Save $3 with App New User Only</p>
                <div className='w-50 h-20 mt-4 flex justify-between'>
                  <div className=''>
                    <img src="src\img\Qr Code.png" className=''/>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <img src="src\img\GooglePlay.png" className=''/>
                    <img src="src\img\AppStore.png" className=''/>
                  </div>
                </div>
                <div className='flex justify-between w-42 mt-6'>
                  <img src="src\img\Icon-Facebook.png" className='w-6 h-6'/>
                  <img src="src\img\Icon-Twitter.png" className='w-6 h-6'/>
                  <img src="src\img\icon-instagram.png" className='w-6 h-6'/>
                  <img src="src\img\Icon-Linkedin.png" className='w-6 h-6'/>
                </div>
              </div>
          </div>
          <hr className="border-t border-gray-400 w-full mt-15"/>
          <div className='flex mx-auto w-84 mt-5'>
            <img src="src\img\icon-copyright.png" className='w-5 h-5'/>
            <h6 className='text-white'>Copyright Rimel 2022. All right reserved</h6>
          </div>
         </div>
    </div>
  )
}
