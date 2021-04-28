import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => {
    return (
        <div className="header">
            <div>
                <Link to="/" className="logo-container">
                    <Logo className="logo" />
                </Link>
            </div>
            <div className="options">
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link to="/contact" className="option">
                    CONTACT
                </Link>
                <Link to="/sign-in" className="option">
                    SIGN IN
                </Link>
            </div>
        </div>
    );
};

export default Header;
