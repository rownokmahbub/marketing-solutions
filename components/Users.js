import React from 'react'

const Users = () => {
  return (
    <div className='relative'>
 
<div className=" container mx-auto flex justify-between flex-col lg:flex-row md:flex-nowrap items-center flex-wrap">

<div className="flex flex-col gap-5">
            <div className="flex gap-5 ">
              <div className="flex flex-col gap-5 items-start bg-[#81818B]/10 px-6 rounded-xl py-4">
               <p className='text-4xl font-medium'>1.2M+</p>
              
                <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Suspendisse varius enim.</p>
              </div>
              <div className="flex flex-col gap-5 items-start bg-[#81818B]/10 px-6 rounded-xl py-4">
               <p className='text-4xl font-medium'>3.4B</p>
              
                <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Suspendisse varius enim.</p>
              </div>
            </div>
            <div className="flex gap-5 ">
            <div className="flex flex-col gap-5 items-start bg-[#81818B]/10 px-6 rounded-xl py-4">
               <p className='text-4xl font-medium'>98%</p>
              
                <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Suspendisse varius enim.</p>
              </div>
              <div className="flex flex-col gap-5 items-start bg-[#81818B]/10 px-6 rounded-xl py-4">
               <p className='text-4xl font-medium'>10+</p>
              
                <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Suspendisse varius enim.</p>
              </div>
            </div>
        </div>
 <img className='h-[550px]' src="/assets/user.svg" alt="" />
</div>
</div>
  )
}

export default Users