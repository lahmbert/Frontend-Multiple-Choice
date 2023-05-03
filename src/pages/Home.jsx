import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div className='bg-slate-300 h-screen w-screen py-10'>
            <div className=' w-screen grid grid-cols-1 md:grid-cols-2 mx-auto p-10 lg:p-20'>
                <div className='items-start'>
                    <div className='text-lg text-blue-500 font-bold'>
                        Welcome To My Quiz
                    </div>
                    <div className='text-5xl font-semibold my-4 text-cyan-900'>
                        Try to Upgrade <br />Yourself with
                    </div>
                    <div className='text-2xl text-red-600 font-medium'>
                        Solve Our Questions
                    </div>
                    <Link to='/auth/register' >
                        <button className='p-1.5 px-5 mx-auto items-center mt-5'>Get Started</button>
                    </Link>
                </div>
                <div className='item-center justify-center mx-auto'>
                    <div className='hidden md:flex font-extrabold hover:animate-none cursor-pointer animate-none text-teal-500 bg-slate-800 py-20 p-10 md:p-14 md:py-24 rounded-full  text-6xl'>Quiz</div>
                </div>
            </div>
        </div>
    )
}

export default Home