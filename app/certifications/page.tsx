'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Page() {
    const router = useRouter();
    const staticArray:any[] = [
        {
            certName: 'Engineer',
            desc: 'Fresh graduate from PUP as BSCpE',
            key: 1,
        },
        {
            certName: 'Marketing',
            desc: 'Fresh graduate from PUP as BSCpE',
            key: 2,
        },
        {
            certName: 'Information Technology',
            desc: 'Fresh graduate from PUP as BSCpE',
            key: 3,
        },
        {
            certName: 'Forensic Scientist',
            desc: 'Fresh graduate from PUP as BSCpE',
            key: 4,
        },
        {
            certName: 'Networks Associate',
            desc: 'Cisco Certified Network Associate',
            key: 5,
        },
        {
            certName: 'Engineer',
            desc: 'Fresh graduate from PUP as BSCpE',
            key: 6,
        },
        {
            certName: 'Engineer',
            desc: 'Fresh graduate from PUP as BSCpE',
            key: 7,
        },
    ]

    // Create a go back function
    const goBack = () => {
        router.push('/hub');
    };
  return (
    <>
        <div className='flex flex-col items-center w-full h-screen p-5'>
            <button onClick={goBack}>Go Back</button>
            <div className='flex flex-col items-center w-full h-full p-2 bg-gray-100 rounded-md border-black border'>
                <h1 className='text-xl font-bold'>Your Certifications</h1>
                {staticArray &&
                staticArray.map((element:any) => (
                    <div key={element.key} className='w-full h-[10%] bg-gray-500 mt-2 text-white p-2 rounded-md'>
                        <h1 className='text-2xl'>{element.certName}</h1>
                        <h1>{element.desc}</h1>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}