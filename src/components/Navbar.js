import React from 'react';
import './Navbar.css'
import * as FaIcons from 'react-icons/fa6'
import { BrowserRouter, Link, Switch } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import logo from '../logo192.png'

export default function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {setSidebar(!sidebar);}

    return(
        <>

            <div className='navbar'>

                <Link to="#" className='menu-bars'>
                    <IconContext.Provider value={{color: "black"}}>
                        <FaIcons.FaBars onClick={toggleSidebar}/>
                    </IconContext.Provider>
                </Link> 
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                        <li className='navbar-toggle' onClick={toggleSidebar}>
                            <Link to="#" className='menu-bars'>
                                <IconContext.Provider value={{color: "white"}}>
                                    <AiOutlineClose />
                                </IconContext.Provider>
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path} onClick={toggleSidebar}>
                                        <img src={logo} alt='logo'/>
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