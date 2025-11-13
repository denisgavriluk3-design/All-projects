import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


const setActive = ({isActive}) => isActive ? "text-red-700 font-bold underline" : "hover:text-red-700"

export default function Header() {const [isVisible, setisVisible] = useState(false);
const toggleDiv = () => {
  setisVisible(!isVisible);
};
  return (
    <div>
        <header className= " ">
          <div className=' bg-black w-full py-2 text-white'>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-center flex-1 text-sm">
          <span className=" text-gray-300">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </span>
          <span className="text-white-500"> ShopNow</span>
        </div>
        <button className="text-sm font-semibold underline hover:text-gray-300 transition "onClick={toggleDiv}>
          English{isVisible && (
        <div className='w-12.5 h-5 flex-col absolute'>
          <p>Spanish</p>
          <p>Ukrein</p>
          <p>Garman</p>
        </div>)}
        </button>
        <img src="src\img\Vector.png" onClick={toggleDiv} className='w-3 h-2 ml-2' />
        
      </div>
      </div>
      <div className="container flex mx-auto justify-between mt-10 text-black">
        <h1 className="float-left text-3xl">Exclusive</h1>
        <div className="mx-auto space-x-5 text-2xl">
          <NavLink to="/" className={setActive}>Home</NavLink>
          <NavLink to="/Contact" className={setActive}>Contact</NavLink>
          <NavLink to="/About" className={setActive}>About</NavLink>
          <NavLink to="/Sign Up" className={setActive}>Sign Up</NavLink>
        </div>
        <div className="float-right flex h-10">
          <input
            className="bg-gray-300 border-1 w-50"
            placeholder="What are you looking for?"
          ></input>
          
          <img
            src="src\img\Component 2.png"
            onClick={""}
            className="cursor-pointer bg-gray-300 border-1 hover:scale-110 transition "
          />
          
          <div className="flex h-10 ">
            <Link to="/Wishlist">
            <img
              src="src\img\Wishlist.png"
              onClick={""}
              className="cursor-pointer hover:scale-110 transition h-10"
            />
            </Link>
            <Link to="/Cart">
            <img
              src="src\img\Cart1.png"
              onClick={""}
              className="cursor-pointer hover:scale-110 transition h-10"
            />
            </Link>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-400 w-full mt-8"/>
    </header>
    </div>
  )
}
