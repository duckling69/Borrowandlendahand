import React from 'react'
import { borrowItems } from '../constants'
import {Link} from 'react-router-dom'


const ExploreItem=({item})=>(
    <div className='bg-white text-gray-500 rounded-lg w-[20vw] h-[15vw] border-2 flex flex-col items-center text-center justify-around'>
        <div className='flex flex-row justify-around items-center w-[100%]'>
        <img src={item.image} className=' object-cover w-[50%] ' alt="" />
           
            <div>
            <h1 className='text-xl font-sans font-bold '>
                {item.title}
            </h1>
            <h2 className='text-md italic'>{item.discription}</h2>
            </div>
        </div>  

        <div className='text-end w-[100%] pr-5'>
            <button className='bg-purple-500 py-2 px-4 text-white rounded-lg hover:bg-purple-700'> Borrow This item</button>
        </div>  
    </div>
)

const Explore = () => {
  return (
    <div className='flex flex-col h-[88vh] w-[100%] mt-[12vh] m-auto '>
        <div className='flex justify-between'> 
            <h1 className='text-5xl text-gray-500 text-left ml-5 font-sans font-bold'>
                Explore items
            </h1>
            <Link to='/lend/add'>
            <button className='bg-purple-500 text-white hover:bg-purple-700 py-2 px-4 mr-5 rounded-lg'> Add Your Item for lending</button>
            </Link>
        </div>

        <div className='flex flex-row width-[100%] p-10 gap-10'>
            {borrowItems.map((item,i)=>(
                <ExploreItem key={i} item={item}/>
            ))}
        </div>
    </div>
  )
}

export default Explore