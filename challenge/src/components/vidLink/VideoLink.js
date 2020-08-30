import React from 'react'
import Navbar from '../navbar/Navbar';
import styles from './videolink.module.css';
import VideoCard from './vidCard/VideoCard';
import vsCode from '../../assests/vscode.png';
import fleGri from '../../assests/flexgrid.jpg';
import netlify from '../../assests/netlify.png';
import reactjs from '../../assests/reactjs.png';
import firebase from '../../assests/firebase.png';
import xd from '../../assests/xd.png';

function VideoLink() {
    return (
        <div className={styles.videoLink}>
            <Navbar firstLink="rules" firstName="Rules"/>
            <div className={styles.video__container}>
                <div className={styles.video__title}>
                    <h3>Short
                        <span className={styles.video__span1}>Tutorial </span>
                        to get you
                        <span className={styles.video__span2}>started.</span>
                    </h3>
                </div>
                <div className={styles.videos__container}>
                    <div className={styles.basic_store}>
                        <VideoCard
                            url="https://www.youtube.com/watch?v=MlIzFUI1QGA"
                            imageURL={vsCode}
                            title="How to download VS Code"
                            description="Short video to download vs code"/>

                        <VideoCard
                            url="https://www.youtube.com/watch?v=RSIclWvNTdQ&t=308s"
                            imageURL={fleGri}
                            title="Flex VS Grid"
                            description="Learn to make a responsive website with flex box and grid css property."/>

                        <VideoCard
                            url="https://www.youtube.com/watch?v=gaC-l9MAE9Q&t=2s"
                            imageURL={netlify}
                            title="Netlify"
                            description="Learn how to deploy your website for free in less than a min"/>
                             <VideoCard
                            url="https://www.youtube.com/watch?v=DLX62G4lc44&t=6s"
                            imageURL={reactjs}
                            title="React js"
                            description="Learn react js library for easy component based web development"/>

                        <VideoCard
                            url="https://www.youtube.com/watch?v=9kRgVxULbag"
                            imageURL={firebase}
                            title="Firebase"
                            description="Learn backend with firebase to store the data"/>

                        <VideoCard
                            url="https://www.youtube.com/watch?v=JttI6YpmPGI&t=458s"
                            imageURL={xd}
                            title="Netlify"
                            description="Learn how to deploy your website for free in less than a min"/>

                    </div>

                       
                </div>
            </div>
        </div>
    )
}

export default VideoLink
