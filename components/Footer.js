import React from 'react'

const Footer = () => {
  return (
    <div className='container mx-auto py-10'>
        <div className="grid lg:grid-cols-4 gap-10">
            <div className="flex flex-col gap-5 items-start">
            <img className='h-10' src="/assets/logo.svg" alt="" />
            <p className='text-gray-400 w-[300px]'> Growfy is a template highly suitable for modern marketing agencies, digital studios, startups and businesses. The design is made in the dark style, which makes the site memorable and you can easily adapt it to your brand.</p>
            <img src="/assets/social.svg" alt="" />
            </div>

            <div className="flex flex-col gap-5">
                <p className='tet-white font-semibold text-xl'>Pages</p>
                <p className='text-sm cursor-pointer'>Home</p>
                <p className='text-sm cursor-pointer'>About</p>
                <p className='text-sm cursor-pointer'>Services</p>
                <p className='text-sm cursor-pointer'>Packages</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className='tet-white font-semibold text-xl'>Utility pages</p>
                <p className='text-sm cursor-pointer'>Home</p>
                <p className='text-sm cursor-pointer'>About</p>
                <p className='text-sm cursor-pointer'>Services</p>
                <p className='text-sm cursor-pointer'>Packages</p>
            </div>
            <div className="flex gap-5 flex-col">
            <p className='tet-white font-semibold text-xl'>Subscribe to our newsletter</p>
            <p className=' text-sm'>Lorem ipsum dolor sit <br /> am consectetur adipiscing</p>
            <div className="flex gap-5 items-center ">
        <input className='bg-transparent focus:outline-none px-4 py-3 border border-gray-300 rounded-full' type="text" placeholder='enter your email' />
        <button className="btn btn-primary rounded-full  capitalize text-white ">
            Subscribe
          </button>
            </div>
            </div>
         
        </div>
    </div>
  )
}

export default Footer