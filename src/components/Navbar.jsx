import React, { useState } from 'react';
import logo from "./logo.svg"
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
    // useState hook to store the state of the hamburger menu
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className=" bg-white font-mono fixed top-0 left-0 w-full z-50 shadow-md">
            <div className="container  flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-13 w-full" />
                </div>

                {/* Hamburger menu toggle (hidden on large screens) */}
                <div className=" lg:hidden">
                    <button
                        className="block px-3 py-2 rounded-md text-gray-300 hover:text-white focus:outline-none focus:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {/* Menu icon */}
                            {!isOpen && (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                            {/* Close icon */}
                            {isOpen && (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Navbar links */}
                <div className={`${isOpen ? 'block' : 'hidden'} w-full flex-grow lg:flex lg:items-center lg:w-auto`}>
                    <div className="flex items-center justify-center text-xl lg:flex-grow gap-10 ">
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-purple-500 mr-4">
                            Home
                        </a>
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-purple-500 mr-4">
                            About Us
                        </a>
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-purple-500 mr-4">
                            Features
                        </a>
                    </div>
                    <div>
                        {isAuthenticated ? (<button onClick={() => logout({ returnTo: window.location.origin })} className="inline-block text-xl px-4 py-2 leading-none border border-purple-500 rounded-md text-purple-500 hover:border-black hover:text-white hover:bg-purple-500 mt-4 lg:mt-0">
                            Log Out
                        </button>) :
                            (<button onClick={() => loginWithRedirect()} className="inline-block text-xl px-4 py-2 leading-none border border-purple-500 rounded-md text-purple-500 hover:border-black hover:text-white hover:bg-purple-500 mt-4 lg:mt-0">
                                Login
                            </button>)
                        }
                    </div>

                </div>

            </div>
        </nav>
    );
};

export default Navbar;
