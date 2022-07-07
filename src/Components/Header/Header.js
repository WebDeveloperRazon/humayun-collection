import React from 'react';
import image from '../../images/images.jpeg';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
           <h1>Best of Humayun Ahmed</h1>
           <img src={image} alt="" />
        </div>
    );
};

export default Header;