'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Page() {
    const router = useRouter();

    // Create a button that will go back to home page
    const goBackBtn = () => {
        router.push('/');
    };
  return (
    <>
        <div className='flex justify-center items-center w-full h-screen p-3'>
            <div className='flex flex-col items-center w-full py-2 px-3 bg-gray-700 h-[80%] rounded-md'>
                <div className='w-full flex justify-center'>
                    <h1 className='text-4xl font-sans mb-5'>Login</h1>
                </div>
                <div className='w-full flex justify-center'>
                    <button className='bg-gray-500 py-2 px-3 rounded-md w-1/2' onClick={goBackBtn}>Back</button>
                </div>
            </div>
        </div>
    </>
  )
}
