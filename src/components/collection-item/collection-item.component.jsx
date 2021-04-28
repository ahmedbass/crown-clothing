import React from "react";
import "./collection-item.styles.scss";

export const CollectionItem = ({ id, name, imageUrl, price }) => {
    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            {/* <img src={imageUrl} alt={name} className="image" /> */}
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
        </div>
    );
};

export default CollectionItem;
