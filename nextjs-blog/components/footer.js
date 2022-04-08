import React from 'react';
import styles from './footer.module.css';

export default function Footer() {

  return (
    <footer className={styles.footer}>
        <div>
            <h5>Szabina</h5>
            <h6>
                Adress <br/>
                Number <br/>
                Hejsan
            </h6>
        </div>
        
        <div>
        <h5>Szabina</h5>
            <h6>
                Adress <br/>
                Number <br/>
                Email
            </h6>
        </div>
        Add some stuff about social media
    <a href="https://www.instagram.com/szabina.locki/" target="_blank" >Instagram</a>
  
    </footer>
)};