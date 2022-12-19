import React from 'react'

const Hero = () => {
  return (
    <div className='relative'>
               <img className='absolute top-24 left-14' src="/assets/dot.svg" alt="dot" />
        <div className=" container mx-auto flex justify-between flex-col lg:flex-row md:flex-nowrap items-center flex-wrap">
     
            <div className="flex flex-col gap-4">
                <p className='text-5xl font-bold'>Marketing solutions <br /> that grow your <br /> business.</p>
                <p className='text-base text-gray-400 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> suspendisse varius enim in eros elementum tristique. <br /> Duis cursus, mi quis viverra ornare, eros dolor.</p>
                <div className="flex gap-5 items-center">
                    <button className='btn btn-primary rounded-full'>Our Service</button>
                    <button className='btn  bg-gray-700 rounded-full'>Contact Us</button>
                </div>
            </div>
            <img className='h-[550px]' src="/assets/hero.svg" alt="" />
        </div>
    </div>
  )
}

export default Hero