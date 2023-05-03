import React from 'react'

const Contact = () => {
    return (
        <div className='bg-slate-300 w-screen h-screen md:py-5'>
            <div className='grid grid-cols-1 w-[20rem] mx-auto text-center md:py-2'>
                <div className='rounded-lg shadow-md lg:mx-auto mx-4 my-5 bg-slate-100 ' >
                    <img src='https://i.postimg.cc/r078ZyMW/Muhammad-Sabran-Pas-Photo.png' border='0' alt='Foto Admin' className='my-10 hover:scale-125 hover:animate-pulse rounded-lg cursor-pointer duration-500 bg-transparent h-[150px] mx-auto ' />
                    <div className=' mx-4'>
                        <p className="text-xs my-4 bg-transparent text-gray-800">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo iste quidem illum corporis animi deserunt, excepturi numquam ipsam dolore nisi neque, porro illo omnis consectetur, iure facere sint odio.
                        </p>
                    </div>
                    <a href="https://wa.me/+6285334679379?text=I'm%gonna%20in%20call%20you%20right%20now">
                        <button className='my-5 mb-8 bg-lime-700 hover:bg-[#36ace3] duration-300 px-4 rounded-md py-1'>Contact Me</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact