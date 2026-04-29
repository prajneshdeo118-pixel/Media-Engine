import React from 'react'
import { fetchPhotos, fetchVideos } from './api/mediaApi'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { Toaster } from "react-hot-toast";
import CollectionPage from './pages/CollectionPage'
const App = () => {
  return (
    <div className='w-full min-h-screen bg-gray-900 text-white p-7'>
      <Toaster position="top-right" />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collection' element={<CollectionPage />} />
      </Routes>

    </div>
  )
}

export default App
