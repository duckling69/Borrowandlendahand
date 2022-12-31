import React from 'react'
import { sidebarLinks } from '../constants'
import profile from '../assets/profileplaceholder.png'

const SidebarItem=({item})=>(
    <>
    <div className={`flex flex-row px-5 mt-4 items-center justify-between cursor-pointer hover:text-[#a855f7]} `}>
    <div>
    <i className={`${item.svg} text-gray-500 `}></i>
    </div>
    <div className='text-gray-500 font-bold text-xl mx-8 hover:text-[#a855f7]'>
    <h1>{item.name}</h1>
    </div>
    </div>
    </>
)

const Sidebar = ({loggedIn}) => {
    console.log(loggedIn)
  return (
    <div className={`flex flex-col pt-[12vh] pb-[8vh] w-fit h-[100vh] items-center justify-between bg-black/5 ${ !loggedIn && 'hidden'}  `}>
        <div>
            <img src={profile} className="w-[100px] rounded-full" alt="" />
            <h1 className='font-bold text-gray-800 font-sans text-center mt-5'>
                Raj Aryan
            </h1>
        </div>
       <div className='flex flex-col '>
       {sidebarLinks.map((item,i)=>(
            <SidebarItem key={i} item={item} />
        ))}
       </div>

       <div>
       <h1 className='font-bold text-gray-500 font-sans text-center mt-5'>
                Exit &nbsp;
                <i className="mx-3 fa-solid fa-up-right-from-square" />
            </h1>
       </div>
    </div>
  )
}

export default Sidebar