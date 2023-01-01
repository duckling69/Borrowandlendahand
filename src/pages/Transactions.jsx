import React, { useState,useEffect } from 'react'
import { dummyTrxn } from '../constants'
import client from '../api/Api'
import {  Account, Databases, ID } from 'appwrite'
import { useAuth0 } from "@auth0/auth0-react";

const databases = new Databases(client);


const ItemCard=({item})=>(

    <div className='bg-white text-gray-500 rounded-lg w-[20vw] h-[15vw] border-2 flex flex-col items-center text-center justify-around'>
    <div className='flex flex-row justify-around items-center w-[100%]'>
    <img src={item.image} className=' object-cover w-[50%] ' alt="" />
       
        <div className='text-start px-4'>
        <h1 className='text-xl font-sans font-bold my-2'>
            {item.title}
        </h1>
        <div className='flex flex-row justify-between w-[100%]'>
        <h2 className='text-md border-1 bg-purple-500 rounded-xl text-white w-fit px-5 my-2'> {item.credits}</h2>

        </div>
        <h2 className='text-md  my-2'> {item.email}</h2>

        </div>
    </div>  

    <div className='text-end w-[100%] pr-5'>
        {/* <button className='bg-purple-500 py-2 px-4 text-white rounded-lg hover:bg-purple-700' onClick={handleClick}> Borrow This item</button> */}
    </div>  
</div>
)

const Transactions = () => {
    const [Lentitems,setLentItems] = useState();
    useEffect(() => {
        const getItems = databases.listDocuments("63b069123cd8a70b1a17", "63b09c016fb4b6d60704")
        getItems.then(
          function (response) {
            setLentItems(response.documents)
            console.log(Lentitems)
          },
          function (error) {
            console.log(error);
          }
        )
      }, [])

  return (
    <div className={`flex flex-col h-[88vh] w-[100%] mt-[12vh] m-auto ml-4`}>
    <div className=''> 
        <h1 className='text-5xl text-gray-500 text-left ml-5 font-sans font-bold mb-10'>
            Transactions
        </h1>

        {/* Dispaying Borrow trxn */}
       <div className='flex flex-col my-4'>
       <h2 className='text-2xl text-gray-400 text-left ml-5 font-sans font-bold mb-10'>
            Borrowings:
        </h2>
        <div className='flex flex-row gap-20 mx-5 flex-wrap justify-start '>
            {dummyTrxn.map((item,i)=>{if (item.borrow) return(<ItemCard key={i} item={item}  />)})}

        </div>

       </div>

       {/* displaying lend trxn */}
       <div className='flex flex-col my-4'>
       <h2 className='text-2xl text-gray-400 text-left ml-5 font-sans font-bold mb-10'>
            Lendings:
        </h2>
        <div className='flex flex-row gap-20 mx-5 flex-wrap justify-start '>
            {Lentitems && Lentitems.map((item)=>(<ItemCard key={item.$id} item={item}  />))}

        </div>

       </div>
    </div>
    </div>
  )
}

export default Transactions