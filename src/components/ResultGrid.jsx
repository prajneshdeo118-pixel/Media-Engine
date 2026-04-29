import React, { useEffect } from 'react'
import { fetchPhotos, fetchVideos } from '../api/mediaApi'
import { setActiveTab, setError, setLoading, setQuery, setResult } from '../redux/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './ResultCard'
import { Loader } from 'lucide-react';
const ResultGrid = () => {
    const dispatch = useDispatch()
    const { query, activetab, results, error, loading } = useSelector((state) => state.search)
    let data = [];
    useEffect(() => {
        const getData = async () => {
            try {
                if (!query) return;
                else {
                    dispatch(setLoading());
                    if (activetab == "Photos") {
                        const res = await fetchPhotos(query)
                        data = res.results.map((elem) => ({
                            type: 'photo',
                            id: elem.id,
                            title: elem.alt_description,
                            link: elem.urls.full,
                            thumbnil: elem.urls.small
                        }))
                    }
                    if (activetab == "Videos") {
                        const res = await fetchVideos(query)
                        data = res.map((elem) => ({
                            id: elem.id,
                            title: elem.user.name,
                            type: 'video',
                            link: elem.video_files[0].link
                        }))
                    }
                }
                dispatch(setResult(data))

            } catch (error) {
                dispatch(setError(err.message))
            }
        }
        getData()
    }, [query, activetab])
    if (!query) {
        return (
            <div className="flex items-center justify-center 
                min-h-[30vh] px-4">

                <div className="bg-white/10 
                  w-full sm:w-[80%] md:w-[50%] lg:w-[30%] 
                  backdrop-blur-md 
                  p-6 sm:p-8 
                  rounded-2xl 
                  shadow-xl 
                  border border-white/20 
                  text-center">

                    <h1 className="text-xl sm:text-2xl 
                   font-bold text-white mb-3">
                        🔎 Ready to Explore?
                    </h1>

                    <p className="text-gray-300 text-sm sm:text-base">
                        Enter a keyword and discover stunning content
                    </p>

                </div>
            </div>

        )
    }
    if (error) return (
        <div className="flex items-center justify-center h-[50vh]">
            <div className="bg-red-500/10 backdrop-blur-lg 
                    border border-red-400/30 
                    text-red-300 
                    px-8 py-6 
                    rounded-2xl 
                    shadow-xl shadow-red-900/30 
                    w-[90%] max-w-md text-center">

                <h2 className="text-2xl font-semibold mb-2">
                    ⚠️ Something went wrong
                </h2>

                <p className="text-red-200 text-sm">
                    {error}
                </p>
            </div>
        </div>
    )
    if (loading) return (<div className='w-full h-[50vh] flex items-center justify-center' >
        <Loader />
    </div>)
    return (
        <div className="min-h-screen w-full 
                flex flex-wrap justify-center 
                gap-4 sm:gap-6 
                px-4 sm:px-6 lg:px-10 
                py-6">
            {results?.length > 0 ? (
                results.map((elem, idx) => (
                    <ResultCard key={idx} elem={elem} />
                ))
            ) : (
                <p className="text-center text-gray-400">
                    No results found
                </p>
            )}
        </div>
    )

}

export default ResultGrid
