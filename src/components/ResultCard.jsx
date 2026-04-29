import React from 'react'
import { useState } from 'react';
import { Bookmark } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addtoCollections } from '../redux/collectionSlice';
import toast, { Toaster } from 'react-hot-toast';
const ResultCard = ({ elem }) => {
    const notify = () => toast('Here is your toast.');
    const [loading, setLoading] = useState(true)
    const dipatch = useDispatch()
    function collections(elem) {
        dipatch(addtoCollections(elem))
        toast.success("Added to collection ✅");

    }
    return (
        <div className='w-[20%] relative h-75 bg-amber-50 rounded-[5px]'>
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-10">
                    <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                </div>
            )}
            <div className='h-full '>
                {elem.type == "photo" ? <img className='w-full h-full object-cover' src={elem.thumbnil} onLoad={() => {
                    setLoading(false)
                }} alt="img" /> : <video src={elem.link} className='w-full h-full object-cover' onLoadedData={() => {
                    setLoading(false)
                }} autoPlay
                    muted
                    loop
                    playsInline alt='video' />}
            </div>
            <button onClick={() => {
                collections(elem)

            }} className='cursor-pointer absolute bottom-2.5 right-3.5'><Bookmark /></button>
        </div>
    )
}

export default ResultCard
