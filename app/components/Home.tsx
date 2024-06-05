'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Home() {
    const router = useRouter();

    // Create a function to go to login page
    const logIn = async() => {
        router.push('login');
    };

    // Create a function to go to sign up page
    const signUp = async() => {
        router.push('/signup');
    };

  return (
    <>
        <div className='flex justify-center w-full h-full p-3 my-auto'>
            <div className='flex flex-col justify-center items-center h-full w-full rounded-md py-3'>
                <h1 className='text-5xl sm:text-7xl font-sans'>HoriZone</h1>
                <h1 className='font-thin text-sm sm:text-xl mb-5'>Where self and career growth meets</h1>
                <form className='w-full flex justify-center' action={logIn}>
                    <button className='bg-gray-400 rounded-md py-1 px-2 w-1/2 sm:w-[15%] mt-1 border-[2px] border-gray-700 text-black hover:bg-gray-700 hover:text-white hover:rounded transition-all duration-200 ease-out'>Login</button>
                </form>
                <form className='w-full flex justify-center' action={signUp}>
                    <button className='bg-gray-400 rounded-md py-1 px-2 w-1/2 sm:w-[15%] mt-1 border-[2px] border-gray-700 text-black hover:bg-gray-700 hover:text-white hover:rounded transition-all duration-200 ease-out'>Sign Up</button>
                </form>
            </div>
        </div>
    </>
  )
}
