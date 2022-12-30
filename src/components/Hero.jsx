import React from 'react';
import image from './image.jpg'

const Component = () => {
    return (
        <div className=" font-mono px-4 py-2 mt-[12vh] flex items-center">
            {/* Text and input */}
            <div className="text-gray-500 leading-tight pl-[5vw] max-w-md lg:ml-0 lg:mr-auto lg:mx-0 ">
                <h1 className="text-5xl font-semibold">Borrow. Lend. Connect.</h1>
                <p className="mt-2">The easiest way to borrow and lend items in your community</p>
                <div className="mt-6 lg:flex flex flex-col lg:justify-between">
                    <p className="mt-2">Get the inside scoop with our email updates!</p>
                    <div className='flex flex-row mt-2'>
                        <div className="relative rounded-md shadow-sm mt-4 lg:mt-0">
                            <input type="text" className="form-input py-3 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" placeholder="Enter Email" />
                        </div>
                        <button className="px-4 py-3 font-semibold leading-5 rounded-md text-white bg-purple-600 shadow-md hover:bg-purple-500 focus:outline-none focus:bg-purple-500 mt-2 lg:mt-0">
                            Subscribe!
                        </button>
                    </div>

                </div>
            </div>
            {/* Image */}
            <img src={image} alt="Image" className="h-full w-2/4 object-cover" />
        </div>
    );
};

export default Component;
