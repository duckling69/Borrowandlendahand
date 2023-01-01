import React from 'react'
import { dummyTrxn } from '../constants'
import ItemCard from './ItemCard'



const Credits = () => {
  return (
    <div className={`flex flex-col h-[88vh] w-[100%] mt-[12vh] m-auto ml-4`}>
    <div className=''> 
        <h1 className='text-5xl text-gray-500 text-left ml-5 font-sans font-bold mb-10'>
            Credits
        </h1>

        {/* Dispaying Borrow trxn */}
       <div className='flex flex-col my-4'>
       <h2 className='text-2xl text-gray-400 text-left ml-5 font-sans font-bold mb-10'>
            Transactions:
        </h2>

        <div className='flex flex-row gap-20 mx-5 flex-wrap justify-start '>
            {dummyTrxn.map((item,i)=>{ return(<ItemCard key={i} item={item} creditOnly={true} />)})}

        </div>

       </div>

       
    </div>
    </div>
  )
}

export default Credits