'use client';
import supabase from '@/app/essentials/Supabase';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function Sidebar({username}:any) {
    const router = useRouter();

    // Check if user has session
    const getUserSession = async() => {
        const {data:{session}} = await supabase.auth.getSession();
        if(session){

        }
        else{
            router.push('/');
        };
    };

    // Create a function to go to the hub
    const hubFunc = () => {
        router.push('/hub');
    };

    // Create a log out function
    const logOut = async() => {
        await supabase.auth.signOut();
        getUserSession();
    };

    useEffect(() => {
        getUserSession();
    },[])
  return (
    <>
        <div className='flex flex-col items-center w-full h-full bg-black'>
            <div className='flex justify-center'>
                <img className='w-[80%]' src="/HoriZone.png" alt="Horizone" />
            </div>
            <div className='flex flex-col items-center justify-evenly w-full h-full bg-blue-800 px-2'>
                <div className='flex flex-col items-center w-[75%]'>
                    <div className='w-[50%] p-[0.1rem] rounded-full bg-black'>
                        <img className='rounded-full w-full' src="home.png" alt="" />
                    </div>
                    <h1 className='text-white'>{username}</h1>
                    <h1 className='bg-white p-1 rounded-md text-xs'>Fresh Graduate</h1>
                </div>
                <div className='flex flex-col items-start bg-purpleSidebar-100 w-full rounded-md px-2 py-3'>
                    <ul className='w-full'>
                        <div className='flex items-center w-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-grid text-white"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                            <div className='px-1 w-full'>
                                <li className='bg-white rounded-md p-1 mt-1 text-xs'>Dashboard</li>
                            </div>
                        </div>
                        <div className='flex items-center w-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user text-white"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            <div className='px-1 w-full'>
                                <li className='bg-white rounded-md p-1 mt-1 text-xs'>Profile</li>
                            </div>
                        </div>
                        <div className='flex items-center w-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star text-white"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            <div className='px-1 w-full'>
                                <li className='bg-white rounded-md p-1 mt-1 text-xs'>Skill Level and Experiences</li>
                            </div>
                        </div>
                        <div className='flex items-center w-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-briefcase text-white"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                            <div className='px-1 w-full'>
                                <li className='bg-white rounded-md p-1 mt-1 text-xs'>Exclusive Offers</li>
                            </div>
                        </div>
                        <div className='flex items-center w-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bell text-white"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                            <div className='px-1 w-full'>
                                <button className='flex justify-start bg-white rounded-md p-1 mt-1 text-xs w-full' onClick={hubFunc}>Interactive Hub</button>
                            </div>
                        </div>
                        <div className='flex items-center w-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-log-out text-white"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                            <div className='px-1 w-full'>
                                <button className='flex justify-start bg-white rounded-md p-1 mt-1 text-xs w-full' onClick={logOut}>Log out</button>
                            </div>
                        </div>
                    </ul>
                </div>
                <div className='flex flex-col items-center bg-purpleSidebar-100 w-full rounded-md px-2 py-3'>
                    <img className='w-[50%]' src="Ori.png" alt="" />
                    <h1 className='text-center text-xs font-sans text-white'>Need Support?</h1>
                    <button className='text-center font-sans bg-white px-2 rounded-md mt-1'>Chat with Ori</button>
                </div>
            </div>
        </div>
    </>
  )
}
