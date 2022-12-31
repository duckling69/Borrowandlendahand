import React from 'react'
import { sidebarLinks } from '../constants'
import profile from '../assets/profileplaceholder.png'
import {Link} from 'react-router-dom'

const SidebarItem=({item})=>(
    <Link to={item.link}>
    <div className={`flex flex-row px-5 mt-4 items-center justify-between cursor-pointer hover:text-[#a855f7]} `}>
    <div>
    <i className={`${item.svg} text-gray-500 hover:text-[#a855f7] `}></i>
    </div>
    <div className='text-gray-500 text-end font-bold text-xl mx-8 hover:text-[#a855f7]'>
    <h1>{item.name}</h1>
    <h2 className='text-md italic'>{item.discription}</h2>
    </div>
    </div>
    </Link>
)

const Sidebar = ({loggedIn}) => {
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
       <h1 className='font-bold text-gray-500 font-sans text-center mt-5 hover:text-[#a855f7] cursor-pointer'>
                Exit &nbsp;
                <i className="mx-3 fa-solid fa-up-right-from-square" />
            </h1>
       </div>
    </div>
  )
}

export default Sidebar