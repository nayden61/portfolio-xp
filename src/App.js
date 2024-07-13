import React, { StrictMode } from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Something from './pages/Something'

export default function App(){
    return(
        <>
            <StrictMode>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element=<Home /> />
                        <Route path="/about" element=<About /> />
                        <Route path="/something" element=<Something /> />
                    </Routes>
                </Router>
            </StrictMode>
        </>
    );
}