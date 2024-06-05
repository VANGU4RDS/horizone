'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import supabase from '../essentials/Supabase';

export default function Home() {
    const router = useRouter();

    // Check if user is logged in
    const getUserSession = async() => {
        const {data:{session}} = await supabase.auth.getSession();
        if(session){
            router.push('/dashboard');
        };
    };

    // Run only once on component load
    useEffect(() => {
        getUserSession();
    },[])

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
                <img className='w-[80%] sm:h-[50%] sm:w-[25%]' src="HomePage.png" alt="Homepage" />
                <h1 className='text-6xl sm:text-7xl'>нσяιzσηє</h1>
                <h1 className='font-sans sm:text-xl mb-5'>Where self and career growth meets</h1>
                <form className='w-full flex justify-center' action={logIn}>
                    <button className='bg-teal-400 rounded-md py-1 px-2 w-1/2 sm:w-[15%] mt-1 border-[2px] border-teal-700 text-black hover:bg-teal-700 hover:text-white hover:rounded transition-all duration-200 ease-out'>Login</button>
                </form>
                <form className='w-full flex justify-center' action={signUp}>
                    <button className='bg-yellow-400 rounded-md py-1 px-2 w-1/2 sm:w-[15%] mt-1 border-[2px] border-yellow-700 text-black hover:bg-yellow-700 hover:text-white hover:rounded transition-all duration-200 ease-out'>Sign Up</button>
                </form>
            </div>
        </div>
    </>
  )
}
