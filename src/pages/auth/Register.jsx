import React from 'react'
import { Link } from 'react-router-dom'


const Register = () => {

  return (
    <div className='bg-slate-300 h-screen w-screen py-4'>
      <form>
        <div className=' grid grid-cols-1 w-[18rem] md:w-[20rem] md:my-20 p-4  m-4 rounded-md mx-auto bg-slate-700 '>
          <div className=' text-center text-2xl  text-teal-400 font-bold '>
            Quiz
          </div>
          <div className='text-center p-4 text-slate-200'>
            <div className='my-4'>
              <input type="email" name='email' required placeholder='Email...' className=' focus:outline-none w-full p-1 bg-transparent border-b ' />
            </div>
            <div>
              <input type="password"  name='password' required placeholder='Password...' className=' focus:outline-none w-full p-1 border-b bg-transparent' />
            </div>
          </div>
          <div className='text-center'>
            <button className='bg-teal-400 p-1 px-4 my-2' type="submit">Register</button>
          </div>
          <div className='text-center text-white text-sm my-5'>
            Have an account? <Link to='/auth/login'>Login</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register