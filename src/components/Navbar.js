import React from 'react';
import './Navbar.css'
import * as FaIcons from 'react-icons/fa'
import { BrowserRouter, Link, Switch } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { SidebarData } from './SidebarData';

export default function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {setSidebar(!sidebar);}

    return(
        <>
            <div className='navbar'>
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={toggleSidebar}/>
                </Link> 
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                        <li className='navbar-toggle' onClick={toggleSidebar}>
                            <Link to="#" className='menu-bars'>
                                <AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </>
    );
}