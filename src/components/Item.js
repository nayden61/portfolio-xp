import React from "react";

export default function Item({imgSize, title, titleSize, description, descriptionSize}){
    return(
        <div className="item">
            <div className={`image ${imgSize}`} />
            {title !== undefined ? <h1 className={titleSize}>Title</h1> : title};
            {description !== undefined ? <p className={descriptionSize}>This is a description </p> : description}
        </div>
    )
}