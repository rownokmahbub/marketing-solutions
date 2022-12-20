import React from 'react'

const Cta = () => {
  return (
<div className='px-16'>
<div className='container mx-auto  bg-[#81818B]/10 py-10 px-20 rounded-xl'>
        <div className="flex justify-between items-center ">
            <div className="flex flex-col gap-4">
            <p className='text-white text-4xl font-semibold'>Ready to start scaling <br /> your business now?</p>
            <p className='text-gray-400 '>Lorem ipsum dolor sit am consectetur <br /> adipiscing varius enim in eros.</p>
            </div>
            <div className="flex gap-10 items-center">
            <button className="btn btn-primary rounded-full w-44 capitalize text-white">
            Our Services
          </button>
          <p className="btn btn-outline w-32 bg-slate-500 hover:text-white rounded-full border border-gray-500 hover:bg-transparent">
            Contact Us
          </p>
            </div>
        </div>
    </div>
</div>

   
  )
}

export default Cta