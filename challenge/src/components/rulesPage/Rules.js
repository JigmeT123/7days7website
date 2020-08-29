import React from 'react'
import Navbar from '../navbar/Navbar';
import styles from './rules.module.css';
import {Link} from 'react-router-dom';
function Rules() {
    return (
        <div className={styles.rules}>
             <Navbar firstLink="tutorial"  firstName="Tutorial" />

             <div className={styles.rules__container}>
                <div className={styles.rules__title}>
                    <h3> <span className={styles.rules__span1}>Rules</span></h3>
                    <div className={styles.rules__content}>
                        <ul>
                            <li>Create a website every day for a week.</li>
                            <li>You can use whatever programming language and/or framework you want.</li>
                            <li>Share your progress on Instagram using the <strong>#7d7w</strong> hashtag.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rules
