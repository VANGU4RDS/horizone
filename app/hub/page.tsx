'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Page() {
  const router = useRouter();

  // Create a function to go to certifications
  const sugCert = () => {
    router.push('/suggested-certification');
  };

  // Create a function to go to certifications
  const certifications = () => {
    router.push('/certifications');
  };

  // Create a function to go back
  const goBack = () => {
    router.push('/home');
  };
  return (
    <>
      <div className='relative w-full h-screen'>
        <img className='w-full h-full' src="japanese-style-living-room.jpg" alt="" />
        <h1 className='absolute top-10 left-[36%] text-4xl text-white font-mono'>HoriZone Interactive Hub</h1>
        <button className='absolute top-[15rem] w-[6rem] h-[25rem] left-[18rem] opacity-0 hover:opacity-100' onClick={goBack}>Go Back</button>
        <button className='absolute top-[20rem] w-[10rem] h-[15rem] right-[38rem] opacity-0 hover:opacity-100' onClick={certifications}>Your Certifications</button>
        <button className='absolute top-[20rem] w-[8  rem] h-[15rem] right-[30rem] opacity-0 hover:opacity-100' onClick={sugCert}>Suggested Certificates</button>
      </div>
    </>
  )
}