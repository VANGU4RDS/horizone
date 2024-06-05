'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import supabase from '../essentials/Supabase';

export default function Page() {
    const router = useRouter();
    const [email, setEmail] = useState<string|null|undefined>(null);
    const [username, setUsername] = useState<string|null|undefined>(null);

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

    // Create a logout function
    const logOut = async() => {
        await supabase.auth.signOut();
        router.push('/');
    };

    // Run once on component load
    useEffect(() => {
        getUserSession();
    },[]);
    
  return (
    <>
        <div className='w-full h-screen p-3'>
            <div className='flex flex-col items-center w-full p-3 rounded-md bg-gray-600'>
                <h1 className='text-xl text-center'>Welcome to HoriZone, {username}</h1>
                <h1>Email: {email}</h1>
                <button onClick={logOut}>Log out</button>
            </div>
        </div>
    </>
  )
}
