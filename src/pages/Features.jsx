import React from 'react'
import borrowimg from '../assets/borrowimg.svg'
import lendingimg from '../assets/lendingimg.svg'
import donateimg from '../assets/donate.svg'
import managingchartsimg from '../assets/managingcharts.svg'

const Features = () => {
    return (
        <>
            <div className=" font-mono px-4 py-2 mt-[12vh] flex items-center flex-col ">

                <div className='text-4xl text-gray-500 font-bold mt-12 max-w-xl '>
                    <h1>We revolutionize the process of resource-sharing </h1>
                </div>

                <div className='flex flex-row justify-evenly w-[100%] p-10'>
                    <div className='h-[500px] w-[300px] hover:bg-gray-300 ease-in duration-150 bg-gray-100 rounded-lg border-2 my-5 flex flex-col justify-around items-center'>
                        <img src={borrowimg} className='w-[80%]' alt="Borrow Items With ease" />

                        <h1 className='text-gray-500 font-thin my-5 text-center mx-4'> Borrow Whatever Items Are Needed </h1>
                    </div>
                    <div className='h-[500px] w-[300px] bg-gray-100  rounded-lg    hover:bg-gray-300 ease-in duration-150 border-2 my-5 flex flex-col justify-around items-center'>
                        <img src={lendingimg} className='w-[80%]' alt="Borrow Items With ease" />

                        <div>

                            <h1 className='text-gray-500 font-thin mt-5 text-center mx-4'> Lend Items with the ease of your homes</h1>

                        </div>
                    </div>
                    <div className='h-[500px] w-[300px] bg-gray-100 rounded-lg   hover:bg-gray-300 ease-in duration-150 border-2 my-5 flex flex-col justify-around items-center'>
                        <img src={donateimg} className='w-[80%]' alt="Borrow Items With ease" />

                        <h1 className='text-gray-500 font-thin my-5 text-center mx-4'> Donate items for someone who may need it</h1>
                    </div>

                    <div className='h-[500px] w-[300px] bg-gray-100 rounded-lg  hover:bg-gray-300 ease-in duration-150 border-2 my-5 flex flex-col justify-around items-center'>
                        <img src={managingchartsimg} className='w-[80%]' alt="Borrow Items With ease" />

                        <h1 className='text-gray-500 font-thin my-5 text-center mx-4 hover:bg-gray-300 ease-in duration-150'> Easily Manage and track all of these with an Intuitive dashboard</h1>
                    </div>

                </div>

            </div>


        </>
    )
}

export default Features