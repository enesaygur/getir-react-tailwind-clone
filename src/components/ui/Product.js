import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
export default function Product({ product }) {
  return (
    <div className="bg-white flex flex-col gap-y-1 items-center  text-sm font-semibold p-3 relative">
      <button className="absolute bg-white top-0  right-0 w-8 h-8  justify-center  border border-gray-200 rounded-lg text-brand-color shadow-md transition-colors hover:border-brand-color">
        <AiOutlinePlus size={16} className="mx-2"/>
      </button>
      <img src={product.image} alt={product.title} />
      <div className="text-brand-color">{product.price}</div>
      <div className="text-gray-900">{product.title}</div>
      <div className="text-gray-500">{product.alt}</div>
    </div>
  );
}
