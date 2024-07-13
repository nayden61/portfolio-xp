import React from "react";

export default function Item({imgSize, title, titleSize, description, descriptionSize}){
    return(
        <div className="item">
            <div className={`image ${imgSize}`} />
            {title && <h1 className={titleSize}>
                Title
            </h1>}
            {description && <p className={descriptionSize}>
                This is a description 
            </p>}
        </div>
    )
}