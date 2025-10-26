import React, { useState } from 'react'

const App = () => {
  const [titleInput, setTitleInput] = useState("")
  const [detailInput, setDetailInput] = useState("")
  const [Task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    const newtask = [...Task]    //copy of the task
    newtask.push({ titleInput, detailInput })
    setTask(newtask)
    //  form reset 
    setTitleInput("");
    setDetailInput("");
  }

  return (
    <div className='h-screen lg:flex bg-black text-white' >
      <form onSubmit={(e) => {
        submitHandler(e)
      }
      } className='flex lg:w-1/2 flex-col items-start gap-5 p-10'>
        <h1 className='text-2xl m-5 font-bold'>Add Notes</h1>
        {/* heading */}
        <input className='font-medium px-5 w-1/2 py-2 border-2 rounded outline-none' type="text" placeholder='Enter Task Heading' value={titleInput} onChange={(e) => {
          setTitleInput(e.target.value)
        }
        } />

        {/* note detail */}
        <textarea onChange={(e) => {
          setDetailInput(e.target.value)
        }
        } className='font-medium px-5 w-1/2 h-34 py-2 border-2 rounded outline-none' type="text" value={detailInput} placeholder='Enter Task Details' />

        {/* add btn */}
        <button className='active:bg-green-500 active:scale-98 font-medium bg-white w-1/2 px-5 py-2 text-black rounded outline-none'>Add Notes</button>
      </form>
      <div className='p-10 lg:w-1/2 lg:border-l-2'>
        <h1 className='text-2xl mb-4 font-bold'>Your Notes</h1>
        <div className='gap-5 flex  flex-wrap flex-row overflow-auto h-full'>
          {Task.map(function (elem, idx) {
            return <div key={idx} className='h-42 w-42 bg-[#696969] rounded-2xl'>
              <div>{elem.titleInput}</div>
              <div>{elem.detailInput}</div>
            </div>
          })}
        </div>

      </div>

    </div>
  )

}

export default App
