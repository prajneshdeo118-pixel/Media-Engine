import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="flex items-center flex-col justify-center relative 
                px-4 py-6 sm:py-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl 
                 font-extrabold text-center tracking-wide">
                <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 
                     bg-clip-text text-transparent">
                    Media
                </span>
                <span className="text-white">
                    Engine
                </span>
            </h1>
            <Link
                to={"/collection"}
                className=" px-4 sm:px-6 py-2 mt-8
               rounded-xl 
               bg-linear-to-r from-blue-500 to-purple-600 
               hover:scale-105 active:scale-95 
               transition-all duration-200 
               text-white text-sm sm:text-base
               font-medium shadow-lg"
            >
                Your Collections
            </Link>

        </div>
    )
}

export default Navbar
