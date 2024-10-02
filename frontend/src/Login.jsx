import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';
import { AiOutlineUnlock } from 'react-icons/ai';

const Login = () => {
    const navigate=useNavigate();
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = credentials;

        // Basic validation
        if (!email || !password) {
            console.error("Please fill in all fields");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            });

            const data = await response.json();

            if (data.success) {
                console.log("Login successful", data);
                navigate('/register');
                // Handle successful login (e.g., redirect or store token)
            } else {
                console.error("Login failed", data.message);
            }
        } catch (error) {
            console.error("Error during login", error);
        }
    };

    return (
        <div>
            <div className='bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-blur-sm backdrop-filter bg-opacity-25 relative'>
                <h1 className='text-3xl text-center'>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className='relative my-4'>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder=''
                            value={credentials.email}
                            onChange={handleChange}
                            className='peer block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600'
                        />
                        <label htmlFor="email" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-x-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Email</label>
                        <FaEnvelope className='absolute top-4 right-4' />
                    </div>
                    <div className='relative my-4'>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder=''
                            value={credentials.password}
                            onChange={handleChange}
                            className='peer block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600'
                        />
                        <label htmlFor='password' className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-x-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Password</label>
                        <AiOutlineUnlock className='absolute top-4 right-4' />
                    </div>
                    <div className='flex justify-between items-center p-1'>
                        <div className='flex gap-2 items-center'>
                            <input type='checkbox' id='remember' />
                            <label htmlFor='remember'>Remember Me</label>
                        </div>
                        <span>Forgot Password?</span>
                    </div>
                    <button type='submit' className='w-full md-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300'>Login</button>
                    <div className='flex p-2'>
                        <span>Create a new account? <Link to='/register' className='text-blue-700 underline'> Register</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
