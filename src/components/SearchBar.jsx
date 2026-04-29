import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from "../redux/searchSlice"
import { Link } from 'react-router-dom'
const SearchBar = () => {
  const [search, setsearch] = useState("")
  const dispatch = useDispatch()
  function submitHandler(e) {
    e.preventDefault()
    dispatch(setQuery(search))
    setsearch('')

  }
  return (
    <div className="w-full flex items-center justify-center px-4 py-8 sm:py-10">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex flex-col sm:flex-row items-center gap-4 
               bg-white/10 backdrop-blur-lg 
               border border-white/20 
               shadow-2xl shadow-black/30
               rounded-2xl 
               px-4 sm:px-6 
               py-4 
               w-full sm:w-[85%] md:w-[70%] max-w-3xl"
      >
        <input
          type="text"
          placeholder="🔍 Search anything..."
          className="w-full sm:flex-1 
                 bg-transparent text-white 
                 placeholder-gray-300 
                 outline-none text-base sm:text-lg"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />

        <button
          type="submit"
          className="w-full sm:w-auto
                 px-6 py-2 rounded-xl 
                 bg-linear-to-r from-blue-500 to-purple-600 
                 hover:scale-105 active:scale-95 
                 transition-all duration-200 
                 text-white font-medium shadow-lg"
        >
          Search
        </button>
      </form>
    </div>

  )

}

export default SearchBar
