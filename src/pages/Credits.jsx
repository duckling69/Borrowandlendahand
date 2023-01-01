import React from 'react'
import { dummyTrxn } from '../constants'
import ItemCard from './ItemCard'



const Credits = () => {
    let cred=0;
    dummyTrxn.map((item)=>{cred+=parseInt(item.credits)})
  return (
    <div className={`flex flex-col h-[88vh] w-[100%] mt-[12vh] m-auto ml-4`}>
    <div className=''> 
        <h1 className='text-5xl text-gray-500 text-left ml-5 font-sans font-bold mb-10'>
            Credits
        </h1>

        <div  className='text-5xl text-center py-4 px-10 border-2 rounded-xl mx-auto my-2 w-fit grid place-items-center'>
            <h1 className='font-bold font-sans text-center text-gray-500'>
                Total Credits: {cred}
            </h1>

        </div>

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