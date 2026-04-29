import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/searchSlice'

const Tabs = () => {
  const tabs = ["Photos", "Videos"]
  const dispatch = useDispatch()
  const ActiveTab = useSelector((state) => state.search.activetab)

  return (
    <div className='w-full h-auto flex gap-5 justify-center'>
      {tabs.map((elem, idx) => (
        <button
          key={idx}
          onClick={() => dispatch(setActiveTab(elem))}
          className={`${ActiveTab === elem ? "bg-blue-800" : "bg-emerald-600"} w-32 h-12 transition duration-200 ease-in-out rounded-lg cursor-pointer active:scale-95`}
        >
          {elem}
        </button>
      ))}
    </div>
  )
}

export default Tabs
