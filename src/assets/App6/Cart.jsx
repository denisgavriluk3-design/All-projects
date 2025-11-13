import React from 'react'

export default function Cart() {
  return (
    <div>
        <div className='container mx-auto'>
            <div className='flex w-26 h-5 float-left justify-between mt-20 mb-20'>
                <p>Home</p>
                <p>/</p>
                <p>Cart</p>
            </div>
            <div className='w-full flex flex-col bg-white'>
                <div>
                    <div className='w-full h-18 bg-white flex'>
                        <div className='w-[95%] mx-auto justify-between grid grid-cols-4 items-center'>
                            <p className='text-[17px] mx-auto'>Product</p>
                            <p className='text-[17px] mx-auto'>Price</p>
                            <p className='text-[17px] mx-auto'>Quantity</p>
                            <p className='text-[17px] mx-auto'>Subtotal</p>
                        </div>
                    </div>
                    <div className='w-full h-18 bg-white flex mt-10'>
                        <div className='w-[95%] mx-auto justify-between items-center grid grid-cols-4'>
                            <div className='flex w-42.5 h-13.5 justify-between mx-auto'>
                            <div className='relative w-13.5 h-13.5 flex items-center justify-center group'>
                                <img className='w-6 h-6 absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100' src='public\icon-cancel.png'/>
                                <img className='w-13.5 h-13.5 object-cover  ' src="public\windo.png"/>
                            </div>
                            <p className='items-center flex mx-auto'>LCD Monitor</p>
                            </div>
                            <p className='text-[17px] mx-auto'>$650</p>
                            <div className='w-18 h-12 rounded-[4px] border-[1.5px] flex mx-auto'>
                                <div className='flex w-12 h-8 justify-between mx-auto mt-2'>
                                    <p className='items-center mt-1 text-[17px]'>01</p>
                                    <div className='flex-col w-4 h-8'>
                                        <img src="public\Drop-Up-Small.png"/>
                                        <img src="public\Drop-Down-Small.png"/>
                                    </div>
                                </div>
                            </div>
                            <p className='text-[17px] mx-auto'>Subtotal</p>
                            
                        </div>
                    </div>
                    <div className='w-full h-18 bg-white flex mt-10'>
                        <div className='w-[95%] mx-auto justify-between items-center grid grid-cols-4'>
                            <div className='flex w-42.5 h-13.5 justify-between mx-auto'>
                            <div className='relative w-13.5 h-13.5 flex items-center justify-center group'>
                                <img className='w-6 h-6 absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100' src='public\icon-cancel.png'/>
                                <img className='w-13.5 h-13.5 object-cover  ' src="public\windo.png"/>
                            </div>
                            <p className='items-center flex mx-auto'>LCD Monitor</p>
                            </div>
                            <p className='text-[17px] mx-auto'>$650</p>
                            <div className='w-18 h-12 rounded-[4px] border-[1.5px] flex mx-auto'>
                                <div className='flex w-12 h-8 justify-between mx-auto mt-2'>
                                    <p className='items-center mt-1 text-[17px]'>02</p>
                                    <div className='flex-col w-4 h-8'>
                                        <img src="public\Drop-Up-Small.png"/>
                                        <img src="public\Drop-Down-Small.png"/>
                                    </div>
                                </div>
                            </div>
                            <p className='text-[17px] mx-auto'>1300</p>
                            
                        </div>
                    </div>
                </div>

            </div>
            <div className='mt-5'>
                <button className='w-54.5 h-14 border-2 flex float-left bg-white rounded-[8px]'>
                    <p className='mx-auto items-center flex text-[17px]'>Return To Shop</p>
                </button>
                <button className='w-48.75 h-14 border-2 flex float-right bg-white rounded-[8px]'>
                    <p className='mx-auto items-center flex text-[17px]'>Update Cart</p>
                </button>
            </div>
            <div className='flex justify-between container mx-auto mt-75'>
                <div className='h-14 w-131.75 justify-between flex'>
                    <input placeholder='Coupon Code' className='w-75 h-14 pl-2 pr-2 float-left border-2 rounded-[8px] text-[17px]'></input>
                    <button className='h-14 w-52.75 float-right border-2 flex rounded-[8px] bg-red-800'>
                        <p className='flex mx-auto items-center text-[17px] text-white'>Apply Coupon</p>
                    </button>
                </div>
                <div className='pl-4 pr-4 w-117.5 h-81 bg-white'>
                    <p className='mt-4 text-[20px]'>Cart Total</p>
                    <div className='flex justify-between mt-4'>
                        <p>Subtotal:</p>
                        <p>$1750</p>
                    </div>
                    <hr className='w-full h-1 mt-3'/>
                    <div className='flex justify-between mt-3'>
                        <p>Shipping:</p>
                        <p>Free</p>
                    </div>
                    <hr className='w-full h-1 mt-3'/>
                    <div className='flex justify-between mt-3'>
                        <p>Total:</p>
                        <p>$1750</p>
                    </div>
                    <button className='flex w-65 h-14 mx-auto rounded-[8px] border-2 bg-red-700 mt-8'>
                        <p className='flex mx-auto items-center text-[17px] text-white'>Procees to checkout</p>
                    </button>
                </div>
            </div>

        </div>
    </div>
  )
}
