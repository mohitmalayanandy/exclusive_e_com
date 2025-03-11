import React from 'react';
import { assets } from '../../assets/assets';

const Header = () => {
    return (
        <div className="flex flex-col md:flex-row h-auto m-10">

            <div className="w-full md:w-1/4 ml-16 md:p-10 border-b-2 md:border-r-2 md:border-b-0">
                <ul className="space-y-2">
                    {[
                        "Women's Fashion",
                        "Men's Fashion",
                        "Electronics",
                        "Home & Lifestyle",
                        "Medicine",
                        "Sports & Outdoor",
                        "Baby's & Toys",
                        "Groceries & Pets",
                        "Health & Beauty"
                    ].map((item, index) => (
                        <li
                            key={index}
                            className="cursor-pointer hover:text-blue-500 transition text-sm md:text-base lg:text-lg"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>


            <div className="flex flex-col md:flex-row items-center gap-6 p-16 m-7 bg-black w-full md:w-3/4">

                <div className="flex-1 text-center md:text-left">
                    <p className="flex justify-center md:justify-start items-center gap-2 text-sm md:text-md text-white">
                        <img
                            src={assets.apple_icon}
                            alt="apple_icon"
                            className="h-8 w-8 md:h-10 md:w-10"
                        />
                        iPhone 14 Series
                    </p>
                    <h2 className="text-2xl md:text-4xl text-white font-normal">
                        Up to 10% <br /> off Voucher
                    </h2>
                    <div className='flex items-center text-center gap-4 mt-10'>
                        <a href="#" className="inline-block text-white border-b border-white">
                            Shop Now
                        </a>
                        <img src={assets.vector} alt="" className='h-4'/>
                    </div>
                </div>

                <div className="flex justify-center">
                    <img
                        src={assets.iphone14_image}
                        alt="iPhone 14 Series"
                        className="h-60 w-96 md:h-60 lg:h-64"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
