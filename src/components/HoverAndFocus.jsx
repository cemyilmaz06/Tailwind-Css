import React from 'react'

const HoverAndFocus = () => {
  return (
    <div><h1 className='text-2xl'>HoverAndFocus</h1>
    <button className='w-40 bg-sky-400 text-slate-50 rounded-full mx-2 hover:bg-sky-700 shadow-slate-400 '>Save</button>
    <button className='w-40 bg-yellow-400 text-slate-50 rounded-full mx-2 hover:bg-yellow-500 shadow-slate-400 focus:ring-4 focus:ring-yellow-200'>Edit</button>
    </div>
  )
}

export default HoverAndFocus