import React from 'react'

const Testimonials = () => {
    const testimonials =[
        {
            img:'/assets/ts1.svg',
            name:'Jhon Duo',
            cname:'company name',
            title:'I recommend this agency',
            sub:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.'
        },
        {
            img:'/assets/ts2.svg',
            name:'Anna Joly ',
            cname:'company name',
            title:'I recommend this agency',
            sub:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.'
        },
        {
            img:'/assets/ts3.svg',
            name:'Sofiya',
            cname:'company name',
            title:'I recommend this agency',
            sub:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.'
        },
    ] 
  return (
    <div className='container mx-auto'>
   <p className="btn btn-outline w-32 rounded-full border border-gray-500 hover:bg-transparent">
            Testimonials
          </p>
          <p className='text-5xl font-semibold'>See what our clients say</p>
          <p className='text-base text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in <br /> eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum <br /> nulla, ut commodo diam libero.</p>
          <div className="flex justify-end">
          <button className="btn btn-primary rounded-full w-44 capitalize text-white ">
            Get In Touch
          </button>
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
            {testimonials.map((tes,i)=>{
                return(
                    <div key={i} className='bg-[#9C9C9C]/10 rounded-xl px-6 py-10'>
                        <div className="flex gap-4 py-3 items-center">
                            <img src={tes.img} alt="person" />
                            <div className="flex flex-col">
                                <p>{tes.name}</p>
                                <p>{tes.cname}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                        <p className='text-2xl font-medium'>{tes.title}</p>
                        <p className='text-sm'>{tes.sub}</p>
                        <img src="/assets/star.svg" alt="" />
                        </div>
                   
                    </div>
                )
            })}
        </div>
          
         
    </div>
  )
}

export default Testimonials