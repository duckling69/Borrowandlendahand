import React, { useState } from 'react'
import LineChart from '../components/LineChart'

import { dummyBarChartData } from '../constants'

const Dashboard = () => {
  const [userData, setUserData] = useState({
    labels: dummyBarChartData.map((item)=>item.year),
    datasets:[{
      label:'Customers',
      data: dummyBarChartData.map((item)=>item.value),
      backgroundColor:"black",
      borderColor:'#a855f7'
    }]
  })
  return (
    <div className='flex flex-col h-[88vh] w-[100%] mt-[12vh] m-auto '>
      <div className="flex flex-row h-[45%] mb-10">
        <div className='p-10 rounded-xl mx-10 bg-gray-300 h-[100%] w-[45%]'>
          <h1 className='text-2xl text-gray-500 font-bold font-sans text-center'>
            Stats For Month- December
          </h1>
          <div className='flex flex-col text-lg text-gray-800 font-semibold font-sans leading-loose justify-evenly w-[50%] mt-10'>
          <div className='flex justify-between'>
          <h1>Items Borrowed: </h1>
          <h2>90</h2>
          </div>
          <div className='flex justify-between'>
          <h1>Items Lent: </h1>
          <h2>3</h2>
          </div>
          <div className='flex justify-between'>
          <h1>Items Donated: </h1>
          <h2>4</h2>
          </div>
          <div className='flex justify-between'>
          <h1>Credits: </h1>
          <h2>30</h2>
          </div>
          </div>
        </div>


        <div className='p-20 rounded-xl mx-10 bg-gray-300 h-[100%] w-[45%]'>
          <h1>
            Graphs
          </h1>
          <div>
            <LineChart chartData={userData}></LineChart>
          </div>
        </div>


       


      </div>
      {/* Container for cards */}
      <div className='flex px-20 py-5 flex-row h-[45%] w-[100%] justify-evenly'>

      {/* Card 1 */}
        <div className='h-[100%] w-[20%]   flex flex-col items-center bg-zinc-800 rounded-lg justify-evenly'>
        <div className='w-[30%] aspect-square grid place-items-center text-4xl rounded-full bg-purple-500 text-white'>
        <i className="fa-solid fa-meteor"></i>
        </div>
          <div className='text-xl text-center leading-loose'>
          <h1 className='text-white'>Total Credits:</h1>
          <h1 className='text-white'>50</h1>
          </div>
        </div>


        <div className='h-[100%] w-[20%]   flex flex-col items-center bg-zinc-800 rounded-lg justify-evenly'>
        <div className='w-[30%] aspect-square grid place-items-center text-4xl rounded-full bg-purple-500 text-white'>
        <i className="fa-solid fa-gift"></i>
        </div>
          <div className='text-xl text-center leading-loose'>
          <h1 className='text-white'>Total Lendings:</h1>
          <h1 className='text-white'>8</h1>
          </div>
        </div>


        <div className='h-[100%] w-[20%]   flex flex-col items-center bg-zinc-800 rounded-lg justify-evenly'>
        <div className='w-[30%] aspect-square grid place-items-center text-4xl rounded-full bg-purple-500 text-white'>
        <i className="fa-solid fa-box-open"></i>
        </div>
          <div className='text-xl text-center leading-loose'>
          <h1 className='text-white'>Total Borrows:</h1>
          <h1 className='text-white'>130</h1>
          </div>
        </div>


        <div className='h-[100%] w-[20%]   flex flex-col items-center bg-zinc-800 rounded-lg justify-evenly'>
        <div className='w-[30%] aspect-square grid place-items-center text-4xl rounded-full bg-purple-500 text-white'>
        <i className="fa-solid fa-hand-holding-heart"></i>
        </div>
          <div className='text-xl text-center leading-loose'>
          <h1 className='text-white'>Total Donations:</h1>
          <h1 className='text-white'>30</h1>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Dashboard