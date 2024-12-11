import React from 'react';
import styles from "./Footer.module.css";
import { Button } from 'react-bootstrap';


const Footer = () => {
    return (
        <div className={`${styles.Footer} `}>
            
            <a href="#" className={styles.copyText}>© Fortuna 2024</a>
            <p className={styles.madeWithLove}>Made with ❤️ by Team Fortuna</p>
            <ul className={styles.links}>
                <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="mailto:team@fortuna.com">Mail</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
        </div>
    );
};

export default Footer;
