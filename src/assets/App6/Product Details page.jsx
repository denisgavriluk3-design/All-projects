import React from 'react'

export default function Product_Details_page() {
  return (
    <div>
        <div className='container mx-auto'>
            <div className='flex w-88.25 mt-20 justify-between'>
                <p>Account</p>
                <p>/</p>
                <p>Gaming</p>
                <p>/</p>
                <p>Havic HV G-92 Gamepad</p>
            </div>
            <div className='flex justify-between mt-20'>
                <div className='w-175 h-150 flex justify-between'>
                    <div className='w-42.5 h-150 flex-col flex justify-between'>
                        <div className='w-42.5 h-34.5 bg-gray-300 rounded-[8px] items-center flex'>
                            <img src="public\image gamepad 1.png" className='flex items-center mx-auto w-30.25 h-28.5'/>
                        </div>
                        <div className='w-42.5 h-34.5 bg-gray-300 rounded-[8px] items-center flex'>
                            <img src="public\image gamepad 2.png" className='flex items-center mx-auto w-30.25 h-28.5'/>
                        </div>
                        <div className='w-42.5 h-34.5 bg-gray-300 rounded-[8px] items-center flex'>
                            <img src="public\image gamepad 3.png" className='flex items-center mx-auto w-30.25 h-28.5'/>
                        </div>
                        <div className='w-42.5 h-34.5 bg-gray-300 rounded-[8px] items-center flex'>
                            <img src="public\image gamepad 4.png" className='flex  mx-auto w-30.25 h-28.5'/>
                        </div>
                    </div>
                    <div className='w-125 h-150  bg-gray-300 rounded-[8px] items-center flex'>
                        <img src="public\image gamepad 5.png" className='flex  mx-auto w-111.5 h-78.75'/>
                    </div>
                </div>
                <div className='w-100 h-150 flex-col'>
                    <p className=' text-[24px]'>Havic HV G-92 Gamepad</p>
                    <div className='w-72.5 h-5.25 flex justify-between mt-2'>
                        <div className='w-25 h-5 flex justify-between mt-1.25'>
                        <img className="w-4 h-4 cursor-pointer" src="src\img\star.png"/>
                        <img className="w-4 h-4 cursor-pointer" src="src\img\star.png"/>
                        <img className="w-4 h-4 cursor-pointer" src="src\img\star.png"/>
                        <img className="w-4 h-4 cursor-pointer" src="src\img\star.png"/>
                        <img className="w-4 h-4 cursor-pointer" src="src\img\star.png"/>
                        </div>
                        <p>(150 Reviews)</p>
                        <hr className='w-0.5 h-full bg-gray-500'/>
                        <p className='text-green-400'>In Stock</p>
                    </div>
                    <p className='mt-2 text-[24px]'>$192.00</p>
                    <p className='mt-3 '>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive 
                        for easy bubble free install & mess free removal Pressure sensitive.
                    </p>
                    <hr className='w-full h-1 bg-gray-500 mt-4'/>
                    <div className='w-36.25 h-5 flex justify-between mt-4'>
                        <p className='text-[20px]'>Colours:</p>
                        <div className='w-12 h-5 justify-between flex mt-2'>
                            <div className='w-5 h-5 bg-gray-600 border-2 rounded-full'/>
                            <div className='w-5 h-5 bg-red-700 border-2 rounded-full'/>
                        </div>
                    </div>
                    <div className='w-74 h-8 flex justify-between items-center mt-6'>
                        <p className='text-[20px]'>Size:</p>
                        <div className='w-56 h-8 flex justify-between'>
                            <div className='w-8 h-8 flex items-center border-2 rounded-[4px]'><p className='mx-auto text-[17px]'>XS</p></div>
                            <div className='w-8 h-8 flex items-center border-2 rounded-[4px]'><p className='mx-auto text-[17px]'>XS</p></div>
                            <div className='w-8 h-8 flex items-center border-2 rounded-[4px]'><p className='mx-auto text-[17px]'>XS</p></div>
                            <div className='w-8 h-8 flex items-center border-2 rounded-[4px]'><p className='mx-auto text-[17px]'>XS</p></div>
                            <div className='w-8 h-8 flex items-center border-2 rounded-[4px]'><p className='mx-auto text-[17px]'>XS</p></div>
                        </div>
                    </div>
                    <div className='flex w-100 h-11 justify-between mt-6'>
                        <div className='w-39.5 h-11 flex rounded-[8px]'>
                            <button className='border-2 border-r-0 flex items-center w-10 h-11 bg-white rounded-l-[8px]'><img className='mx-auto' src="public\icon-minus.png"/></button>
                            <div className='w-20 h-11 border-2 flex items-center bg-white'><p className='mx-auto text-[20px]'>2</p></div>
                            <button className='border-2 border-l-0 flex items-center w-10 h-11 bg-red-700 rounded-r-[8px]'><img className='mx-auto' src="public\icon-plus.png"/></button>
                        </div>
                        <button className='flex items-center w-41.25 h-11 bg-red-700 border-2 rounded-[8px]'><p className='mx-auto text-[17px]'>Buy Now</p></button>
                        <button className='flex items-center w-10 h-10 bg-white border-2 rounded-[8px]'><img src="public\Wishlist.png" className='mx-auto'/></button>
                    </div>
                    <div className='w-100 h-45 bg-white border-2 rounded-[8px] mt-12'>
                        <div className='flex w-95 h-12.5 items-center justify-between mx-auto mt-4'>
                            <img className='w-10 h-10' src="public\icon-delivery.png"/>
                            <div className='flex-col flex justify-between w-82 h-12.5 text-[16px]'>
                                <p>Free Delivery</p>
                                <p>Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <hr className='w-full h-1 mt-4'/>
                        <div className='flex w-95 h-12.5 items-center justify-between mx-auto mt-4'>
                            <img className='w-10 h-10' src="public\Icon-return.png"/>
                            <div className='flex-col flex justify-between w-82 h-12.5 text-[16px]'>
                                <p>Free Delivery</p>
                                <p>Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-35 h-10 flex items-center justify-between mt-25'>
                <div className='w-5 h-10 bg-red-700 border-1 rounded-[4px]'/>
                <p className='text-[17px]'>Related Item</p>
            </div>
            <div className="flex container mx-auto justify-between mt-15">
       <div className="relative">
          <div className="bg-gray-200 w-67 h-62 group relative">
            
            <div className="w-13 h-7 rounded-[4px] absolute mt-1 ml-2.5 bg-red-700 flex z-0">
              <h4 className="items-center mx-auto text-white">-40%</h4>
            </div>
            <div className="w-8 float-right absolute z-40 mt-1 left-[85%] gap-3">
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\serce.png"></img></button>
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\Quick View.png"></img></button>
            </div>
            <img className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" src="src\img\gamepad.png"/>
            <div className="z-50 absolute top-[100%] -translate-y-[100%] hidden group-hover:flex bg-black text-white w-full h-10 ">
              <h3 className="flex items-center mx-auto">Add To Cart</h3>
            </div>
          </div>
          <div>
            <div className="mt-2">
              <h4 className="text-[22px]">HAVIT HV-G92 Gamepad</h4>
              <div className="flex gap-2">
                <h6 className=" text-[19px]">$120</h6>
                <h6 className=" text-[17px] line-through">$160</h6>
              </div>
              <div className="flex gap-1 w-38 h-5 mt-2">
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <h4 className=" text-[19px] flex items-center mx-auto">(88)</h4>
              </div>
            </div>
          </div>
       </div>
        <div className="relative">
          <div className="bg-gray-200 w-67 h-62 group  relative">
            <div className="w-13 h-7 rounded-[4px] absolute mt-1 ml-2.5 bg-red-700 flex">
              <h4 className="items-center mx-auto text-white">-35%</h4>
            </div>
            <div className="w-8 float-right absolute z-40 mt-1 left-[85%] gap-3">
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\serce.png"></img></button>
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\Quick View.png"></img></button>
            </div>
            <img className="   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 " src="src\img\klava.png"/>
            <div className="z-50 absolute top-[100%] -translate-y-[100%] hidden group-hover:flex bg-black text-white w-full h-10 ">
              <h3 className="flex items-center mx-auto">Add To Cart</h3>
            </div>
          </div>
          <div>
            <div className="mt-2">
              <h4 className="text-[22px]">AK-900 Wired Keyboard</h4>
              <div className="flex gap-2">
                <h6 className=" text-[19px]">$960</h6>
                <h6 className=" text-[17px] line-through">$1160</h6>
              </div>
              <div className="flex gap-1 w-38 h-5 mt-2">
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\starEmpty.png"/>
                <h4 className=" text-[19px] flex items-center mx-auto">(75)</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gray-200 w-67 h-62 group relative">
            
            <div className="w-13 h-7 rounded-[4px] absolute mt-1 ml-2.5 bg-red-700 flex z-0">
              <h4 className="items-center mx-auto text-white">-30%</h4>
            </div>
            <div className="w-8 float-right absolute z-40 mt-1 left-[85%] gap-3">
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\serce.png"></img></button>
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\Quick View.png"></img></button>
            </div>
            <img className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" src="src\img\windo.png"/>
            <div className="z-50 absolute top-[100%] -translate-y-[100%] hidden group-hover:flex bg-black text-white w-full h-10 ">
              <h3 className="flex items-center mx-auto">Add To Cart</h3>
            </div>
          </div>
          <div>
            <div className="mt-2">
              <h4 className="text-[22px]">IPS LCD Gaming Monitor</h4>
              <div className="flex gap-2">
                <h6 className=" text-[19px]">$370</h6>
                <h6 className=" text-[17px] line-through">$400</h6>
              </div>
              <div className="flex gap-1 w-38 h-5 mt-2">
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <h4 className=" text-[19px] flex items-center mx-auto">(99)</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gray-200 w-67 h-62 group relative">
            
            <div className="w-13 h-7 rounded-[4px] absolute mt-1 ml-2.5 bg-red-700 flex z-0">
              <h4 className="items-center mx-auto text-white">-25%</h4>
            </div>
            <div className="w-8 float-right absolute z-40 mt-1 left-[85%] gap-3">
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\serce.png"></img></button>
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\Quick View.png"></img></button>
            </div>
            <img className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" src="src\img\ctul.png"/>
            <div className="z-50 absolute top-[100%] -translate-y-[100%] hidden group-hover:flex bg-black text-white w-full h-10 ">
              <h3 className="flex items-center mx-auto">Add To Cart</h3>
            </div>
          </div>
          <div>
            <div className="mt-2">
              <h4 className="text-[22px]">S-Series Comfort Chair </h4>
              <div className="flex gap-2">
                <h6 className=" text-[19px]">$375</h6>
                <h6 className=" text-[17px] line-through">$400</h6>
              </div>
              <div className="flex gap-1 w-38 h-5 mt-2">
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\starHalfFull.png"/>
                <h4 className=" text-[19px] flex items-center mx-auto">(99)</h4>
              </div>
            </div>
          </div>
        </div>
       </div>
        </div>
    </div>
  )
}
