import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom'


const Login = () => {

  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false))

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [user, pwd])



  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const data = {
          "email": user,
          "password": pwd
        }
      const url = 'http://localhost:3001/login'
      if (errMsg === '') {
        await axios.post(url, data, {
          headers: {
              'Content-Type': 'application/json',
          }})
        .then(res => console.log(res))
        .catch(errMsg => console.log(errMsg, "<<<<< adakah"))
      }
      setUser('')
      setPwd('')
      setAuthenticated(true)
      localStorage.setItem("authenticated", true)
    } catch (err) {
      console.error(err);
    }
    console.log(user, pwd)
    
  }
 if (authenticated) {
     return <Navigate replace to="../quiz" />
 } else {
   return (
     <div className='bg-slate-300 h-screen w-screen py-4'>
         <div className=' grid grid-cols-1 w-[18rem] md:w-[20rem] p-4 md:my-20  m-4 rounded-md mx-auto bg-slate-700 '>
           <div className=' text-center text-2xl  text-teal-400 font-bold '>
             Quiz
           </div>
           <form onSubmit={handleSubmit} >
             <p ref={errRef} className={errMsg ? 'errMsg' : 'offScreen'} aria-live='assertive' >{errMsg}</p>
             <div className='text-center p-4 text-slate-200'>
               <div className='my-4'>
                 <input
                   required
                   ref={userRef}
                   onChange={(e) => setUser(e.target.value)}
                   value={user}
                   id='email'
                   type="email"
                   name='email'
                   placeholder='Email...'
                   className=' focus:outline-none w-full p-1 bg-transparent border-b '
                 />
                 {/* {errors.email && <p> {errors.email} </p> } */}
               </div>
               <div>
                 <input
                   required
                   ref={userRef}
                   onChange={(e) => setPwd(e.target.value)}
                   value={pwd}
                   autoComplete='off'
                   id='password'
                   type="password"
                   name='password'
                   minLength='5'
                   placeholder='Password...'
                   className=' focus:outline-none w-full p-1 border-b bg-transparent'
                 />
                 {/* {errors.password && <p> {errors.password} </p> } */}
               </div>
             </div>
             <div className='text-center my-2'>
               <button className='bg-teal-400 p-1 px-4' type="submit">Login</button>
             </div>
           </form>
           <div className='text-center text-white text-sm my-5'>
             Don't have account? <Link to='/auth/register'>Register</Link>
           </div>
         </div>
     </div>
   )
 }
}

export default Login