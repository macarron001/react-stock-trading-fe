import React from 'react'

import login from '../../src/login.jpg'
import logoImg from '../stockx.png'

export default function Login() {
  return (
    <div className='relative h-screen w-full bg-zinc-900/90'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay sm:h-screen' src={login} alt="" />

        <div className='flex justify-center items-center h-full'>
            <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
            <img className='object-scale-down h-20 w-40 mx-auto ' src={logoImg} alt="/" />
                <div className='flex flex-col mb-4 font-semibold'>
                    <label>Email</label>
                    <input className='border relative bg-gray-100 p-2' type="text" />
                </div>
                <div className='flex flex-col py-2 font-semibold'>
                    <label>Password</label>
                    <input className='border relative bg-gray-100 p-2' type="password" />
                </div>
                <button className='w-full py-3 mt-5 bg-emerald-500 hover:bg-emerald-500 relative text-white'>Sign In</button>
                <div className='flex justify-between mt-3 font-medium'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p>Create an account</p>
                </div>
            </form>
        </div>
    </div>
  )
}