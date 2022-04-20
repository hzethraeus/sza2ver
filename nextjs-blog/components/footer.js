import React from 'react';
import styles from './footer.module.css';

export default function Footer() {

  return (
    <footer className={styles.footer}>
        <div className={styles.lowDiv}>
            <h5>Szabina</h5>
            <h6>
                Adress <br/>
                Number <br/>
                Email
            </h6>
        </div>
        <div className={styles.lowDiv}>
            <h5>Social Media</h5>
            <h6>
            <a href="https://www.instagram.com/szabina.locki/" target="_blank" >Instagram</a> <br/>
                Facebook <br/>
                Hej
            </h6>
        </div>
        
       
    </footer>
)};