'use client'
import React from 'react';
import FormLogin from './_components/FormLogin';
import { useAuth } from '../context/Context';
import { useRouter } from 'next/navigation';

const Page = () => {
    const {user} = useAuth()
    const Router = useRouter()
    
    // check User
    if (user) {
        return Router.push('/')
    }

    return (
        <>
            <div className="flex w-full h-screen">
                <div className="flex items-center justify-center w-full">
                    <FormLogin />
                </div>
            </div>
        </>
    );
}

export default Page;
