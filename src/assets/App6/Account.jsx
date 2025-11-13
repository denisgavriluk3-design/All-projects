import React from "react";

export default function Account() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-between  mt-20">
          <div className="flex float-left gap-2">
            <p>Home</p>
            <p>/</p>
            <p>My Account</p>
          </div>
          <p>Welcome! Md Rimel</p>
        </div>
        <div className="flex justify-between mt-20">
          <div className="w-50 flex flex-col ">
            <p className="text-[20px]">Manage My Account</p>
            <div className="flex-col w-41.25 h-22 justify-between float-right mt-3 ml-5">
              <p className="text-red-500">My Profile</p>
              <p>Address Book</p>
              <p>My Payment Options</p>
            </div>
            <p className="text-[20px]">My Orders</p>
            <div className="flex-col w-41.25 h-14 justify-between float-right mt-3 ml-5">
              <p>My Returns</p>
              <p>My Cancellations</p>
            </div>
            <p className="text-[20px]">My WishList</p>
          </div>
          <div className="w-217.5 h-157.5 shadow-md bg-white pl-20 pr-20 rounded-[8px]">
            <p className="text-[20px] text-red-500 mt-7">Edit Your Profile</p>
            <div className="w-full h-20.5 flex justify-between mt-3">
                <div className="flex-col justify-between h-20.5 ">
                    <p>First Name</p>
                    <input placeholder="Md" className="w-82.5 h-12.5 pr-2 pl-2 border-2 rounded-[4px]"/>
                </div>
                <div className="flex-col justify-between h-20.5 ">
                    <p>Last Name</p>
                    <input placeholder="Last Name" className="w-82.5 h-12.5 pr-2 pl-2 border-2 rounded-[4px]"/>
                </div>
            </div>
            <div className="w-full h-20.5 flex justify-between mt-3">
                <div className="flex-col justify-between h-20.5 ">
                    <p>Email</p>
                    <input placeholder="rimel1111@gmail.com" className="w-82.5 h-12.5 pr-2 pl-2 border-2 rounded-[4px]"/>
                </div>
                <div className="flex-col justify-between h-20.5 ">
                    <p>Address</p>
                    <input placeholder="Kingston, 5236, United State" className="w-82.5 h-12.5 pr-2 pl-2 border-2 rounded-[4px]"/>
                </div>
            </div>
            <div className="h-53.5 flex-col w-full">
                <p className="mt-4">Password Changes</p>
                <input placeholder="Current Passwod" className="w-full h-12.5 pr-2 pl-2 border-2 rounded-[4px] mt-4"/>
                <input placeholder="New Passwod" className="w-full h-12.5 pr-2 pl-2 border-2 rounded-[4px] mt-4"/>
                <input placeholder="Current Passwod" className="w-full h-12.5 pr-2 pl-2 border-2 rounded-[4px] mt-4"/>
            </div>
            <div className="w-75.75 flex float-right mt-6 justify-between text-[17px]">
                <p className="flex items-center ">Cancel</p>
                <button className="w-53.5 h-14 bg-red-700 border-2 rounded-[8px]"><p>Save Changes</p></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
