'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import supabase from '../essentials/Supabase';
import { error } from 'console';
import { toast } from 'react-toastify';
import ToastLayout from '../essentials/ToastLayout';

export default function Page() {
    const router = useRouter();
    const [email, setEmail] = useState<string|null>(null);
    const [password, setPassword] = useState<string|null>(null);

    // Create a button that will go back to home page
    const goBackBtn = () => {
        router.push('/');
    };

    // Create a submission handler
    const submission = async(e:any) => {
        e.preventDefault();
        if(email && password){
            if(email.length > 0 && password.length > 0){
                const {data:{session},error} = await supabase.auth.signInWithPassword({
                    email: email,
                    password: password
                });
                if(session){
                    router.push('/dashboard');
                };
                if(error){
                    toast.error(error.message);
                };
            };
        };
    };

    // Create input handlers
    const inputHandler = (e:any) => {
        var {value,name} = e.target;
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
        };
    };

    // Create a dynamic renderer for easier modification
    const renderer = (type:string, name:string, label:string) => (
        <>
            <div className='flex flex-col w-full items-center'>
                <div className='flex flex-col items-start mt-1'>
                    <label className='text-sm' htmlFor={name}>{label}</label>
                    <input className='bg-gray-300 py-1 px-2 border-gray-400 rounded-md border-[2px]' onChange={inputHandler} type={type} name={name} required/>
                </div>
            </div>
        </>
    );

  return (
    <>
        <ToastLayout>
            <div className='flex justify-center items-center w-full h-screen sm:p-[20rem] p-3'>
                <div className='flex flex-col sm:flex-row items-center w-full py-10 px-3 bg-gray-200 rounded-md shadow-2xl'>
                    <div className='w-full flex flex-col items-center justify-center'>
                        <img className='h-[50%]' src="Login-removebg-preview.png" alt="" />
                    </div>
                    <div className='w-full flex flex-col items-center justify-center'>
                        <h1 className='text-4xl sm:text-5xl font-bold mt-1'>ℓσgιη</h1>
                        <h1 className='italic font-sans mb-5 mt-2'>Access your path to growth</h1>
                        <form className='animate-in *:w-full' onSubmit={submission}>
                            {renderer('email','email','Email:')}
                            {renderer('password','password','Password:')}
                            <div className='w-full flex justify-center mt-1'>
                                <button type='button' className='flex justify-center bg-yellow-500 mr-1 py-2 px-3 rounded-md w-1/2' onClick={goBackBtn}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                                </button>                                
                                <button className='flex justify-center bg-orange-500 ml-1 py-2 px-3 rounded-md w-1/2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ToastLayout>
    </>
  )
}
