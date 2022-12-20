import React from 'react'

const Blog = () => {
    const testimonials =[
        {
            img:'/assets/blog1.png',
            name:'Jhon Duo',
            date:'21 Aug 2022',
            title:'I recommend this agency',
            sub:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.'
        },
        {
            img:'/assets/blog2.png',
            name:'Anna Joly ',
            date:'21 Aug 2022',
            title:'I recommend this agency',
            sub:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.'
        },
        {
            img:'/assets/blog3.png',
            name:'Sofiya',
            date:'21 Aug 2022',
            title:'I recommend this agency',
            sub:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.'
        },
    ] 
  return (
    <div className='container mx-auto'>
   <p className="btn btn-outline w-32 rounded-full border border-gray-500 hover:bg-transparent">
            Blog
          </p>
          <p className='text-5xl font-semibold'>Read our <br />
articles & news</p>
          <p className='text-base text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in <br /> eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum <br /> nulla, ut commodo diam libero.</p>
          <div className="flex justify-end">
          <button className="btn btn-primary rounded-full w-44 capitalize text-white ">
            All Post
          </button>
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
            {testimonials.map((tes,i)=>{
                return(
                    <div key={i} className='bg-[#9C9C9C]/10 rounded-xl overflow-hidden pb-10 '>
                  <div className="relative">
                  <img className='w-full' src={tes.img} alt="person" />
                  <p className='absolute bottom-2 text-white left-2 rounded-lg bg-gray-500 px-2 py-1'>{tes.name}</p>
                  </div>
                          
                        
                    
                        <div className="flex flex-col gap-4 px-6 py-6 items-start">
                            <p className='text-gray-400'>{tes.date}</p>
                        <p className='text-2xl text-white font-medium'>{tes.title}</p>
                        <p className='text-sm text-gray-400'>{tes.sub}</p>
                        <img src="/assets/star.png" alt="" />
                        <button className='text-primary hover:underline '>Read More</button>
                        </div>
                   
                    </div>
                )
            })}
        </div>
          
         
    </div>
  )
}

export default Blog