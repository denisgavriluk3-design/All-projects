import React from "react";
import { useCartStore } from "../../store/cartStore";
import { Link } from "react-router-dom";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const increaseCount = useCartStore((state) => state.increaseCount);
  const decreaseCount = useCartStore((state) => state.decreaseCount);
  const getTotal = useCartStore((state) => state.getTotal);

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex w-26 h-5 float-left justify-between mt-20 mb-20">
          <p>Home</p>
          <p>/</p>
          <p>Cart</p>
        </div>

        <div className="w-full flex flex-col bg-white">
          <div>
            <div className="w-full h-18 bg-white flex">
              <div className="w-[95%] mx-auto justify-between grid grid-cols-4 items-center">
                <p className="text-[17px] mx-auto">Product</p>
                <p className="text-[17px] mx-auto">Price</p>
                <p className="text-[17px] mx-auto">Quantity</p>
                <p className="text-[17px] mx-auto">Subtotal</p>
              </div>
            </div>

            {cart.length === 0 ? (
              <div className="w-full h-18 bg-white flex mt-10">
                <div className="w-[95%] mx-auto text-center py-8">
                  <p className="text-gray-500 text-lg">Корзина пуста</p>
                </div>
              </div>
            ) : (
              cart.map((item) => {
                const itemId = item._id || item.id;
                return (
                  <div key={itemId} className="w-full h-18 bg-white flex mt-10">
                    <div className="w-[95%] mx-auto justify-between items-center grid grid-cols-4">
                      {/* Product */}
                      <div className="flex w-42.5 h-13.5 justify-between mx-auto">
                        <div className="relative w-13.5 h-13.5 flex items-center justify-center group">
                          <button
                            onClick={() => removeFromCart(itemId)}
                            className="w-6 h-6 absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-red-500 rounded-full flex items-center justify-center text-white"
                          >
                            ×
                          </button>
                          {item.image ? (
                            <img
                              className="w-13.5 h-13.5 object-cover"
                              src={item.image}
                              alt={item.name}
                            />
                          ) : (
                            <div className="w-13.5 h-13.5 bg-gray-200 flex items-center justify-center">
                              <span className="text-gray-400">No img</span>
                            </div>
                          )}
                        </div>
                        <p className="items-center flex mx-auto">{item.name}</p>
                      </div>

                      {/* Price */}
                      <p className="text-[17px] mx-auto">${item.price}</p>

                      {/* Quantity */}
                      <div className="w-18 h-12 rounded-[4px] border-[1.5px] flex mx-auto">
                        <div className="flex w-12 h-8 justify-between mx-auto mt-2">
                          <p className="items-center mt-1 text-[17px]">{item.count}</p>
                          <div className="flex-col w-4 h-8">
                            <button
                              onClick={() => increaseCount(itemId)}
                              className="w-4 h-4 flex items-center justify-center hover:bg-gray-100"
                            >
                              <img src="/Drop-Up-Small.png" alt="+" />
                            </button>
                            <button
                              onClick={() => decreaseCount(itemId)}
                              className="w-4 h-4 flex items-center justify-center hover:bg-gray-100"
                            >
                              <img src="/Drop-Down-Small.png" alt="-" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Subtotal */}
                      <p className="text-[17px] mx-auto">
                        ${(item.price * (item.count || 1)).toFixed(2)}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Cart Actions */}
        <div className="mt-5 flex justify-between">
          <Link to="/">
            <button className="w-54.5 h-14 border-2 flex bg-white rounded-[8px] hover:bg-gray-50">
              <p className="mx-auto items-center flex text-[17px]">Return To Shop</p>
            </button>
          </Link>
          <button
            onClick={clearCart}
            className="w-48.75 h-14 border-2 flex bg-white rounded-[8px] hover:bg-gray-50"
          >
            <p className="mx-auto items-center flex text-[17px]">Update Cart</p>
          </button>
        </div>

        {/* Cart Total */}
        <div className="flex justify-between container mx-auto mt-10">
          <div className="pl-4 pr-4 w-117.5 h-81 bg-white">
            <p className="mt-4 text-[20px]">Cart Total</p>
            <div className="flex justify-between mt-4">
              <p>Subtotal:</p>
              <p>${getTotal().toFixed(2)}</p>
            </div>
            <hr className="w-full h-1 mt-3" />
            <div className="flex justify-between mt-3">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <hr className="w-full h-1 mt-3" />
            <div className="flex justify-between mt-3">
              <p>Total:</p>
              <p>${getTotal().toFixed(2)}</p>
            </div>
            <Link to="/CheckOut">
              <button className="flex w-65 h-14 mx-auto rounded-[8px] border-2 bg-red-700 mt-8 hover:bg-red-800">
                <p className="flex mx-auto items-center text-[17px] text-white">Proceed to checkout</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
