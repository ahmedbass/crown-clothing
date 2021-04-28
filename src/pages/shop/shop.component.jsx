import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop.data";

export default class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA,
        };
    }
    render() {
        return (
            <div className="shop-page">
                <h1>SHOP PAGE</h1>
                {this.state.collections
                    .map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))}
            </div>
        );
    }
}
