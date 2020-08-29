import React from 'react'
import styles from './navbar.module.css';
import {NavLink, Link} from 'react-router-dom';

function Navbar({firstName, firstLink}) {
    return (
        <nav className={styles.navbar}>
            <Link to= "/"><h1 className={styles.navbar__logo}>7 Days,<br />7 Website</h1></Link>
            <ul className={styles.navbar__ul}>
            <NavLink to={'/'+firstLink}><li>{firstName}</li></NavLink>
            </ul>
        </nav>
    )
}

export default Navbar;
