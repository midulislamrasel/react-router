import React from 'react';
import { Link } from 'react-router-dom';
import Shop from '../Shop/Shop';
// import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <div>
                <a href="About">About</a>
                <a href="Footer">Footer</a>
                <a href="Header">Header</a>
                <a href="Order">Order</a>
                <a href="Shop">Shop</a>
            </div>
            {/* <div>
                <Link to="About">About</Link>
                <Link to="Footer">Footer</Link>
                <Link to="Header">Header</Link>
                <Link to="Order">Order</Link>
                <Link to={Shop}>Shop</Link>
            </div> */}
        </div>
    );
};

export default Main;