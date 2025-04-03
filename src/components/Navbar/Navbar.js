import React, { useState } from 'react';
import './Navbar.css';
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
    const [searchText, setSearchText] = useState(""); // State to store input value
    const navItems = ["Cart", "Sign In"];

    const handleChange = (e) => {
        setSearchText(e.target.value); // Update state with input value
        console.log("Search input:", e.target.value); // Log the input value
    };

    return (
        <nav className="navbar">
            <h2 className="logo">MyStore</h2>
            
            {/* Search Input */}
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="input-search-bar" 
                    onChange={handleChange}  // Correct event handler usage
                    value={searchText} // Controlled input
                />
                <div className="search-icon">
                    <IoMdSearch />
                </div>
            </div>

            {/* Navigation Items */}
            <ul className="nav-links">
                {navItems.map((item, index) => (
                    <li key={index} className="nav-item">{item}</li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
