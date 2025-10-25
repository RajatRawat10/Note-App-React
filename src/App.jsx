import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white' >
      <form className='flex flex-col items-start gap-5 p-10'>
        <input className='px-5 w-1/2 py-2 border-2 rounded outline-none' type="text" placeholder='Enter Task Heading' />
        <textarea className='px-5 w-1/2 py-2 border-2 rounded outline-none' type="text" placeholder='Enter Task Details' />
        <button className='bg-white w-1/2 px-5 py-2 text-black rounded outline-none'>Add Notes</button>
      </form>
    </div>
  )
}

export default App
