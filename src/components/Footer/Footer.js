import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
                <div className='flex'>
                    <div>
                    <h2 className="text-2xl font-semibold mb-2">Exclusive</h2>
                    <p className="text-gray-400 mb-1">Subscribe</p>
                    <p className="text-gray-400 mb-4">Get 10% off your first order</p>
                    <div className="flex items-center border border-gray-700 rounded-md overflow-hidden">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-white px-3 py-2 text-sm w-full outline-none"
                        />
                        <img
                            src={assets.send_icon}
                            alt="Send"
                            className="w-9 h-9 bg-white p-2 cursor-pointer"
                        />
                    </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Support</h3>
                    <p className="text-gray-400 mb-1">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh</p>
                    <p className="text-gray-400 mb-1">exclusive@gmail.com</p>
                    <p className="text-gray-400">+88015-88888-9999</p>
                </div>
                <div className="flex flex-col gap-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Account</h3>
                        <nav className="flex flex-col gap-2">
                            <a href="#" className="text-gray-400 hover:text-white">My Account</a>
                            <a href="#" className="text-gray-400 hover:text-white">Login / Register</a>
                            <a href="#" className="text-gray-400 hover:text-white">Cart</a>
                            <a href="#" className="text-gray-400 hover:text-white">Wishlist</a>
                            <a href="#" className="text-gray-400 hover:text-white">Shop</a>
                        </nav>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Quick Link</h3>
                        <nav className="flex flex-col gap-2">
                            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-white">Terms Of Use</a>
                            <a href="#" className="text-gray-400 hover:text-white">FAQ</a>
                            <a href="#" className="text-gray-400 hover:text-white">Contact</a>
                        </nav>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Download App</h3>
                    <p className="text-gray-400 mb-4">Save $3 with App New User Only</p>
                    <div className="flex gap-2">
                        <img src={assets.qr_code} alt="" className="w-20 h-20" />
                        <div className="flex flex-col gap-2">
                            <img src={assets.google_play_icon} alt="" className="w-28" />
                            <img src={assets.appstore_icon} alt="" className="w-28" />
                        </div>
                    </div>
                    <div className="flex justify-start gap-4 mt-4 bg-white">
                        <img src={assets.fb_icon} alt="" className="w-8 h-8" />
                        <img src={assets.insta_icon} alt="" className="w-8 h-8" />
                        <img src={assets.x_icon} alt="" className="w-8 h-8" />
                        <img src={assets.linkedin_icon} alt="" className="w-8 h-8" />
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
                © All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
