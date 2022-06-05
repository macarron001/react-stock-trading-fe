import React from 'react'

import register from '../../src/register.jpg'
import logoImg from '../stockx.png'

export default function Login3() {
  return (
    <div className='w-full h-screen flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[650px] shadow-lg shadow-gray-600 sm:max-w-[900px] rounded'>
            <div className='w-full h-[650px] hidden md:block'>
                <img className='w-full h-full rounded' src={register} alt="/" />
            </div>
            <div className='p-4 flex flex-col justify-around'>
            <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
            <img className='object-scale-down h-20 w-40 mx-auto' src={logoImg} alt="/" />
                <div className='flex flex-col py-2'>
                    <input className='border p-2' type="text" placeholder='Email'/>
                </div>
                <div className='flex flex-col py-2'>
                    <input className='border p-2' type="password" placeholder='Password' />
                </div>
                <div className='flex flex-col py-2'>
                    <input className='border p-2' type="password" placeholder='Confirm Password' />
                </div>
                <button className='border w-full my-5 py-2 bg-emerald-600 hover:bg-emerald-300 text-white'>Register</button>
            </form>
                <p className='text-center'>Already have an account?</p>
            </div>
        </div>
    </div>
  )
}