import React from 'react';
import { useState } from 'react';
import Sidebar from '../Sidebar';


function Layout() {

    const [isSideBarOpen, setIsSidebarOpen] = useState(false);

    function toggleSidebar() {
        setIsSidebarOpen(!isSideBarOpen);
    }

  return (
    <>
        {isSideBarOpen && <Sidebar />}
        <button className="flex w-7 h-7 bg-red-500 text-white justify-center rounded" onClick={toggleSidebar}>
        X
        </button>
    </>
  );
}

export default Layout;
