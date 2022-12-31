import React from 'react'
import aboutimg from '../assets/aboutimg.svg'
import missionimg from '../assets/mission.svg'
import workimg from '../assets/workimg.svg'

const About = () => {
  return (
    <div className=" font-mono px-4 py-2 mt-[12vh] flex items-center flex-col ">
            {/* About header*/}
            <div className="text-gray-500 leading-tight pl-[5vw] max-w-md lg:ml-0 ">
            <h1 className='font-bold text-5xl text-center m-auto '>
                About us
            </h1>
            <p className='text-gray-700 text-start mt-4 italic'> Helping the Community Share Resources</p>
            
            </div>
            <div className='flex flex-col md:flex-row my-10'>
                {/* Big Img depicting sharing */}
            <div className='my-4'>
            <img src={aboutimg} className='w-[80vw] md:w-[40vw] ' alt="" />

            <div className='my-4'>
            <p>
            We are here to simplify the lending process for everyone. <br />
            Helping the community share resources manage it with ease.
            </p>
            </div>
            </div>

            <div className="text-gray-500 leading-tight pl-[5vw] max-w-lg lg:ml-0 my-5">

            {/* Small img with astronaut-mission */}
                <img src={missionimg} className='w-[60vw] md:w-[50%] mt-10 my-5' alt="" />
            <h1 className='font-extrabold text-3xl text-center m-auto '>
                Our mission
            </h1>
            <p className='text-gray-700 text-start mt-4'> Achieving frictionless sharing of resources thus reducing both wastage and inefficient usage of resources </p>
            
                {/* small img for working */}
                <img src={workimg} className='w-[60vw] md:w-[50%] mt-10 my-5' alt="" />
            <h1 className='font-extrabold text-3xl text-center m-auto '>
                What we do
            </h1>
            <p className='text-gray-700 text-start mt-4'> We Provide an interface for users to manage the lending and borrowing items with ease. The lenders also earn points as reward which can be redeemed by the user. There's also a Donation section for items that users may want to donate </p>
            
            </div>
                
            </div>
        </div>
  )
}

export default About