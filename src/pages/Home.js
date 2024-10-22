import React from "react";
import './Home.css'
import Item from "../components/Item";

export default function Home() {
    const itemConfigs = [
        {
            imgSize : 'medium-img',
            title : 'Title 1',
            titleSize: 'medium-title',
            description: 'This is a description',
            descriptionSize: 'medium-desc',
        }
    ]
    return(
        <>
            <div className="banner">
                <h1>Home</h1>
            </div>
            <div className="content">
                <Item 
                imgSize='medium-img' 
                title={true} 
                titleSize='medium-title-text' 
                description={true} 
                descriptionSize='medium-description-text'/>
                <Item 
                imgSize='medium-img' 
                title={true} 
                titleSize='medium-title-text' 
                description={true} 
                descriptionSize='medium-description-text'/>
            </div>

        </>
    )
}