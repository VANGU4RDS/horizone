'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Page() {
    const router = useRouter();

    // Create a function to go back to home page
    const goBackBtn = () => {
        router.push('/');
    };
    
  return (
    <>
        <div className='w-full h-screen'>
            <div className='flex justify-center items-center w-full h-full p-20'>
                <div className='animate-in flex justify-center bg-teal-500 rounded-md w-full h-full'>
                    <h1>Hello world</h1>
                    <div>
                        <button onClick={goBackBtn}>Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
