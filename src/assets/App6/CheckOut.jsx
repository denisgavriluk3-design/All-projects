import React from 'react'

export default function CheckOut() {
  return (
    <div>
        <div className='container mx-auto'>
            <div className='flex justify-between w-113.75 mt-20'>
                <p>Account</p>
                <p>/</p>
                <p>My Account</p>
                <p>/</p>
                <p>Product</p>
                <p>/</p>
                <p>View Cart</p>
                <p>/</p>
                <p>CheckOut</p>
            </div>
            <p className='text-4xl mt-20'>Billing Details</p>
            <div className='w-full flex justify-between'>
                <div className='w-117.5 flex flex-col mt-15'>
                    <div className='w-full'>
                        <p className='text-[17px]'>First Name*</p>
                        <input className='w-full h-12.5 bg-gray-400 pr-2 pl-2 text-[17px] mt-3'></input>
                    </div>
                    <div className='w-full mt-6'>
                        <p className='text-[17px]'>Company Name</p>
                        <input className='w-full h-12.5 bg-gray-400 pr-2 pl-2 text-[17px] mt-3'></input>
                    </div>
                    <div className='w-full mt-6'>
                        <p className='text-[17px]'>Street Address*</p>
                        <input className='w-full h-12.5 bg-gray-400 pr-2 pl-2 text-[17px] mt-3'></input>
                    </div>
                    <div className='w-full mt-6'>
                        <p className='text-[17px]'>Apartment, floor, etc. (optional)</p>
                        <input className='w-full h-12.5 bg-gray-400 pr-2 pl-2 text-[17px] mt-3'></input>
                    </div>
                    <div className='w-full mt-6'>
                        <p className='text-[17px]'>Town/City*</p>
                        <input className='w-full h-12.5 bg-gray-400 pr-2 pl-2 text-[17px] mt-3'></input>
                    </div>
                    <div className='w-full mt-6'>
                        <p className='text-[17px]'>Phone Number*</p>
                        <input className='w-full h-12.5 bg-gray-400 pr-2 pl-2 text-[17px] mt-3'></input>
                    </div>
                    <div className='w-full mt-6'>
                        <p className='text-[17px]'>Email Address*</p>
                        <input className='w-full h-12.5 bg-gray-400 pr-2 pl-2 text-[17px] mt-3'></input>
                    </div>
                    <div className='flex mt-6 gap-3'>
                        <div className='w-6 h-6 bg-red-700 relative rounded-[4px]'>
                            <img className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-2.5' src="public\galocka.png"/>
                        </div>
                        <p className='text-[17px] flex items-center'>Save this information for faster check-out next time</p>
                    </div>
                </div>
                <div className='flex flex-col w-131.75 h-150 mt-20'>
                    <div className='flex flex-col gap-8'>
                        <div className='w-106.25 justify-between flex h-13.5'>
                            <img src="public\Gamepad-Cart-Small.png"/>
                            <div className='w-86.75 h-6 justify-between flex mt-3.75 text-[17px]'>
                                <p>LCD Monitor</p>
                                <p>$650</p>
                            </div>
                        </div>
                        <div className='w-106.25 justify-between flex h-13.5'>
                            <img src="public\Monitor-Cart-Small.png"/>
                            <div className='w-86.75 h-6 justify-between flex mt-3.75 text-[17px]'>
                                <p>LCD Monitor</p>
                                <p>$650</p>
                            </div>
                        </div>
                    </div>
                    <div className=' w-105.5 h-34'>
                    <div className='flex justify-between mt-8'>
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
                    <div className='flex justify-between mt-8'>
                        <div className='w-20 h-6 flex justify-between'>
                            <button className='w-6 h-6 rounded-full border-2 border-black bg-white'/>
                            <p className='text-[17px]'>Bank</p>
                        </div>
                        <div className='flex float-right w-48 h-6 justify-between'>
                            <img src="public\Bkash.png"/>
                            <img src="public\Visa.png"/>
                            <img src="public\Mastercard.png"/>
                            <img src="public\Nagad.png"/>
                        </div>
                    </div>
                    <div className='w-43 h-6 flex justify-between mt-8'>
                            <button className='w-6 h-6 rounded-full border-2 border-black bg-white'/>
                            <p className='text-[17px]'>Cash on delivery</p>
                    </div>
                    <div className=' w-135 justify-between flex text-[17px] mt-8'>
                        <input className='w-75 h-14 pl-2 pr-2 border-2 flex items-center'/>
                        <button className='flex border-2 rounded-[8px] bg-red-700 w-52.75'><p className='flex mx-auto items-center'>Apply Coupon</p></button>
                    </div>
                    <button className='w-47.5 h-14 border-2 rounded-[8px] bg-red-700 flex mt-8'><p className='flex mx-auto items-center'>Place Order</p></button>
                </div>
                </div>

            </div>
        </div>
    </div>
  )
}
