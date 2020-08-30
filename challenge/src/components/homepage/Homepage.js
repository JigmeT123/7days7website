import React from 'react'
import Navbar from '../navbar/Navbar'; 
import styles from './homepage.module.css';
import InfoCard from '../card/InfoCard';
import one from '../../assests/1.svg';
import two from '../../assests/2.svg';
import three from '../../assests/3.svg';
import {Link} from 'react-router-dom'
function Homepage() {
    return (
        <div className={styles.homepage__container}>
            <div className={styles.homepage}>
            <Navbar firstLink="rules" firstName="Rules"/>
            <div className={styles.homepage__mainContent}>
                <div className={styles.mainContent__one}>
                    <div className={styles.one__container}>
                       <p className={styles.introWebsite}> <span className={styles.intro}>Introducing </span> 7 Days, <br />
                        7 Website <span className={styles.challenge}>Challenge</span></p>
                       <h6>Learn and improve skills by taking this challenge.This challenge is to everyone who wants to groom their skills on web designing. And mainly to Bhutanese who are staying home due to the Nation-wide lockdown in response to the COVID19 pandemic. It is an amazing way to spend your stay at home productively by learning and grooming your skills. </h6>
                       <Link to='./tutorial'><button className={styles.btn}>Tutorial</button></Link>

                    </div>
                    
                </div>
                <div className={styles.mainContent__two}></div>
            </div>
            </div>
            <div className={styles.info__section}>
                <div className={styles.info__topic}>
                    <h1> Attention <span className={styles.attention}>designers</span> and <span className={styles.learners}>aspiring learners!</span> </h1>
                </div>
                <div className={styles.info__cardContainer}>
                <InfoCard title="Here's how it will work" img={one} info="The person willing to learn may try to make the web in a similar manner as given in the template and mention me (@frontendj) with a hashtag (#7D7W) after completing the design. The learners can also dm me and ask for help if required."/>
                <InfoCard title="Why 7D7W?" img={two} info="This initiative is taken so as to groom the designing skills and keeping in touch with the basics of web development for those who already know and also to provide opportunity to those who are willing to learn. The best way of learning is actually by doing so it is a very good opportunity to learn!"/>
                <InfoCard title="Target audience:" img={three} info="This challenge is to everyone who wants to groom their skills. And mainly to Bhutanese who are staying home due to the Nation-wide lockdown in response to the COVID19 pandemic. It is an amazing way to spend your stay at home productively by learning and grooming your skills. "/>
                </div>
                
            </div>
            <div className={styles.homepage__footer}>
                <h1> <span className={styles.ready}>Ready</span> to be a <span className={styles.part}>part!</span> check out the rules</h1>
                <button className={styles.footBtn}><Link to='/rules'>Rules</Link></button>
                <p className={styles.credit}>Created by <a href="https://www.instagram.com/jigmetashinamgyal/" target="_blank">Jigme Tashi Namgyal</a> with the help of <a href="https://www.instagram.com/ayeitsbhuws/" target="_blank">Bhuwan Sharma</a></p>
            </div>
        </div>
    )
}
export default Homepage
