import React, { useEffect, useState } from 'react';
import { API_ENDPOINTS } from '../../config/api';

export default function HomePage() {
  const [groups, setGroups] = useState([]);
  const [banners, setBanners] = useState({});
  const [activeBannerIndex, setActiveBannerIndex] = useState(0);
  const [loading, setLoading] = useState(true);
const targetDate = new
Date("2025-12-31T00:00:00").getTime();
const [timeLeft, setTimeLeft] = useState({});
useEffect(() => {
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      clearInterval(timer);
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      return;
    }

    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor(
      (distance % (1000*60*60*24))/(1000*60*60)
    );
    const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
    const seconds = Math.floor((distance % (1000*60))/1000);

    setTimeLeft({days, hours, minutes, seconds});
  },1000);

  return () => clearInterval(timer);
},[targetDate]);

// const [activeDiv, setActiveDiv] = useState(0);{products.image}
// const divs = [
{<div className="flex container mx-auto justify-between mt-10">
  <div className="relative">
          <div className="bg-gray-200 w-67 h-62 group relative">
            
            <div className="w-13 h-7 rounded-[4px] absolute mt-1 ml-2.5 bg-red-700 flex z-0">
              <h4 className="items-center mx-auto text-white">-40%</h4>
            </div>
            <div className="w-8 float-right absolute z-40 mt-1 left-[85%] gap-3">
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\serce.png"></img></button>
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\Quick View.png"></img></button>
            </div>
            <img className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" src=""/>
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
       </div>,
        <div className="flex container mx-auto justify-between mt-15">
       <div className="relative">
          <div className="bg-gray-200 w-67 h-62 group relative">
            <div className="w-8 float-right absolute z-40 mt-1 left-[85%] gap-3">
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\serce.png"></img></button>
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\Quick View.png"></img></button>
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
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\serce.png"></img></button>
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\Quick View.png"></img></button>
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
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\serce.png"></img></button>
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\Quick View.png"></img></button>
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
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\serce.png"></img></button>
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\Quick View.png"></img></button>
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
       </div>,
       <div className="flex container mx-auto justify-between mt-15">
       <div className="relative">
          <div className="bg-gray-200 w-67 h-62 group relative">
            <div className="w-8 float-right absolute z-40 mt-1 left-[85%] gap-3">
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\serce.png"></img></button>
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\Quick View.png"></img></button>
            </div>
            <img className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" src="src\img\dogfood.png"/>
            <div className="z-50 absolute top-[100%] -translate-y-[100%] hidden group-hover:flex bg-black text-white w-full h-10 ">
              <h3 className="flex items-center mx-auto">Add To Cart</h3>
            </div>
          </div>
          <div>
            <div className="mt-2">
              <h4 className="text-[22px]">Breed Dry Dog Food</h4>
              <div className="flex gap-1 w-38 h-5 mt-4">
                  <h6 className=" text-[19px] flex items-center mr-2">$100</h6>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\starEmpty.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\starEmpty.png"/>
                <h4 className=" text-[19px] flex items-center mx-auto">(35)</h4>
              </div>
            </div>
          </div>
       </div>
        <div className="relative">
          <div className="bg-gray-200 w-67 h-62 group  relative">
            <div className="w-8 float-right absolute z-40 mt-1 left-[85%] gap-3">
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\serce.png"></img></button>
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\Quick View.png"></img></button>
            </div>
            <img className="   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 " src="src\img\camera.png"/>
            <div className="z-50 absolute top-[100%] -translate-y-[100%] hidden group-hover:flex bg-black text-white w-full h-10 ">
              <h3 className="flex items-center mx-auto">Add To Cart</h3>
            </div>
          </div>
          <div>
            <div className="mt-2">
              <h4 className="text-[22px]">CANON EOS DSLR Camera</h4>
              <div className="flex gap-1 w-38 h-5 mt-4">
                  <h6 className=" text-[19px] flex items-center mr-2">$360</h6>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\starEmpty.png"/>
                <h4 className=" text-[19px] flex items-center mx-auto">(95)</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gray-200 w-67 h-62 group relative">
            <div className="w-8 float-right absolute z-40 mt-1 left-[85%] gap-3">
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\serce.png"></img></button>
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\Quick View.png"></img></button>
            </div>
            <img className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" src="src\img\laptop.png"/>
            <div className="z-50 absolute top-[100%] -translate-y-[100%] hidden group-hover:flex bg-black text-white w-full h-10 ">
              <h3 className="flex items-center mx-auto">Add To Cart</h3>
            </div>
          </div>
          <div>
            <div className="mt-2">
              <h4 className="text-[22px]">ASUS FHD Gaming Laptop</h4>
              <div className="flex gap-1 w-38 h-5 mt-4">
                  <h6 className=" text-[19px] flex items-center mr-2">$700</h6>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <h4 className=" text-[19px] flex items-center mx-auto">(325)</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gray-200 w-67 h-62 group relative">
            <div className="w-8 float-right absolute z-40 mt-1 left-[85%] gap-3">
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\serce.png"></img></button>
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\Quick View.png"></img></button>
            </div>
            <img className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" src="src\img\shampun.png"/>
            <div className="z-50 absolute top-[100%] -translate-y-[100%] hidden group-hover:flex bg-black text-white w-full h-10 ">
              <h3 className="flex items-center mx-auto">Add To Cart</h3>
            </div>
          </div>
          <div>
            <div className="mt-2">
              <h4 className="text-[22px]">Curology Product Set</h4>
              <div className="flex gap-1 w-38 h-5 mt-4">
                  <h6 className=" text-[19px] flex items-center mr-2">$500</h6>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\starEmpty.png"/>
                <h4 className=" text-[19px] flex items-center mx-auto">(145)</h4>
              </div>
            </div>
          </div>
        </div>
       </div>};
const handleClick = () => {
  setActiveDiv((prev) => (prev + 1) % divs.length);
};
  const handleClick2 = () => {
  setActiveDiv((prev) => (prev - 1 + divs.length) % divs.length);
};

return (
    <div>
        

      

      <div className=" container mx-auto flex">
        <div className="float-left w-60 h-85 space-y-2.5 mt-10 text-[19px] ">
          <p>Woman’s Fashion</p>
          <p>Men’s Fashion</p>
          <p>Electronics</p>
          <p>Home & Lifestyle</p>
          <p>Medicine</p>
          <p>Sports & Outdoor</p>
          <p>Baby’s & Toys</p>
          <p>Groceries & Pets</p>
          <p>Health & Beauty</p>
          
        </div>
        <div className="w-[2px] h-95 bg-gray-400 ml-2"></div>
        <div className="float-right w-225 h-[344px] bg-black ml-12 mt-12 relative">
          <img className="float-right z-1 relative w-1/2 h-full" src="src\img\aiwon.png"></img>
          <div className="ml-15 mt-14 flex items-center gap-5">
            <img src="src\img\1200px-Apple_gray_logo 1.png"/>
            <h6 className="text-white">iPhone 14 Series</h6>
          </div>
          <h1 className="text-white ml-15 text-5xl mt-7">Up to 10% off Voucher</h1>
          <div className="flex mt-10">
          <div className="w-20 h-7 ml-15">
            <h4 className="text-white">Shop Now</h4>
            <hr className="bg-gray-300 w-20 h-0.25"></hr>
          </div>
          <img className="w-6 " src="src\img\Vector3.png"></img>
          </div>
          <div className="flex gap-3 w-25 h-3 mx-auto z-10 relative top-3 left-53">
            <button className="w-3 h-3 rounded-full bg-gray-300 border- cursor-pointer"/>
            <button className="w-3 h-3 rounded-full bg-gray-300 border- cursor-pointer"/>
            <button className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"/>
            <button className="w-3 h-3 rounded-full bg-gray-300 border- cursor-pointer"/>
            <button className="w-3 h-3 rounded-full bg-gray-300 border- cursor-pointer"/>
          </div>
          

        </div>
      </div>
      <div className="container flex mx-auto mt-35">
        <div className="flex gap-20 w1/2 h-30">
            <div className=" gap-9 w-">
              <div className="flex items-center gap-3">
              <div className="w-6 h-12 bg-red-800"/>
              <h5>Today’s</h5>
              </div>
              <h1 className="text-4xl mt-6 ">Flash Sales</h1>
            </div>
            <div>
              <div className="flex  mt-15 w-75 h-12 gap-2">
                <div>
                  <p>Days</p>
                  <h3 className="text-3xl font-bold">{timeLeft.days}</h3>
                </div>
                <h1 className="text-3xl text-red-500 flex items-center">:</h1>
                <div>
                  <p>Hours</p>
                  <h3 className="text-3xl font-bold">{timeLeft.hours}</h3>
                </div>
                <h1 className="text-3xl text-red-500 flex items-center">:</h1>
                <div>
                  <p>Minutes</p>
                  <h3 className="text-3xl font-bold">{timeLeft.minutes}</h3>
                </div>
                <h1 className="text-3xl text-red-500 flex items-center">:</h1>
                <div>
                  <p>Seconds</p>
                  <h3 className="text-3xl font-bold">{timeLeft.seconds}</h3>
                </div>
              </div>
            </div>
        </div>
        <div className="float-left mt-20 ml-150">
          <button onClick={handleClick2} className="w-12 h-12 rounded-full bg-gray-200">
            <img className="flex items-center mx-auto" src="src\img\5.png"></img>
          </button>
          <button onClick={handleClick2} className="w-12 h-12 rounded-full bg-gray-200 ml-2">
            <img className="flex items-center mx-auto" src="src\img\6.png"></img>
          </button>
        </div>
      </div>
      {divs[activeDiv]}
        <button className="flex mx-auto w-58 h-14 bg-red-800 rounded-[4px] mt-15">
          <h3 className="flex items-center mx-auto">View All Products</h3>
        </button>
        <hr className="border-t border-gray-400 w-full mt-15"/>
        <div className="container mx-auto mt-15 flex">
          <div className=" gap-9 w-">
              <div className="flex items-center gap-3">
              <div className="w-6 h-12 bg-red-800"/>
              <h5>Categories</h5>
              </div>
              <h1 className="text-4xl mt-6 ">Browse By Category</h1>
            </div>
            <div>
              <div className="float-left mt-20 ml-209">
          <button onClick={handleClick} className="w-12 h-12 rounded-full bg-gray-200">
            <img className="flex items-center mx-auto" src="src\img\5.png"></img>
          </button>
          <button className="w-12 h-12 rounded-full bg-gray-200 ml-2">
            <img className="flex items-center mx-auto" src="src\img\6.png"></img>
          </button>
         </div>
            </div>
        </div>
        <div className="container mx-auto flex justify-between mt-15">
          <div className="flex items-center justify-center w-42 h-36 bg-white shadow-[inset_0_0_0_2px_black] rounded-lg">
            <div className="flex flex-col items-center justify-center h-20 gap-2">
              <img src="src\img\Category-CellPhone.png"/>
              <p>Phones</p>
            </div>
          </div>
          <div className="flex items-center justify-center w-42 h-36 bg-white shadow-[inset_0_0_0_2px_black] rounded-lg">
            <div className="flex flex-col items-center justify-center h-20 gap-2">
              <img src="src\img\Category-Computer.png"/>
              <p>Computers</p>
            </div>
          </div>
          <div className="flex items-center justify-center w-42 h-36 bg-white shadow-[inset_0_0_0_2px_black] rounded-lg">
            <div className="flex flex-col items-center justify-center h-20 gap-2">
              <img src="src\img\Category-SmartWatch.png"/>
              <p>SmartWatch</p>
            </div>
          </div>
          <div className="flex items-center justify-center w-42 h-36 bg-red-800 shadow-[inset_0_0_0_2px_black] rounded-lg">
            <div className="flex flex-col items-center justify-center h-20 gap-2">
              <img src="src\img\Category-Camera.png"/>
              <p>Camera</p>
            </div>
          </div>
          <div className="flex items-center justify-center w-42 h-36 bg-white shadow-[inset_0_0_0_2px_black] rounded-lg">
            <div className="flex flex-col items-center justify-center h-20 gap-2">
              <img src="src\img\Category-Headphone.png"/>
              <p>HeadPhones</p>
            </div>
          </div>
          <div className="flex items-center justify-center w-42 h-36 bg-white shadow-[inset_0_0_0_2px_black] rounded-lg">
            <div className="flex flex-col items-center justify-center h-20 gap-2">
              <img src="src\img\Category-Gamepad.png"/>
              <p>Gaming</p>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-400 w-full mt-15"/>
        <div className="container mx-auto mt-15 flex">
          <div className=" gap-9 ">
              <div className="flex items-center gap-3">
              <div className="w-6 h-12 bg-red-800"/>
              <h5>Categories</h5>
              </div>
              <p className="text-4xl mt-6 ">Best Selling Products</p>
            </div>
            <div>
              <div className="float-left mt-10 ml-197">
          <button className="flex mx-auto w-40 h-19 bg-red-800 rounded-[4px] ">
          <h3 className="flex items-center mx-auto">View All</h3>
        </button>
         </div>
            </div>
        </div>
        <div className="flex container mx-auto justify-between mt-15">
       <div className="relative">
          <div className="bg-gray-200 w-67 h-62 group relative">
            <div className="w-8 float-right absolute z-40 mt-1 left-[85%] gap-3">
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\serce.png"></img></button>
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\Quick View.png"></img></button>
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
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\serce.png"></img></button>
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\Quick View.png"></img></button>
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
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\serce.png"></img></button>
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\Quick View.png"></img></button>
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
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\serce.png"></img></button>
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\Quick View.png"></img></button>
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
       <div className="container mx-auto bg-black flex mt-25">
          <div className="w-[45%] ml-[4%]">
            <h6 className="text-green-500 pt-15">Categories</h6>
            <h1 className="text-white text-4xl mt-10">Enhance Your<br></br> Music Experience</h1>
            <div className="flex gap-6 mt-10">
              <div className="w-15 h-15 rounded-full bg-white flex">
                <div className="flex   flex-col items-center mx-auto w-8 h-6 ">
                  <h6 className="m-0 p-0 mt-2">05</h6>
                  <h6 className="m-0 p-0 -mt-2 text-[14px]">Days</h6>
                </div>
              </div>
              <div className="w-15 h-15 rounded-full bg-white flex">
                <div className="flex   flex-col items-center mx-auto w-8 h-6 ">
                  <h6 className="m-0 p-0 mt-2">23</h6>
                  <h6 className="m-0 p-0 -mt-2 text-[14px]">Hours</h6>
                </div>
              </div>
              <div className="w-15 h-15 rounded-full bg-white flex">
                <div className="flex   flex-col items-center mx-auto w-8 h-6 ">
                  <h6 className="m-0 p-0 mt-2">59</h6>
                  <h6 className="m-0 p-0 -mt-2 text-[14px]">Minutes</h6>
                </div>
              </div>
              <div className="w-15 h-15 rounded-full bg-white flex">
                <div className="flex   flex-col items-center mx-auto w-8 h-6 ">
                  <h6 className="m-0 p-0 mt-2">35</h6>
                  <h6 className="m-0 p-0 -mt-2 text-[14px]">Seconds</h6>
                </div>
              </div>
            </div>
            <div className="">
            <button className="w-43 h-14 bg-green-500 rounded-[4px] mt-10 flex mb-15">
              <p className="flex items-center mx-auto">Buy Now!</p>
            </button>
            </div>
          </div>
          <div className="w-[47%] relative overflow-hidden">
            <div className=" absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-115 bg-gray-300 opacity-10 rounded-full"/>
            <img className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="src\img\BOOMBOX.png"/>
          </div>
       </div>
        <div className="container mx-auto mt-15 flex">
          <div className=" gap-9 w-">
              <div className="flex items-center gap-3">
              <div className="w-6 h-12 bg-red-800"/>
              <h5>Categories</h5>
              </div>
              <h1 className="text-4xl mt-6 ">Browse By Category</h1>
            </div>
            <div>
              <div className="float-left mt-20 ml-209">
          <button className="w-12 h-12 rounded-full bg-gray-200">
            <img className="flex items-center mx-auto" src="src\img\5.png"></img>
          </button>
          <button className="w-12 h-12 rounded-full bg-gray-200 ml-2">
            <img className="flex items-center mx-auto" src="src\img\6.png"></img>
          </button>
         </div>
            </div>
        </div>
        <div className="flex container mx-auto justify-between mt-15">
       <div className="relative">
          <div className="bg-gray-200 w-67 h-62 group relative">
            <div className="w-8 float-right absolute z-40 mt-1 left-[85%] gap-3">
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\serce.png"></img></button>
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\Quick View.png"></img></button>
            </div>
            <img className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" src="src\img\dogfood.png"/>
            <div className="z-50 absolute top-[100%] -translate-y-[100%] hidden group-hover:flex bg-black text-white w-full h-10 ">
              <h3 className="flex items-center mx-auto">Add To Cart</h3>
            </div>
          </div>
          <div>
            <div className="mt-2">
              <h4 className="text-[22px]">Breed Dry Dog Food</h4>
              <div className="flex gap-1 w-38 h-5 mt-4">
                  <h6 className=" text-[19px] flex items-center mr-2">$100</h6>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\starEmpty.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\starEmpty.png"/>
                <h4 className=" text-[19px] flex items-center mx-auto">(35)</h4>
              </div>
            </div>
          </div>
       </div>
        <div className="relative">
          <div className="bg-gray-200 w-67 h-62 group  relative">
            <div className="w-8 float-right absolute z-40 mt-1 left-[85%] gap-3">
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\serce.png"></img></button>
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\Quick View.png"></img></button>
            </div>
            <img className="   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 " src="src\img\camera.png"/>
            <div className="z-50 absolute top-[100%] -translate-y-[100%] hidden group-hover:flex bg-black text-white w-full h-10 ">
              <h3 className="flex items-center mx-auto">Add To Cart</h3>
            </div>
          </div>
          <div>
            <div className="mt-2">
              <h4 className="text-[22px]">CANON EOS DSLR Camera</h4>
              <div className="flex gap-1 w-38 h-5 mt-4">
                  <h6 className=" text-[19px] flex items-center mr-2">$360</h6>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\starEmpty.png"/>
                <h4 className=" text-[19px] flex items-center mx-auto">(95)</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gray-200 w-67 h-62 group relative">
            <div className="w-8 float-right absolute z-40 mt-1 left-[85%] gap-3">
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\serce.png"></img></button>
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\Quick View.png"></img></button>
            </div>
            <img className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" src="src\img\laptop.png"/>
            <div className="z-50 absolute top-[100%] -translate-y-[100%] hidden group-hover:flex bg-black text-white w-full h-10 ">
              <h3 className="flex items-center mx-auto">Add To Cart</h3>
            </div>
          </div>
          <div>
            <div className="mt-2">
              <h4 className="text-[22px]">ASUS FHD Gaming Laptop</h4>
              <div className="flex gap-1 w-38 h-5 mt-4">
                  <h6 className=" text-[19px] flex items-center mr-2">$700</h6>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <h4 className=" text-[19px] flex items-center mx-auto">(325)</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gray-200 w-67 h-62 group relative">
            <div className="w-8 float-right absolute z-40 mt-1 left-[85%] gap-3">
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\serce.png"></img></button>
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\Quick View.png"></img></button>
            </div>
            <img className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" src="src\img\shampun.png"/>
            <div className="z-50 absolute top-[100%] -translate-y-[100%] hidden group-hover:flex bg-black text-white w-full h-10 ">
              <h3 className="flex items-center mx-auto">Add To Cart</h3>
            </div>
          </div>
          <div>
            <div className="mt-2">
              <h4 className="text-[22px]">Curology Product Set</h4>
              <div className="flex gap-1 w-38 h-5 mt-4">
                  <h6 className=" text-[19px] flex items-center mr-2">$500</h6>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\starEmpty.png"/>
                <h4 className=" text-[19px] flex items-center mx-auto">(145)</h4>
              </div>
            </div>
          </div>
        </div>
       </div>
       <div className="flex container mx-auto justify-between mt-20">
       <div className="relative">
            <div className="w-13 h-7 rounded-[4px] absolute mt-1 ml-2.5 bg-green-500 flex z-10">
              <h4 className="items-center mx-auto text-white">NEW</h4>
            </div>
          <div className="bg-gray-200 w-67 h-62 group relative">
            <div className="w-8 float-right absolute z-40 mt-1 left-[85%] gap-3">
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\serce.png"></img></button>
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\Quick View.png"></img></button>
            </div>
            <img className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" src="src\img\car.png"/>
            <div className="z-50 absolute top-[100%] -translate-y-[100%] hidden group-hover:flex bg-black text-white w-full h-10 ">
              <h3 className="flex items-center mx-auto">Add To Cart</h3>
            </div>
          </div>
          <div>
            <div className="mt-2">
              <h4 className="text-[22px]">Kids Electric Car</h4>
              <div className="flex gap-1 w-38 h-5 mt-4">
                  <h6 className=" text-[19px] flex items-center mr-2">$960</h6>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <h4 className=" text-[19px] flex items-center mx-auto">(65)</h4>
              </div>
              <div className="flex gap-1 mt-2">
                <div className="w-5 h-5 rounded-full bg-red-500 hover:border-black border-2"/>
                <div className="w-5 h-5 rounded-full bg-red-700 hover:border-black border-2"/>
              </div>
            </div>
          </div>
       </div>
        <div className="relative">
          <div className="bg-gray-200 w-67 h-62 group  relative">
            <div className="w-8 float-right absolute z-40 mt-1 left-[85%] gap-3">
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\serce.png"></img></button>
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\Quick View.png"></img></button>
            </div>
            <img className="   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 " src="src\img\boot.png"/>
            <div className="z-50 absolute top-[100%] -translate-y-[100%] hidden group-hover:flex bg-black text-white w-full h-10 ">
              <h3 className="flex items-center mx-auto">Add To Cart</h3>
            </div>
          </div>
          <div>
            <div className="mt-2">
              <h4 className="text-[22px]">Jr. Zoom Soccer Cleats</h4>
              <div className="flex gap-1 w-38 h-5 mt-4">
                  <h6 className=" text-[19px] flex items-center mr-2">$1160</h6>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <h4 className=" text-[19px] flex items-center mx-auto">(35)</h4>
              </div>
              <div className="flex gap-1 mt-2">
                <div className="w-5 h-5 rounded-full bg-yellow-500 hover:border-black border-2"/>
                <div className="w-5 h-5 rounded-full bg-red-700 hover:border-black border-2"/>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-13 h-7 rounded-[4px] absolute mt-1 ml-2.5 bg-green-500 flex z-10">
              <h4 className="items-center mx-auto text-white">NEW</h4>
            </div>
          <div className="bg-gray-200 w-67 h-62 group relative">
            <div className="w-8 float-right absolute z-40 mt-1 left-[85%] gap-3">
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\serce.png"></img></button>
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\Quick View.png"></img></button>
            </div>
            <img className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" src="src\img\blackgamepad.png"/>
            <div className="z-50 absolute top-[100%] -translate-y-[100%] hidden group-hover:flex bg-black text-white w-full h-10 ">
              <h3 className="flex items-center mx-auto">Add To Cart</h3>
            </div>
          </div>
          <div>
            <div className="mt-2">
              <h4 className="text-[22px]">GP11 Shooter USB Gamepad</h4>
                <div className="flex gap-1 w-38 h-5 mt-4">
                  <h6 className=" text-[19px] flex items-center mr-2">$660</h6>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\starhalfFull.png"/>
                <h4 className=" text-[19px] flex items-center mx-auto">(55)</h4>
              </div>
              <div className="flex gap-1 mt-2">
                <div className="w-5 h-5 rounded-full bg-black hover:border-white border-2"/>
                <div className="w-5 h-5 rounded-full bg-red-700 hover:border-black border-2"/>
              </div>
              
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gray-200 w-67 h-62 group relative">
            <div className="w-8 float-right absolute z-40 mt-1 left-[85%] gap-3">
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\serce.png"></img></button>
            <button className="w-8 h-8 rounded-full bg-white"><img className="items-center mx-auto" src="src\img\Quick View.png"></img></button>
            </div>
            <img className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" src="src\img\jacket.png"/>
            <div className="z-50 absolute top-[100%] -translate-y-[100%] hidden group-hover:flex bg-black text-white w-full h-10 ">
              <h3 className="flex items-center mx-auto">Add To Cart</h3>
            </div>
          </div>
          <div>
            <div className="mt-2">
              <h4 className="text-[22px]">Quilted Satin Jacket</h4>
              <div className="flex gap-1 w-38 h-5 mt-4">
                  <h6 className=" text-[19px] flex items-center mr-2">$660</h6>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\star.png"/>
                <img className="w-5 h-5 cursor-pointer" src="src\img\starHalfFull.png"/>
                <h4 className=" text-[19px] flex items-center mx-auto">(55)</h4>
              </div>
              <div className="flex gap-1 mt-2">
                <div className="w-5 h-5 rounded-full bg-black hover:border-white border-2"/>
                <div className="w-5 h-5 rounded-full bg-red-700 hover:border-black border-2"/>
              </div>
            </div>
          </div>
        </div>
       </div>
       <button className="flex mx-auto w-58 h-14 bg-red-800 rounded-[4px] mt-15">
          <h3 className="flex items-center mx-auto">View All Products</h3>
        </button>
        <div className=" gap-9 container mx-auto mt-30">
              <div className="flex items-center gap-3">
              <div className="w-6 h-12 bg-red-800"/>
              <h5>Categories</h5>
              </div>
              <h1 className="text-4xl mt-6 ">Browse By Category</h1>
         </div>
         
         <div className="flex container mx-auto justify-between ">
            <div className="w-[620px] h-140 relative bg-black rounded-[8px]">
                <img className=" absolute bottom-0 left-1/2 transform -translate-x-1/2 object-cover z-20" src="src\img\playstation.png"/>
                <div className="absolute z-30 text-white bottom-4 left-4">
                  <p className="text-[26px]">PlayStation 5</p>
                  <p className="text-[17px] mt-1.5">Black and White version of the PS5<br/> coming out on sale.</p>
                  <p className="text-[20px] mt-1.5">Shop Now</p>
                </div>
            </div>
            <div className="w-[620px] h-[560px] relative flex flex-col">
                <div className="h-[282px] w-[620px] relative bg-black rounded-[8px] border-hidden">
                  <img className="absolute bottom-0 left-2/2 transform -translate-x-2/2" src="src\img\woman.png"/>
                  <div className="absolute z-30 text-white bottom-4 left-4">
                  <p className="text-[26px]">PlayStation 5</p>
                  <p className="text-[17px] mt-1.5">Black and White version of the PS5<br/> coming out on sale.</p>
                  <p className="text-[20px] mt-1.5">Shop Now</p>
                </div>
                </div>
               
               <div className="flex w-[620px] h-[246px] justify-between mt-8 ">
                 <div className="h-[246px] w-[295px]  bg-black relative  rounded-[8px]"> 
                    <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"  src="src\img\kolonka.png"/>
                    <div className="absolute z-30 text-white bottom-4 left-4">
                  <p className="text-[26px]">PlayStation 5</p>
                  <p className="text-[17px] mt-1.5">Black and White version of the PS5<br/> coming out on sale.</p>
                  <p className="text-[20px] mt-1.5">Shop Now</p>
                  </div>
                  </div>
                  <div className=" bg-black h-[246px] w-[295px] relative rounded-[8px]">
                    <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="src\img\perfume.png"/>
                    <div className="absolute z-30 text-white bottom-4 left-4">
                  <p className="text-[26px]">PlayStation 5</p>
                  <p className="text-[17px] mt-1.5">Black and White version of the PS5<br/> coming out on sale.</p>
                  <p className="text-[20px] mt-1.5">Shop Now</p>
                 </div>
                  </div>
                </div>
                 </div>
         </div>
         <div className="grid grid-cols-3 gap-4 container mx-auto mt-37">
          <div className="w-62 h-40 ">
            <div className="w-20 h-20 rounded-full bg-black border-8 border-gray-500 relative mx-auto">
              <img src="src\img\carbig.png" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10"/>
            </div>
              <p className="mt-4 text-[20px] mx-auto">FREE AND FAST DELIVERY</p>
              <p className="mt-1 text-[15px] mx-auto">Free delivery for all orders over $140</p>
          </div>
          <div className="w-62 h-40 ">
            <div className="w-20 h-20 rounded-full bg-black border-8 border-gray-500 relative mx-auto">
              <img src="src\img\Icon-Customer service.png" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10"/>
            </div>
              <p className="mt-4 text-[20px] mx-auto">24/7 CUSTOMER SERVICE</p>
              <p className="mt-1 text-[15px] mx-auto">Friendly 24/7 customer support</p>
          </div>
          <div className="w-62 h-40 ">
            <div className="w-20 h-20 rounded-full bg-black border-8 border-gray-500 relative mx-auto">
              <img src="src\img\Icon-secure.png" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10"/>
            </div>
              <p className="mt-4 text-[20px] mx-auto">MONEY BACK GUARANTEE</p>
              <p className="mt-1 text-[15px] mx-auto">We reurn money within 30 days</p>
          </div>
         </div>
         <div className="container mx-auto ">
         <div className="w-11.5 h-11.5 rounded-full bg-gray-400 float-right relative mt-20">
          <img src="src\img\icons_arrow-up.png" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
         </div>
      </div>
   </div>
  )
}
