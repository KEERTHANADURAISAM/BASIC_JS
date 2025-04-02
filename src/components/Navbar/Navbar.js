import React from 'react';
import './Navbar.css';

const Navbar = () => {
    const navItems = ["Cart", "Sign In"];
    return (
        <nav className="navbar">
            <h2 className="logo">MyStore</h2>
            <ul className="nav-links">
                {navItems.map((item, index) => (
                    <li key={index} className="nav-item">{item}</li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
