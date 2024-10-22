import React, {useState, useEffect, useRef} from "react";
import './App.css'
import IE from './components/IE'
import Draggable from 'react-draggable'
import myComputer from './media/MyComputer.png'
import textDocument from './media/Generic Text Document.png'
import bin from './media/Recycle Bin (empty).png'
import start from './media/StartButton.png'
import IEImage from './media/Internet Explorer 6.png'
import StartMenu from './components/StartMenu'

export default function App() {

    const [selectedIcon, setSelectedIcon] = useState(null);
    const [activeWindow, setActiveWindow] = useState(null);
    const [startMenuStatus, setStartMenuStatus] = useState(false);

    const appRef = useRef(null);

    const handleIconClick = (iconName) => {
        setSelectedIcon(iconName);

        if (iconName === "IE") {
            setActiveWindow(<IE />);
        } else {
            setActiveWindow(null);
        }
    }

    //Doesn't currently work
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (appRef.current && event.target.className === "desktop") {
                setSelectedIcon(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [appRef]);

    return (
        <div className="desktop">
            <div className="desktop-icons">
                <Draggable>
                    <div className={`icon ${selectedIcon === 'MyComputer' ? 'selected' : ''}`}
                    onClick={() => handleIconClick('MyComputer')}>
                        <img src={myComputer} alt="My Computer" draggable={false}/>
                        <p>My Computer</p>
                    </div>
                </Draggable>
               
                <Draggable>
                    <div className={`icon ${selectedIcon === 'MyProjects' ? 'selected' : ''}`}
                    onClick={() => handleIconClick('MyProjects')}>
                        <img src={textDocument} alt="My Documents" draggable={false} />
                        <p>My Projects</p>
                    </div>
                </Draggable>

                <Draggable>
                    <div className={`icon ${selectedIcon === 'Bin' ? 'selected' : ''}`} 
                    onClick={() => handleIconClick('Bin')}>
                        <img src={bin} alt="Bin" draggable={false} />
                        <p>Recycle Bin</p>
                    </div>
                </Draggable>

                <Draggable>
                    <div className={`icon ${selectedIcon === 'IE' ? 'selected' : ''}`} 
                    onClick={() => handleIconClick('IE')}>
                        <img src={IEImage} alt="Internet Explorer" draggable={false} />
                        <p>Internet Explorer</p>
                    </div>
                </Draggable>

            </div>

            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {activeWindow != null && (
                <Draggable>
                    {activeWindow}
                </Draggable>
                )}
            </div>

            {startMenuStatus && <StartMenu />}
            
            <div className="taskbar" onClick={() => setStartMenuStatus(!startMenuStatus)}>
                <img className="start-button" src={start} alt="Start Button" />
            </div>
        </div>
        );
}