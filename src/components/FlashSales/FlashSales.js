import React, { useState, useEffect } from 'react';
import { assets, product_list } from '../../assets/assets';

const FlashSales = () => {

    return (
        <div className="p-6 bg-gray-50">
            <p className="text-lg text-gray-500">Today's</p>
            <div className="flex justify-between items-center text-center my-4">
                <h1 className="text-3xl font-bold">Flash Sales</h1>
                <p className="text-xl font-semibold text-red-500">
                    Day:Hours:Minutes:Seconds
                </p>
                <div className="flex gap-2">
                    <button className="bg-gray-200 border rounded-full hover:bg-gray-300 transition">
                        <img src={assets.l_arrow_icon} alt="Left" className="p-1" />
                    </button>
                    <button className="bg-gray-200 border rounded-full hover:bg-gray-300 transition">
                        <img src={assets.r_arrow_icon} alt="Right" className="p-1" />
                    </button>
                </div>
            </div>

            <div className="flex gap-4 overflow-x-auto py-2">
                {product_list.map((item) => (
                    <div key={item.id} className="min-w-[180px] bg-white p-4 rounded-lg shadow-md">
                        <img
                            src={item.image}
                            alt=""
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
                        <p className="text-gray-700">{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FlashSales;
