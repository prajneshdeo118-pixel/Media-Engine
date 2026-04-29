import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCollection } from '../redux/collectionSlice'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { ArrowLeft } from "lucide-react";
const CollectionPage = () => {
    const Collections = useSelector(state => state.collection.items)
    const dispatch = useDispatch()
    const notify = () => toast('Here is your toast.');
    function remove(id) {
        dispatch(removeCollection(id))
        toast.success("Removed from collections ✅");
    }
    return (
        <div className='w-full flex justify-center absoulute flex-wrap gap-3.5 '>
            <div className="relative w-full flex items-center justify-center mb-8 px-6">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-center">
                    <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 
                     bg-clip-text text-transparent">
                        Media
                    </span>
                    <span className="text-white">
                        Engine
                    </span>
                </h1>
                <Link
                    to="/"
                    className="absolute right-6
               flex items-center gap-2 
               px-5 py-2
               bg-white/10 backdrop-blur-md 
               border border-white/20 
               text-white 
               rounded-xl 
               hover:bg-white/20 
               hover:-translate-x-1 
               transition-all duration-200 
               shadow-md"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Go Back
                </Link>

            </div>



            {Collections?.length > 0 ? (Collections.map((elem, idx) => {
                return (
                    <div key={idx} className='w-[20%] relative h-75 bg-amber-50 rounded-[5px]'>
                        <div className='h-full '>
                            {elem.type == "photo" ? <img className='w-full h-full object-cover' src={elem.thumbnil} alt="img" /> : <video src={elem.link} className='w-full h-full object-cover' autoPlay
                                muted
                                loop
                                playsInline alt='video' />}
                            <button className='absolute bottom-3 right-3
             w-12 h-12
             flex items-center justify-center
             rounded-full
             bg-black
             text-red-400
             shadow-lg shadow-black/40
             hover:bg-red-600
             hover:text-white
             hover:scale-110
             active:scale-95
             transition-all duration-200
             cursor-pointer' onClick={() => {
                                    remove(elem.id)
                                }}>❌</button>
                        </div>
                    </div>
                )
            })) : (<div className="flex items-center justify-center min-h-[70vh]">
                <div className="relative bg-white/10 backdrop-blur-xl 
                  border border-white/20 
                  rounded-2xl 
                  px-10 py-12 
                  text-center 
                  shadow-2xl shadow-black/40
                  w-[90%] max-w-md">

                    {/* Subtle Glow */}
                    <div className="absolute -top-10 -left-10 
                    w-40 h-40 bg-blue-500/20 
                    blur-[100px] rounded-full -z-10"></div>

                    <div className="text-5xl mb-4">📂</div>

                    <h2 className="text-2xl font-semibold text-white mb-2">
                        No Saved Images Yet
                    </h2>

                    <p className="text-gray-300 text-sm mb-6">
                        Start exploring and bookmark your favorite photos to see them here.
                    </p>

                    <Link className="px-6 py-2 rounded-xl
                 bg-linear-to-r from-blue-500 to-purple-600
                 text-white font-medium
                 hover:scale-105 active:scale-95
                 transition-all duration-200 shadow-lg" to={"/"}>Explore More</Link>

                </div>
            </div>)}
        </div>
    )
}

export default CollectionPage
