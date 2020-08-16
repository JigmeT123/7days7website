import React from 'react'
import styles from './navbar.module.css';
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.navbar__logo}>7 Days,<br /> 7 Website</h1>
            <ul className={styles.navbar__ul}>
                <li><NavLink to='/submit'>Rules</NavLink></li>
                <li><NavLink to=''>Submit</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;
