import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { AiOutlineUnlock } from 'react-icons/ai';
import { FaEnvelope } from 'react-icons/fa';

const Register = () => {
    const [newUser, setNewUser] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });

    const handleUser = async (e) => {
        e.preventDefault();
        if (newUser.password !== newUser.password2) {
            console.error("Passwords do not match");
            return;
        }

        if (!newUser.username || !newUser.email || !newUser.password) {
            console.error("Enter all the required fields");
            return;
        }

        const res = await fetch("http://localhost:5000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        });

        const data = await res.json();

        if (data.success) {
            console.log("Registration successful", data);
        } else {
            console.error("Registration failed", data.message);
        }
    };

    return (
        <div>
            <div className='bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-blur-sm backdrop-filter bg-opacity-25 relative'>
                <h1 className='text-3xl text-center'>Sign Up</h1>
                <form onSubmit={handleUser}>
                    <div className='relative my-4'>
                        <input
                            id="username"
                            type="text"
                            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                            className='peer block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600'
                        />
                        <label htmlFor="username" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-x-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Username</label>
                        <BiUser className='absolute top-4 right-4' />
                    </div>
                    <div className='relative my-4'>
                        <input
                            id="email"
                            type="email"
                            placeholder=''
                            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                            className='peer block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600'
                        />
                        <label htmlFor="email" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-x-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Email</label>
                        <FaEnvelope className='absolute top-4 right-4' />
                    </div>
                    <div className='relative my-4'>
                        <input
                            id="password"
                            type="password"
                            placeholder=''
                            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                            className='peer block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600'
                        />
                        <label htmlFor='password' className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-x-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Password</label>
                        <AiOutlineUnlock className='absolute top-4 right-4' />
                    </div>
                    <div className='relative my-4'>
                        <input
                            id="password2"
                            type="password"
                            placeholder=''
                            onChange={(e) => setNewUser({ ...newUser, password2: e.target.value })}
                            className='peer block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600'
                        />
                        <label htmlFor='password2' className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-x-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Confirm Password</label>
                        <AiOutlineUnlock className='absolute top-4 right-4' />
                    </div>
                    <button type='submit' className='w-full md-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300'>Register</button>
                    <div className='flex p-2'>
                        <span className='text-black'>Existing user? <Link to='/login' className='text-blue-500 underline'> Login</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
