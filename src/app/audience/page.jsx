'use client'
import React, { useCallback, useState } from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/Context';
import { useRouter } from 'next/navigation';

const Page = () => {
    const [showNavBar, setShowNavBar] = useState('hidden')
    const { user, loading } = useAuth()
    const Router = useRouter()

    const handleShowNavBar = useCallback(() => {
        setShowNavBar(showNavBar === 'hidden' ? 'visible' : 'hidden')
    }, [showNavBar]);

    // Check User
    if (loading) {
        return <div>Loading...</div>
    } else {
        if (!loading && !user) {
            Router.push('/login')
        }
    }


    return (
        <>
            <div className="relative font-[sans-serif] pt-[70px] h-screen">
                <Header handleShowNavBar={handleShowNavBar} />
                <div>
                    <div className="flex items-start">
                        <Navbar showNavBar={showNavBar} />
                        <button
                            onClick={handleShowNavBar}
                            id="toggle-sidebar"
                            className="lg:hidden w-8 h-8 z-[100] fixed top-[74px] left-[10px] cursor-pointer bg-[#007bff] flex items-center justify-center rounded-full outline-none transition-all duration-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#fff"
                                className="w-3 h-3"
                                viewBox="0 0 55.752 55.752"
                            >
                                <path
                                    d="M43.006 23.916a5.36 5.36 0 0 0-.912-.727L20.485 1.581a5.4 5.4 0 0 0-7.637 7.638l18.611 18.609-18.705 18.707a5.398 5.398 0 1 0 7.634 7.635l21.706-21.703a5.35 5.35 0 0 0 .912-.727 5.373 5.373 0 0 0 1.574-3.912 5.363 5.363 0 0 0-1.574-3.912z"
                                    data-original="#000000"
                                />
                            </svg>
                        </button>
                        <Table />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
