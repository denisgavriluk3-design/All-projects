import React from "react";

export default function About() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex w-28.5 justify-between mt-20">
          <p>Home</p>
          <p>/</p>
          <p>About</p>
        </div>
        <div className="flex justify-between w-full mt-10">
            <div className="flex items-center">
          <div className="w-131.25 h-84">
            <h1 className="text-4xl">Our Story</h1>
            <p className="mt-10">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p className="mt-5">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          </div>
          <div>
            <img src="public\Side Image.png"/>
          </div>
        </div>
        <div className="flex justify-between mt-35">
            <div className="w-67.5 h-57.5 border-2 rounded-[8px] bg-white">
                <div className="w-42.25 h-42.5 flex-col justify-between mx-auto items-center pt-7.5">
                    <div className="w-20 h-20 rounded-full border-8 border-gray-400 flex bg-black mx-auto">
                        <img src="public\icon_shop.png" className="mx-auto flex items-center mt-2.5 w-10 h-10 "/>
                    </div>
                    <div className="h-16.5 w-42.25 flex-col flex justify-between mx-auto">
                        <p className="mx-auto flex text-3xl mt-4 font-bold">10.5k</p>
                        <p className="mx-auto flex mt-2">Sallers active our site</p>
                    </div>
                </div>
            </div>
            <div className="w-67.5 h-57.5 border-2 rounded-[8px] bg-red-700">
                <div className="w-42.25 h-42.5 flex-col justify-between mx-auto items-center pt-7.5">
                    <div className="w-20 h-20 rounded-full border-8 border-gray-300 flex bg-white mx-auto">
                        <img src="public\Icon-Sale.png" className="mx-auto flex items-center mt-2.5 w-10 h-10 "/>
                    </div>
                    <div className="h-16.5 w-42.25 flex-col flex justify-between mx-auto">
                        <p className="mx-auto flex text-3xl mt-4 font-bold">33k</p>
                        <p className="mx-auto flex mt-2">Mopnthly Produduct Sale</p>
                    </div>
                </div>
            </div>
            <div className="w-67.5 h-57.5 border-2 rounded-[8px] bg-white">
                <div className="w-42.25 h-42.5 flex-col justify-between mx-auto items-center pt-7.5">
                    <div className="w-20 h-20 rounded-full border-8 border-gray-400 flex bg-black mx-auto">
                        <img src="public\Icon-Shopping bag.png" className="mx-auto flex items-center mt-2.5 w-10 h-10 "/>
                    </div>
                    <div className="h-16.5 w-42.25 flex-col flex justify-between mx-auto">
                        <p className="mx-auto flex text-3xl mt-4 font-bold">45.5k</p>
                        <p className="mx-auto flex mt-2">Customer active in our site</p>
                    </div>
                </div>
            </div>
            <div className="w-67.5 h-57.5 border-2 rounded-[8px] bg-white">
                <div className="w-42.25 h-42.5 flex-col justify-between mx-auto items-center pt-7.5">
                    <div className="w-20 h-20 rounded-full border-8 border-gray-400 flex bg-black mx-auto">
                        <img src="public\Icon-Moneybag.png" className="mx-auto flex items-center mt-2.5 w-10 h-10 "/>
                    </div>
                    <div className="h-16.5 w-42.25 flex-col flex justify-between mx-auto">
                        <p className="mx-auto flex text-3xl mt-4 font-bold">25k</p>
                        <p className="mx-auto flex mt-2">Anual gross sale in our site</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-between mt-35">
            <div className="flex-col w-92.5 h-141 bg-white border-2 rounded-[8px] overflow-hidden">
                <div className="h-107.5 w-92.5 relative bg-gray-300 ">
                    <img className="absolute bottom-0 left-1/2 -translate-x-1/2" src="public\image 46.png"/>
                </div>
                <div className="flex-col pl-2">
                    <p className="text-3xl mt-5">Tom Cruise</p>
                    <p className="mt-1">Founder & Chairman</p>
                    <div className="flex w-26 h-6 justify-between mt-3">
                        <img  src="public\Icon-Twitter1.png"/>
                        <img src="public\icon-instagram1.png"/>
                        <img  src="public\Icon-Linkedin1.png"/>
                    </div>
                </div>
            </div>
            <div className="flex-col w-92.5 h-141 bg-white border-2 rounded-[8px] overflow-hidden">
                <div className="h-107.5 w-92.5 relative bg-gray-300 ">
                    <img className="absolute bottom-0 left-1/2 -translate-x-1/2" src="public\image 51.png"/>
                </div>
                <div className="flex-col pl-2">
                    <p className="text-3xl mt-5">Emma Watson</p>
                    <p className="mt-1">Managing Director</p>
                    <div className="flex w-26 h-6 justify-between mt-3">
                        <img  src="public\Icon-Twitter1.png"/>
                        <img src="public\icon-instagram1.png"/>
                        <img  src="public\Icon-Linkedin1.png"/>
                    </div>
                </div>
            </div>
            <div className="flex-col w-92.5 h-141 bg-white border-2 rounded-[8px] overflow-hidden">
                <div className="h-107.5 w-92.5 relative bg-gray-300 ">
                    <img className="absolute bottom-0 left-1/2 -translate-x-1/2" src="public\image 47.png"/>
                </div>
                <div className="flex-col pl-2">
                    <p className="text-3xl mt-5">Will Smith</p>
                    <p className="mt-1">Product Designer</p>
                    <div className="flex w-26 h-6 justify-between mt-3">
                        <img  src="public\Icon-Twitter1.png"/>
                        <img src="public\icon-instagram1.png"/>
                        <img  src="public\Icon-Linkedin1.png"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex gap-3 w-25 h-3 mx-auto mt-10">
            <button className="w-3 h-3 rounded-full bg-gray-300 border- cursor-pointer"/>
            <button className="w-3 h-3 rounded-full bg-gray-300 border- cursor-pointer"/>
            <button className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"/>
            <button className="w-3 h-3 rounded-full bg-gray-300 border- cursor-pointer"/>
            <button className="w-3 h-3 rounded-full bg-gray-300 border- cursor-pointer"/>
        </div>
        <div className="grid grid-cols-3 gap-4 container mx-auto mt-37">
          <div className="w-62 h-40 mx-auto">
            <div className="w-20 h-20 rounded-full bg-black border-8 border-gray-500 relative mx-auto">
              <img src="src\img\carbig.png" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10"/>
            </div>
              <p className="mt-4 text-[20px] mx-auto">FREE AND FAST DELIVERY</p>
              <p className="mt-1 text-[15px] mx-auto">Free delivery for all orders over $140</p>
          </div>
          <div className="w-62 h-40 mx-auto">
            <div className="w-20 h-20 rounded-full bg-black border-8 border-gray-500 relative mx-auto">
              <img src="src\img\Icon-Customer service.png" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10"/>
            </div>
              <p className="mt-4 text-[20px] mx-auto">24/7 CUSTOMER SERVICE</p>
              <p className="mt-1 text-[15px] mx-auto">Friendly 24/7 customer support</p>
          </div>
          <div className="w-62 h-40 mx-auto">
            <div className="w-20 h-20 rounded-full bg-black border-8 border-gray-500 relative mx-auto">
              <img src="src\img\Icon-secure.png" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10"/>
            </div>
              <p className="mt-4 text-[20px] mx-auto">MONEY BACK GUARANTEE</p>
              <p className="mt-1 text-[15px] mx-auto">We reurn money within 30 days</p>
          </div>
         </div>
      </div>
    </div>
  );
}
