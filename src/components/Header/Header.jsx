import React from 'react';
import styles from './header.module.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <a>
                    <Link to="http://localhost:8080/">HALAL or HARAM</Link>
                </a>
            </nav>
        </header>
    );
};

export default Header;