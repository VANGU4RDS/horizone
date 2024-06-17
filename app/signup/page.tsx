'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import supabase from '../essentials/Supabase';
import { toast } from 'react-toastify';
import ToastLayout from '../essentials/ToastLayout';

export default function Page() {
    const router = useRouter();
    const [email, setEmail] = useState<string|null>(null);
    const [username, setUsername] = useState<string|null>(null);
    const [password, setPassword] = useState<string|null>(null);
    const [confirmPass, setConfirmPass] = useState<string|null>(null);

    // Create input handlers
    const inputHandler = (e:any) => {
        var {value,name} = e.target;
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'username':
                setUsername(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'confirmPass':
                setConfirmPass(value);
                break;
        };
    };

    // Handle submission
    const submission = async(e:any) => {
        e.preventDefault();
        const insertToDB = async() => {
            const {data, error} = await supabase.from('users').insert({
                username: username
            });
        };
        if(email && username){
            if(email.length > 0 && username.length > 0){
                if(password && confirmPass){
                    if(password == confirmPass){
                        const {data, error} = await supabase.auth.signUp(
                            {
                                email: email,
                                password: password,
                                options: {
                                    data: {
                                        username: username,
                                    }
                                }
                            }
                        );
                        if(data){
                            await insertToDB();
                            router.push('/home');
                        }
                        if(error){
                            toast.error('Please retry account creation');
                        };
                    }
                    else{
                        toast.error('Passwords do not match');
                    };
                };
            }
            else{
                toast.error('Please complete the form.');
            };
        };
    };

    // Get user session
    const getUserSession = async() => {
        const {data:{session}} = await supabase.auth.getSession();
        console.log(session);
        if(session){
            router.push('/home');
        };
    };
    
    // Create a button that will go back to home page
    const goBackBtn = () => {
        router.push('/');
    };
    
    // Run once on component load
    useEffect(() => {
        getUserSession();
    },[]);

    // Create a dynamic renderer for easier modification
    const renderer = (type:string, name:string, label:string) => (
        <>
            <div className='flex flex-col w-full items-center'>
                <div className='flex flex-col items-start'>
                    <label htmlFor={name}>{label}</label>
                    <input className='bg-gray-300 py-1 px-2 border-gray-400 rounded-md border-[2px]' onChange={inputHandler} type={type} name={name} required/>
                </div>
            </div>
        </>
    );
  return (
    <>
        <ToastLayout>
            <div className='flex justify-center items-center p-3 sm:p-20 w-full h-screen'>
                <div className='flex flex-col sm:flex-row items-center py-10 px-3 rounded-md bg-gray-200 w-full sm:w-[75%] shadow-2xl'>
                    <div className='flex flex-col items-center w-full h-full'>
                        <img className='w-[50%] sm:w-[75%]' src="Signup-removebg-preview.png" alt="" />
                    </div>
                    <div className='flex flex-col items-center w-full'>
                        <h1 className='font-bold text-4xl text-center'>ѕιgη υρ</h1>
                        <h1 className='mb-5 font-sans mt-1'>Come and Join the path to growth</h1>
                        <form className='animate-in flex flex-col items-center' onSubmit={submission}>
                            {renderer('email','email','Email:')}
                            {renderer('text','username','Username:')}
                            {renderer('password','password','Password:')}
                            {renderer('password','confirmPass','Confirm Password:')}
                            <div className='flex items-center w-full mt-2'>
                                <div className='flex w-full px-1'>
                                    <button onClick={goBackBtn} className='py-2 px-3 bg-orange-500 border-[2px] w-full h-[4rem] rounded-md border-orange-800'>Go Back</button>
                                </div>
                                <div className='flex w-full px-1'>
                                    <button  className='py-2 px-3 bg-teal-500 border-[2px] w-full rounded-md h-[4rem] border-teal-800'>Create Account</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </ToastLayout>
    </>
  )
}
