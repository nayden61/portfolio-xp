import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'

export default function App() {
    return(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout  />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    {/* <Route path='*' element={<NoPage/>} /> */}
                </Route>  
            </Routes>
        </BrowserRouter>
    </StrictMode>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

