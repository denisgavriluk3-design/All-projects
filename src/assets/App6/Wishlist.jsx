import React from 'react'

export default function Wishlist() {
  return (
    <div>
      <div className="container mx-auto mt-20">
        <div className='w-full flex justify-between h-14'>
          <p className='flex items-center float-left text-[22px]'>Wishlist (4)</p>
          <button className=' w-56 h-14 float-right flex bg-white rounded-[4px]'>
            <p className='flex mx-auto items-center text-[18px]'>Move All To Bag</p>
          </button>
        </div>
      </div>
      <div className="flex container mx-auto justify-between mt-15">
       <div className="relative">
          <div className="bg-gray-200 w-67 h-62 group relative">
            <div className="w-8 float-right absolute z-40 mt-1 left-[85%] gap-3">
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="public\icon-delete.png"></img></button>
            </div>
            <img className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" src="src\img\coat.png"/>
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
            <div className="w-8 float-right absolute z-40 mt-1 left-[85%] gap-3">
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="public\icon-delete.png"></img></button>
            </div>
            <img className="   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 " src="src\img\bag.png"/>
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
            <div className="w-8 float-right absolute z-40 mt-1 left-[85%] gap-3">
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="public\icon-delete.png"></img></button>
            </div>
            <img className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" src="src\img\gammaxx.png"/>
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
            <div className="w-8 float-right absolute z-40 mt-1 left-[85%] gap-3">
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="public\icon-delete.png"></img></button>
            </div>
            <img className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" src="src\img\bookself.png"/>
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
       <div className="container mx-auto mt-20">
        <div className='w-full flex justify-between h-14'>
          <div className='flex items-center float-left  gap-3'>
          <div className='w-5 h-10 bg-red-500'/>
          <p className='flex items-center float-left text-[22px]'>Just For You</p>
          </div>
          <button className=' w-37.5 h-14 float-right flex bg-white rounded-[4px]'>
            <p className='flex mx-auto items-center text-[18px]'>See All</p>
          </button>
        </div>
      </div>
       <div className="flex container mx-auto justify-between mt-20">
       <div className="relative">
          <div className="bg-gray-200 w-67 h-62 group relative">
            
            <div className="w-13 h-7 rounded-[4px] absolute mt-1 ml-2.5 bg-red-700 flex z-0">
              <h4 className="items-center mx-auto text-white">-40%</h4>
            </div>
            <div className="w-8 float-right absolute z-40 mt-1 left-[85%] gap-3">
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
  )
}
