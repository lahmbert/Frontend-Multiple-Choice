import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'

const navLink = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Quiz',
        path: '/quiz'
    },
    {
        name: 'Contact',
        path: '/contact'
    },
]

const Navbar = () => {
    const [nav, SetNav] = useState(false)
    const handleNav = () => {
        SetNav(!nav)
    }
    return (
        <div className='sticky top-0'>
            <div className='flex justify-between mx-auto w-screen shadow-md bg-gray-600 px-8 py-4'>
                <div className=' text-teal-400 text-4xl font-bold bg-transparent'>Quiz</div>
                <div className='hidden md:flex justify-center gap-4 font-semibold text-gray-100 text-lg'>
                    {
                        navLink.map((item, index) => (
                            <NavLink to={item.path} className={navClass => navClass.isActive ? ' font-extrabold text-lime-500' : ' font-bold'} key={index}>{item.name}</NavLink>
                        ))
                    }
                </div>
                <div>
                    <div onClick={handleNav} className='flex md:hidden text-xl p-2 text-teal-400' >
                        {!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
                    </div>
                    <Link to='/auth' className='hidden md:flex'>
                        <button className='md:px-4 md:p-1.5'>Login</button>
                    </Link>
                </div>
            </div>
            <div className={nav ? 'flex md:hidden fixed left-0 ease-out duration-500 top-0 w-[60%] h-full border-r shadow-lg border-gray-300 bg-gray-600' : 'fixed left-[100%]'} >
                <div className=''>
                    <div className=' text-teal-400 text-4xl p-4 px-8 grid grid-cols-1 fixed w-[60%] font-bold border-b border-gray-200'>Quiz</div>
                    <div className='grid grid-col-1 mt-20 bg-transparent fixed w-[60%]'>
                        {
                            navLink.map((item, index) => (
                                <div key={index} className='my-2 py-2 px-8  border-b'>
                                    <NavLink to={item.path} className={navClass => navClass.isActive ? ' font-extrabold text-lime-500' : ' font-bold'}>{item.name}</NavLink>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar