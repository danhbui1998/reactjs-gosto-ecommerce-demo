import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="logo"></div>
            <nav className="navbar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
            <Link to="/login">
                <button>Login</button>
            </Link>
        </header>
    );
};

export default Header;
