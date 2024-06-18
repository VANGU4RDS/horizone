'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Page() {
    const router = useRouter();
    const certArray:any[] = ['Engineer','Doctor','Forensic Scientist','Lawyer','Prosecutor','Detective','Dog Walker','Restaurant Crew', 'Janitor'];

    // Create a go back function
    const goBack = () => {
        router.push('/hub');
    };
  return (
    <>
        <div className='flex flex-col items-center w-full h-screen p-5'>
            <button onClick={goBack}>Go Back</button>
            <div className='flex flex-col items-center w-full h-full p-2 bg-gray-100 rounded-md border-black border'>
                <h1 className='text-xl font-bold'>Suggested Certifications</h1>
                {certArray &&
                certArray.map((element:any) => (
                    <div className='w-full h-[10%] bg-gray-500 mt-2 text-white p-2 rounded-md'>
                        <h1 className='text-2xl'>{element}</h1>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}
