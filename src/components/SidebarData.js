import React from 'react'
import * as FaIcons from 'react-icons/fa'
import { AiFillAlert, AiFillApple, AiFillFacebook, AiOutlineClose } from 'react-icons/ai';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillFacebook />,
        cName: 'nav-text',
    },
    {
        title: 'About',
        path: '/about',
        icon: <AiFillAlert />,
        cName: 'nav-text',
    },
    {
        title: 'Something',
        path: '/something',
        icon: <AiFillApple />,
        cName: 'nav-text',
    }
]