import React from 'react'
import { sidebarLinks } from '../constants'
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useLocation } from 'react-router-dom';


const SidebarItem = ({ item,pathname }) => (
    <Link to={item.link}>
        <div className={`flex flex-row px-5 mt-4 items-center justify-between cursor-pointer  hover:text-[#a855f7]} } `}>
            <div>
                <i className={`${item.svg} ${pathname===item.link && "text-purple-500 "} text-gray-500 `}></i>
            </div>

            {console.log()}
            <Link className={`text-gray-500 font-bold text-xl mx-8 hover:text-[#a855f7] ${pathname===item.link && "text-purple-500 "} text-end`} to={`${item.link}`}>{item.name}</Link>


        </div>
    </Link>
)


const Sidebar = ({ }) => {

    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    const {pathname}=useLocation();
    console.log(user);
    return (
        <div className={`flex flex-col pt-[12vh] pb-[8vh] w-fit h-[100vh]  items-center justify-between bg-black/5 ${!isAuthenticated  && 'hidden'}  `}>
            <div className=''>
                <img src={user.picture} className="w-[100px] rounded-full mx-auto" alt="" />
                <h1 className='font-bold text-gray-800 font-sans text-center mt-5'>
                    {user.name}
                </h1>
            </div>
            <div className='flex flex-col '>
                {sidebarLinks.map((item) => (
                    <SidebarItem item={item} pathname={pathname} />
                ))}
            </div>

            <div>
                <button onClick={() => logout({ returnTo: window.location.origin })} className='font-bold text-gray-500 font-sans text-center mt-5 hover:text-purple-500'>
                    Exit &nbsp;
                    <i className="mx-3 fa-solid fa-up-right-from-square" />
                </button>
            </div>
        </div>
    )
}

export default Sidebar
