import React from 'react'
import Navbar from '../navbar/Navbar'; 
import styles from './homepage.module.css'
function Homepage() {
    return (
        <div className={styles.homepage}>
            <Navbar />
            <div className={styles.homepage__mainContent}>
                <div className={styles.mainContent__one}>
                    <div className={styles.one__container}>
                       <p> <span className={styles.intro}>Introducing </span> 7 Days, <br />
                        7 Website <span className={styles.challenge}>Challenge</span></p>
                       <h6>loremEx ipsum duis ad mollit adipisicing laborum ad culpa ut in exercitation proident id reprehenderit. Est eiusmod nostrud ipsum deserunt Lorem eiusmod in est incididunt in deserunt ad sit qui. Aliqua reprehenderit sit veniam dolore.</h6>
                       <button className={styles.btn}>Tutorial</button>

                    </div>
                    
                </div>
                <div className={styles.mainContent__two}></div>
            </div>
        </div>
    )
}

export default Homepage
