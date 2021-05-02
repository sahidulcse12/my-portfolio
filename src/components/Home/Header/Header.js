import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                <div class="container logo">
                    <img src={logo} alt="" />
                    <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto header-items">
                            <li class="nav-item">
                                <Link class="nav-link" to="home" smooth={true} duration={1000}>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="about" smooth={true} duration={1000}>About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="portfolio" smooth={true} duration={1000}>Portfolio</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="contact" smooth={true} duration={1000}>Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="blogs" smooth={true} duration={1000}>Blogs</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="resume" smooth={true} duration={1000}>Resume</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;