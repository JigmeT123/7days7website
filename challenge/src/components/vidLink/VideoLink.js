import React from 'react'
import Navbar from '../navbar/Navbar';
import styles from './videolink.module.css';
function VideoLink() {
    return (
        <div className={styles.videoLink}>
             <Navbar firstLink="rules" secondLink="submit" firstName="Rules" secondName="Submit"/>
            <div className={styles.video__container}>
                <div className={styles.video__title}>
                    <h3>Short <span className={styles.video__span1}>Tutorial</span> to get you <span className={styles.video__span2}>started.</span></h3>
                </div>
            </div>
        </div>
    )
}

export default VideoLink
