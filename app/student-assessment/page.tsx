'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Page() {
    const router = useRouter();

    // Go to home function
    const goHome = () => {
        router.push('home');
    };

  return (
    <>
        <div className='w-full h-screen'>
            <div className='flex flex-col justify-center items-center w-full h-full p-20'>
                <h1 className='text-4xl mb-2 w-1/4 text-center font-bold'>Student Assessment</h1>
                <div className='animate-in flex justify-center bg-teal-500 rounded-md w-1/4 h-full p-5'>
                    <form className='flex flex-col items-centerw-1/2 h-full' action="">
                        <div className='w-full flex flex-col items-start p-1'>
                            <label htmlFor="">Sample Data:</label>
                            <input type="text" className='border-black border rounded-md px-2 py-1 w-full'/>
                        </div>
                        <div className='w-full flex flex-col items-start p-1'>
                            <label htmlFor="">Sample Data:</label>
                            <input type="text" className='border-black border rounded-md px-2 py-1 w-full'/>
                        </div>
                        <div className='w-full flex flex-col items-start p-1'>
                            <label htmlFor="">Sample Data:</label>
                            <input type="text" className='border-black border rounded-md px-2 py-1 w-full'/>
                        </div>
                        <div className='w-full flex flex-col items-start p-1'>
                            <label htmlFor="">Sample Data:</label>
                            <input type="text" className='border-black border rounded-md px-2 py-1 w-full'/>
                        </div>
                        <div className='w-full flex flex-col items-start p-1'>
                            <label htmlFor="">Sample Data:</label>
                            <input type="text" className='border-black border rounded-md px-2 py-1 w-full'/>
                        </div>
                        <div className='w-full flex flex-col items-start p-1'>
                            <label htmlFor="">Sample Data:</label>
                            <input type="text" className='border-black border rounded-md px-2 py-1 w-full'/>
                        </div>
                        <div className='w-full flex flex-col items-start p-1'>
                            <button type='button' onClick={goHome} className='bg-cream-400 w-full rounded-md px-2 py-1'>
                                Accept
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
