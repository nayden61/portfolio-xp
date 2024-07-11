import React from "react"
import { Outlet, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Sidebar = () => {
    return(
    <div className="flex h-screen">
        <motion.nav 
        className="flex bg-black h-full w-1/12" 
        initial={{ x: '-100%' }} 
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
        >
            <ul className="space-y-4 h-full w-full items-center text-white bg-amber-900 list-none p-0 m-0">
                <li className="m-0">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                    isActive ? "bg-stone-600 rounded-lg p-1 hover:rounded-none transition-all" : ""
                    }
                >
                    Home
                </NavLink>
                </li>
                <li className="m-0">
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => 
                    isActive ? "bg-stone-600 rounded-lg p-1 hover:rounded-none transition-all" : ""
                    }
                >
                    About
                </NavLink>
                </li>
            </ul>
        </motion.nav>
        <Outlet />
    </div>
    )
};

export default Sidebar
