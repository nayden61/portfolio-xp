import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
    return(
        <div className="bg-slate-800">
            {Component}
        </div>
    )
}
const Component = <h1 className="text-center font-bold text-black">lol</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

