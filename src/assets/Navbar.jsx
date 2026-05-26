import React, { useState } from "react";
import "./styles/navbar.css";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <header className="navbar-logo">
                Sachin Bhadoriya
            </header>

            <ul
                className={`navbar-links ${menuOpen ? "active" : ""
                    }`}
            >
                <li>
                    <Link onClick={() => setMenuOpen(false)} to="/">Home</Link>
                </li>

                <li>
                    <Link onClick={() => setMenuOpen(false)} to="/the-story">About</Link>
                </li>

                <li>
                    <Link onClick={() => setMenuOpen(false)} to="/my-toolkit">Skills</Link>
                </li>

                <li>
                    <Link onClick={() => setMenuOpen(false)} to="/journey">Experience</Link>
                </li>

                <li>
                    <Link onClick={() => setMenuOpen(false)} to="/crafted-projects">Projects</Link>
                </li>
                <li>
                    <Link onClick={() => setMenuOpen(false)} to="/lets-connect">Contact</Link>
                </li>
            </ul>

            <div
                className={`navbar-menu ${menuOpen ? "active" : ""
                    }`}
                onClick={() =>
                    setMenuOpen(!menuOpen)
                }
            >
                {menuOpen ? <RxCross1 /> : <CiMenuFries />}
            </div>
        </nav>
    );
};

export default Navbar;