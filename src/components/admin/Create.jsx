import { XIcon } from '@heroicons/react/outline';
import { useState } from 'react'


const Create = ({ setCreating }) => {

  const handleClose = () => setCreating(false)

  return (
    <div className="bg-zinc-200 opacity-80 fixed inset-0 z-50 w-screen   ">
      <div className="flex h-screen justify-center items-center ">
        <div className='flex justify-center items-center h-full'>
          <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
            <div className="h-10 w-full mb-12">
              <div className="flex justify-end mb-4">
                <XIcon onClick={handleClose} className='w-5 justify-end cursor-pointer' />
              </div>
              <div className="text-center text-lg font-medium text-emerald-700">
                <p>Who are we adding?</p>
              </div>
            </div>
            <div className='flex flex-col mb-4 font-semibold'>
              <label>Email</label>
              <input className='border relative bg-gray-100 p-2' type="text" />
            </div>
            <div className='flex flex-col py-2 font-semibold'>
              <label>Password</label>
              <input className='border relative bg-gray-100 p-2' type="password" />
            </div>
            <button className='w-full py-3 mt-5 bg-emerald-700 hover:bg-emerald-500 relative hover:text-white'>Register User</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create