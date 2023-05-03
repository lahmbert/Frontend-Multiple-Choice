import React from 'react'
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='text-center fixed text-teal-200 bottom-0 md:text-sm bg-slate-800 grid grid-cols-1 md:grid-cols-3 p-4 w-screen text-xs'>
      <div className='my-1'>
        &copy; Copyright 2023 Quiz. All Right Reserved
      </div>
      <div className='my-1'>
        Terms &#x2022; Privacy Policy
      </div>
      <div className='my-1'>
        <div className='inline-flex text-sm md:text-xl gap-2'>
          <Link to='fb'>
            <BsFacebook className='hover:scale-150' />
          </Link>
          <Link to='GitHub' >
            <BsGithub className='hover:scale-150' />
          </Link>
          <Link to='IG'>
            <BsInstagram className='hover:scale-150' />
          </Link>
          <Link to='linked'>
            <BsLinkedin className='hover:scale-150' />
          </Link>
          <Link to='Twitter'>
            <BsTwitter className='hover:scale-150' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer