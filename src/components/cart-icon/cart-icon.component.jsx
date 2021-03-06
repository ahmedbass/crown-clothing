import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartIcon = ({toggleCartHidden, numOfItems = 0 }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shoppingIcon" />
        <span className="item-count">{numOfItems}</span>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon); 
