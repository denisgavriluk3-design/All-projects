import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="w-32.5 justify-between flex mt-20">
          <p>Home</p>
          <p>/</p>
          <p>Cantact</p>
        </div>
        <div className="flex justify-between mt-20">
          <div className="w-85 h-114.25 flex bg-white border-2 rounded-[8px]">
            <div className="w-67.5 h-91.5 flex-col flex mx-auto items-center mt-8.25">
              <div className="w-65.5 h-30.5 ">
                <div className="flex w-33.75 h-10 justify-between">
                <div className="w-10 h-10 rounded-full bg-red-500 flex">
                  <img
                    src="public\phone1.png "
                    className="flex mx-auto items-center w-5 h-5 mt-2.5"/>
                </div>
                <p className="flex items-center">Call To Us</p>
             </div>
              <p className="mt-6">We are available 24/7, 7 days a week.</p>
              <p className="mt-4">Phone: +8801611112222</p>
            </div>
            <hr className="w-full h-2 mt-8"/>
            <div className="w-65.5 h-30.5 ">
                <div className="flex w-33.75 h-10 justify-between mt-8">
                <div className="w-10 h-10 rounded-full bg-red-500 flex ">
                  <img
                    src="public\convert.png"
                    className="flex mx-auto items-center w-5 h-5 mt-2.5"/>
                </div>
                <p className="flex items-center">Write To US</p>
             </div>
              <p className="mt-6">Fill out our form and we will contact you within 24 hours.</p>
              <p className="mt-4">Emails: customer@exclusive.com</p>
              <p className="mt-4">Emails: support@exclusive.com</p>
            </div>
             </div>
          </div>
          <div className="w-200 h-114.25 bg-white flex border-2 rounded-[8px]">
            <div className="w-184.25 h-94.25 flex mx-auto items-center">
                <div className="flex-col">
                <div className="flex justify-between w-184.25 h-12.5  mt-18.75">
                    <input placeholder="Your Name *" className="w-58.75 h-12.5 pr-2 pl-2 text-[17px]"/>
                    <input placeholder="Your Email *" className="w-58.75 h-12.5 pr-2 pl-2 text-[17px]"/>
                    <input placeholder="Your Phone *" className="w-58.75 h-12.5 pr-2 pl-2 text-[17px]"/>
                </div>
                <textarea placeholder="Your Massage" className="pr-2 pl-2 text-[17px] w-full align-top h-51.75 mt-8 pt-1"/>
                <button className="flex w-53.75 h-14 bg-red-700 border-2 rounded-[4px] float-right mt-8"><p className="flex items-center mx-auto">Send Massage</p></button>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
