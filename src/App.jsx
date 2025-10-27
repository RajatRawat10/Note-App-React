import React, { useState } from 'react'
import { X } from 'lucide-react';

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

// for delete icon
  const DeleteNote = (idx) => {
    const CopyTask = [...Task]
    CopyTask.splice(idx, 1)
    setTask(CopyTask)
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
        <button className='active:bg-green-500 active:scale-98 font-medium cursor-pointer bg-white w-1/2 px-5 py-2 text-black rounded outline-none'>Add Notes</button>
      </form>
      <div className='p-10 lg:w-1/2 lg:border-l-2'>
        <h1 className='text-2xl mb-4 font-bold'>Your Notes</h1>
        <div className='gap-5 flex  flex-wrap flex-row overflow-auto h-[90%]'>
          {Task.map(function (elem, idx) {
            return <div key={idx} className='relative h-42 w-42 p-5 bg-cover bg-[#ffff] rounded-2xl bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBON57skE0UW5viKsvBrGXT_qQ6-p3sZ0abU5zkFnjukc6rmWjTYMbXTDHekcD4dGiT0&usqp=CAU")]'>
              <h3 onClick={() => {
                DeleteNote(idx)
              }
              } className='active:scale-95 absolute cursor-pointer bg-red-600 p-1 rounded-full right-2 top-1 '><X color="black" strokeWidth="2.5" /></h3>
              <div className='p-2 font-bold text-black text-2xl'>{elem.titleInput}</div>
              <div className='p-2 font-medium text-gray-500 rounded w-full '>{elem.detailInput}</div>
            </div>
          })}
        </div>

      </div>

    </div>
  )

}

export default App
