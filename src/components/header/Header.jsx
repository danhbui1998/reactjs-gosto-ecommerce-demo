import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="flex justify-between">
            <div className=""></div>
            <nav className=" ">
                <NavLink className={({ isActive }) => (isActive ? 'text-red-600 font-bold' : '')} to="/">
                    Home
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'text-red-600 font-bold' : '')} to="/about">
                    About
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'text-red-600 font-bold' : '')} to="/contact">
                    Contact
                </NavLink>
            </nav>
            <Link to="/login">
                <button>Login</button>
            </Link>
        </header>
    );
};

export default Header;
