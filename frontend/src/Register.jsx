import React from 'react'
import {Link} from 'react-router-dom'
import {BiUser} from 'react-icons/bi'
import {AiOutlineUnlock} from 'react-icons/ai'
import {FaEnvelope} from 'react-icons/fa'
const Register=()=>{
    return (
        <div>
            <div className='bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-blur-sm backdrop-filter bg-opacity-25 relative'>
                <h1 className='text-3xl text-center'>Sign Up</h1>
                <form action=''>
                    <div className='relative my-4'>
                        <input id="username" type="username" placeholder='' className='peer block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600'/>
                        <label htmlFor="username" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-x-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Username</label>
                        <BiUser className='absolute top-4 right-4'/>
                    </div>
                    <div className='relative my-4'>
                        <input id="email" type="email" placeholder='' className='peer block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600'/>
                        <label htmlFor="email" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-x-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Email</label>
                        <FaEnvelope className='absolute top-4 right-4'/>
                    </div>
                    <div className='relative my-4'>
                        <input id="password" type="password" placeholder='' className='peer block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600'/>
                        <label htmlFor='password' className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-x-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Password</label>
                        <AiOutlineUnlock className='absolute top-4 right-4'/>
                    </div>
                    <div className='relative my-4'>
                        <input id="password" type="password" placeholder='' className='peer block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600'/>
                        <label htmlFor='password' className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-x-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Confirm Password</label>
                        <AiOutlineUnlock className='absolute top-4 right-4'/>
                    </div>
                    <button type='submit' className='text-black w-full md-4 text-[18px] mt-6 rounded-full bg-white text-emarald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300'>Login</button>
                    <div className='flex p-2'>
                        <span>Already an user ? <Link to='/login'className='text-blue-400'> Login</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Register;