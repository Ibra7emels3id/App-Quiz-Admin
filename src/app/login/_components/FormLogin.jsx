'use client'
import { useAuth } from '@/app/context/Context';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const FormLogin = () => {
    const {user} = useAuth()
    const [formData, setFormData] = useState({})
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)
    const Router = useRouter()


    // HAndle Change Events
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    // handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const data = await axios.post(`${process.env.NEXT_PUBLIC_SOME_URL}/api/login`, formData)
            localStorage.setItem('token', data.data.token)
            toast.success(data.data.message)
            // Redirect to dashboard
            if (data.data.role === 'admin') {
                window.location.href = '/'
            }
            console.log(data.data.role);
        } catch (error) {
            toast.error(error)
            console.log(error);
            setLoading(false)
        } finally {
            setLoading(false)
            setError(null)
        }
    }


    return (
        <>
            <form className='flex flex-col gap-2 w-[500px] p-7 bg-[#eee] rounded-xl'>
                <h1 className='text-3xl text-center font-semibold text-gray-700'>Login Admin</h1>
                <label htmlFor="name">Email:</label>
                <input onChange={handleChange} className='h-10 outline-none border-none focus:border-none focus:outline-none px-2' type="email" id="email" name="email" required placeholder='enter email' />
                <label htmlFor="email">Password:</label>
                <input onChange={handleChange} className='h-10 outline-none border-none focus:border-none focus:outline-none px-2' type="password" id="password" name="password" required placeholder='enter password' />
                <button type='submit' onClick={handleSubmit} className='bg-blue-600 h-12  text-white font-semibold mt-6 hover:bg-blue-800 translate ease-in-out'>{loading ? <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 animate-[spin_0.8s_linear_infinite] fill-white block mx-auto"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
                        data-original="#000000"
                    />
                </svg> : 'Login'}</button>
            </form>
        </>
    );
}

export default FormLogin;
