import React from 'react'

const ItemCard=({item,creditOnly})=>(

    <div className='bg-white text-gray-500 rounded-lg min-w-[20vw] h-[15vw] border-2 flex flex-col items-center text-center justify-around'>
    <div className='flex flex-row justify-around items-center w-[100%]'>
    <img src={item.image} className=' object-cover w-[50%] ' alt="" />
       
        <div className='text-start px-4'>
        <h1 className='text-xl font-sans font-bold my-2'>
            {item.title}
        </h1>
        
        <h2 className={`text-md italic my-2 ${creditOnly && "hidden"}`}>On {item.date} at {item.time}</h2>
        <h2 className={`text-md italic my-2 ${creditOnly && "hidden"}`}>For {item.duration} days</h2>
        <div className='flex flex-row justify-between w-[100%]'>
        <h2 className={`text-md border-1 bg-gray-500 rounded-xl text-white w-fit h-fit px-5 my-2 ${creditOnly && "hidden"}`}> Rs. {item.price}</h2>
        <h2 className='text-md border-1 bg-purple-500 rounded-xl text-white w-fit h-fit px-5 my-2'> {item.credits}</h2>

        </div>
        <h2 className='text-md  my-2'> { !creditOnly && (item.borrow===true?"From":'To')} {item.person}</h2>
        <h2 className='text-sm  my-2 underline underline-offset-2'> { creditOnly && (item.borrow===true?"Borrow":'Lend')}</h2>

        </div>
    </div>  

   
</div>
)


export default ItemCard;