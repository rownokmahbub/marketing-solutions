import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
        <div className="container mx-auto text-white flex justify-between items-center py-3">
            <img src="/assets/logo.svg" alt="" />
            <div className="flex gap-10 items-center">
                <p>Home</p>
                <p>About</p>
                <p>Page</p>
                <p>Service</p>
                <div className="flex gap-1">
                    <p>cart</p>
                    <p className='bg-white px-2 py-1 text-xs text-black rounded-full'>0</p>
                </div>
                <p className='btn btn-primary rounded-full'>Get Started</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar