'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import supabase from '../essentials/Supabase';
import Sidebar from '@/components/Sidebar';
import { Line } from 'rc-progress';

export default function Page() {
    const router = useRouter();
    const [email, setEmail] = useState<string|null|undefined>(null);
    const [username, setUsername] = useState<string|null|undefined>(null);

    // Static certification array
    const certArray:any[] = ['Engineer','Doctor','Forensic Scientist','Lawyer','Prosecutor','Detective','Dog Walker','Restaurant Crew', 'Janitor'];

    // Get user session
    const getUserSession = async() => {
        const {data:{session}} = await supabase.auth.getSession();
        console.log(session);
        if(session){
            setEmail(session.user.email);
            setUsername(session.user.user_metadata.username);
        }
        else{
            router.push('/');
        };
    };

    // Run once on component load
    useEffect(() => {
        getUserSession();
    },[]);
    
  return (
    <>
        <div className='flex w-full h-screen'>
            <div className='w-[15%]'>
                <Sidebar username={username}/>
            </div>
            <div className='w-[85%] flex flex-col items-center p-3 rounded-md'>
                <div className='flex h-[30%] w-full bg-blue-800 text-white p-2 mt-5 rounded-md'>
                    <div className='flex flex-col w-[60%] items-start px-20 py-4 overflow-hidden'>
                        <h1 className='text-2xl text-center'>Welcome {username}!</h1>
                        <h1 className='text-sm font-thin'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </h1>
                    </div>
                    <div className='w-[40%] h-full p-10'>
                        <div className='w-full h-full bg-purpleSidebar-100 rounded-2xl p-5'>
                            <div className='flex flex-col justify-between w-full h-[90%] py-2'>
                                <h1>Profile Strength</h1>
                                <Line className='w-full min-h-[0.5rem] rounded-md' trailColor='#FFFFFF' percent={40} strokeColor='#0EA324'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap justify-between h-[70%] p-5 w-full'>
                    <h1 className='flex w-full text-3xl'>Certifications</h1>
                    {certArray && 
                    certArray.map((element:any) => (
                        <>
                            <div key={element} className='flex justify-center min-w-[32%] rounded-md h-[25%] bg-gray-100 border border-black shadow-2xl'>
                                <h1>{element}</h1>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}
