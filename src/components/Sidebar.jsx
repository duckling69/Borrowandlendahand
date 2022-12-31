import React from 'react'
import { sidebarLinks } from '../constants'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

const SidebarItem = ({ item }) => (
    <Link to={item.link}>
        <div className={`flex flex-row px-5 mt-4 items-center justify-between cursor-pointer hover:text-[#a855f7]} `}>
            <div>
                <i className={`${item.svg} text-gray-500 `}></i>
            </div>
            <Link className='text-gray-500 font-bold text-xl mx-8 hover:text-[#a855f7]' to={`${item.link}`}>{item.name}</Link>
    <h2 className='text-md italic'>{item.discription}</h2>

        </div>
    </Link>
)

const Sidebar = ({ loggedIn }) => {

    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    console.log(user);
    return (
        <div className={`flex flex-col pt-[12vh] pb-[8vh] w-fit h-[100vh] items-center justify-between bg-black/5 ${!isAuthenticated  && 'hidden'}  `}>
            <div>
                <img src={user.picture} className="w-[100px] rounded-full" alt="" />
                <h1 className='font-bold text-gray-800 font-sans text-center mt-5'>
                    {user.name}
                </h1>
            </div>
            <div className='flex flex-col '>
                {sidebarLinks.map((item) => (
                    <SidebarItem item={item} />
                ))}
            </div>

            <div>
                <button onClick={() => logout({ returnTo: window.location.origin })} className='font-bold text-gray-500 font-sans text-center mt-5'>
                    Exit &nbsp;
                    <i className="mx-3 fa-solid fa-up-right-from-square" />
                </button>
            </div>
        </div>
    )
}

export default Sidebar
