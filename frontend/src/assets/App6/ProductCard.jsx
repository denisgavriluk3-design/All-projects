import React from "react";
import StarRating from "./StarRating";
import { useStore } from "../store/cartStore";

export default function ProductCard({ product }) {
  const { addToCart } = useStore();

  return (
    <div className="relative group border rounded-lg overflow-hidden shadow-md">
      <div className="relative">
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm rounded">
            -{product.discount}%
          </div>
        )}
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover"/>
        <div className="absolute top-2 right-2 flex gap-2">
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <img src="/images/serce.png" alt="Wishlist" className="w-4 h-4"/>
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <img src="/images/Quick View.png" alt="Quick View" className="w-4 h-4"/>
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 hidden group-hover:flex bg-black/70 text-white justify-center py-2 cursor-pointer"
             onClick={() => addToCart(product)}>
          Add To Cart
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-lg font-bold">${product.price}</span>
          {product.oldPrice && (
            <span className="text-gray-400 line-through">${product.oldPrice}</span>
          )}
        </div>
        <div className="flex items-center gap-2 mt-2">
          <StarRating initialRating={product.averageRating} totalStars={5} size={16} />
          <span className="text-sm text-gray-600">({product.ratingCount})</span>
        </div>
      </div>
    </div>
  );
}
