import React from "react";

const Service = () => {
  return (
    <div className="relative">
      <div className=" container mx-auto flex justify-between flex-col lg:flex-row md:flex-nowrap items-center flex-wrap">
        <div className="flex flex-col gap-4">
          <p className="btn btn-outline w-32 rounded-full border border-gray-500 hover:bg-transparent">
            Services
          </p>
          <p className="text-5xl font-bold">Service We Offer</p>
          <p className="text-base text-gray-400 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />{" "}
            suspendisse varius enim in eros elementum tristique. <br /> Duis
            cursus, mi quis viverra ornare, eros dolor.
          </p>

          <button className="btn btn-primary rounded-full w-44 capitalize text-white">
            All Services
          </button>
        </div>
        <div className="flex flex-col gap-16">
            <div className="flex gap-5 ">
              <div className="flex flex-col gap-5 items-start bg-[#81818B]/10 px-6 rounded-xl py-4 mt-5">
                <img className="h-14" src="/assets/like.svg" alt="" />
                <p className="text-xl font-semibold">Social Media Marketing</p>
                <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit <br /> lobortis arcu enim urna <br /> adipiscing praesent velit.</p>
              </div>
              <div className="flex flex-col gap-5 items-start bg-[#81818B]/10 px-6 rounded-xl py-4 -mt-10">
                <img className="h-14" src="/assets/doller.svg" alt="" />
                <p className="text-xl font-semibold">Paid Advertising</p>
                <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit <br /> lobortis arcu enim urna <br /> adipiscing praesent velit.</p>
              </div>
            </div>
            <div className="flex gap-5 ">
              <div className="flex flex-col gap-5 items-start bg-[#81818B]/10 px-6 rounded-xl py-4 -mt-5">
                <img className="h-14" src="/assets/email.svg" alt="" />
                <p className="text-xl font-semibold">Email Marketing</p>
                <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit <br /> lobortis arcu enim urna <br /> adipiscing praesent velit.</p>
              </div>
              <div className="flex flex-col gap-5 items-start bg-[#81818B]/10 px-6 rounded-xl py-4 -mt-10">
                <img className="h-14" src="/assets/search.svg" alt="" />
                <p className="text-xl font-semibold">SEO Optimization</p>
                <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit <br /> lobortis arcu enim urna <br /> adipiscing praesent velit.</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
