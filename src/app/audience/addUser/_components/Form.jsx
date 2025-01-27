'use client'
import { useAuth } from '@/app/context/Context';
import axios from 'axios';
import React, { memo , useState } from 'react';
import { toast } from 'react-toastify';

const Form = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [formData, setFormData] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false);
    const { fetchAllUsers } = useAuth()


    // handle cheangs events
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    };

    // Handle SHow Dilog 
    const handleShowDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    // Handle Register 
    const handleRegister = async (e) => {
        e.preventDefault();
        // Add your registration logic here
        try {
            setLoading(true);
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SOME_URL}/api/register`, formData);
            toast.success(res.data.message, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            setLoading(false);
            fetchAllUsers()
            setFormData({
                name: '',
                email: '',
                password: '',
                identification: '',
            })
        } catch (error) {
            setError(error.response.data.message);
            toast.error(error.response.data.message, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            setLoading(false);

        } finally {
            // Reset form
            setLoading(false)
        }
    }



    return (
        <>
            <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4 m-auto w-full">
                <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
                    <form onSubmit={handleRegister}>
                        <div className="space-y-6">
                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">Name</label>
                                <input
                                    onChange={handleChange}
                                    value={formData.name}
                                    name="name"
                                    type="text"
                                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                                    placeholder="Enter name"
                                />
                            </div>
                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">
                                    Your identification number
                                </label>
                                <div className="relative font-[sans-serif] w-full mx-auto">
                                    <button
                                        type="button"
                                        id="dropdownToggle"
                                        onClick={handleShowDropdown}
                                        className="px-5 py-2.5 w-full rounded text-white text-sm font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
                                    >
                                        Dropdown menu
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-3 fill-white inline ml-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                                clipRule="evenodd"
                                                data-original="#000000"
                                            />
                                        </svg>
                                    </button>
                                    <ul
                                        id="dropdownMenu"
                                        style={{ display: showDropdown ? 'block' : 'none' }}
                                        className="absolute block shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded max-h-96 p-2 overflow-auto"
                                    >
                                        <li onClick={() => {
                                            setFormData({ ...formData, AcademicYear: 'First grade' })
                                            setShowDropdown(false);
                                        }} className="py-2.5 px-5 hover:bg-blue-50 text-black text-sm cursor-pointer">
                                            First grade
                                        </li>
                                        <li onClick={() => {
                                            setFormData({ ...formData, AcademicYear: 'Second grade' })
                                            setShowDropdown(false);
                                        }} className="py-2.5 px-5 hover:bg-blue-50 text-black text-sm cursor-pointer">
                                            Second grade
                                        </li>
                                        <li onClick={() => {
                                            setFormData({ ...formData, AcademicYear: 'Third grade' })
                                            setShowDropdown(false);
                                        }} className="py-2.5 px-5 hover:bg-blue-50 text-black text-sm cursor-pointer">
                                            Third grade
                                        </li>
                                        <li onClick={() => {
                                            setFormData({ ...formData, AcademicYear: 'Fourth grade' })
                                            setShowDropdown(false);
                                        }} className="py-2.5 px-5 hover:bg-blue-50 text-black text-sm cursor-pointer">
                                            Fourth grade
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
                                <input
                                    onChange={handleChange}
                                    value={formData.email}
                                    name="email"
                                    type="text"
                                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">Your identification number</label>
                                <input
                                    onChange={handleChange}
                                    value={formData.identification}
                                    name="identification"
                                    type="number"
                                    minLength={10}
                                    maxLength={15}
                                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                                    placeholder="Enter identification min 10 : max 15"
                                />
                            </div>
                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                                <input
                                    onChange={handleChange}
                                    value={formData.password}
                                    name="password"
                                    type="password"
                                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                                    placeholder="Enter password"
                                />
                            </div>
                        </div>
                        <div className="!mt-12">
                            <button
                                type="submit"
                                className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                            >
                                Create an account
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}

export default memo(Form);
