'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Page() {
    const router = useRouter();

    // Create a function to go back to home page
    const goBackBtn = () => {
        router.push('/');
    };

    // Create a function to go to student assessment
    const studentMode = () => {
        router.push('/student-assessment');
    };

    // Create a function to go to professional assessment
    const professionalMode = () => {
        router.push('/professional-assessment');
    };
    
  return (
    <>
        <div className='w-full h-screen'>
            <div className='flex flex-col justify-center items-center w-full h-full p-20'>
                <h1 className='text-4xl mb-2 w-1/4 text-center font-bold'>Professional Attainment</h1>
                <div className='animate-in flex justify-center bg-teal-500 rounded-md w-full h-full'>
                    <div className='w-1/2 flex flex-col items-center justify-center h-full p-3'>
                        <button onClick={studentMode} className='flex flex-col items-center justify-center w-full h-full bg-white rounded-md scale-[100%] hover:scale-[90%] transition-all duration-200 ease-out'>
                            <img className='w-[80%] h-[80%]' src="school_assessment.png" alt="Student" />
                            <h1 className='text-2xl mt-2 font-bold'>Student</h1>
                        </button>
                    </div>
                    <div className='w-1/2 flex flex-col items-center justify-center h-full p-3'>
                        <button onClick={professionalMode} className='flex flex-col items-center justify-center w-full h-full bg-white rounded-md scale-[100%] hover:scale-[90%] transition-all duration-200 ease-out'>
                            <img className='w-[80%] h-[80%]' src="professional_assessment.png" alt="Professional" />
                            <h1 className='text-2xl mt-2 font-bold'>Professional</h1>
                        </button>
                    </div>
                </div>
                {/* <button className='font-sans mt-2'>Want to skip this? Click here</button> */}
            </div>
        </div>
    </>
  )
}
