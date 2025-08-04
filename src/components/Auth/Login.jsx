import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='absolute top-10 left-1/2 -translate-x-1/2 text-center'>
        <h1 className='text-3xl font-bold text-emerald-700 mb-2'>Made with 💖 by Kanav Gupta</h1>
        <p className='text-lg text-gray-700'>Central Login Portal System </p>
        <div className='bg-emerald-50 border border-emerald-300 rounded-lg px-4 py-2 inline-block mt-1 shadow'>
          <span className='block text-emerald-800 font-semibold'>Email: <span className='font-mono'>e@e.com || admin@me.com</span></span>
          <span className='block text-emerald-800 font-semibold'>Password: <span className='font-mono'>123 || 123</span></span>
        </div>
      </div>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'
            >
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required 
                className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' 
                />
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required 
                className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter password' />
                <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login