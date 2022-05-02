import React from 'react';
import styles from './footer.module.css';

export default function Footer() {

  return (
    <footer className={styles.footer}>
        <div className={styles.lowDiv}>
            <h5>Szabina Lócki</h5>
            <h6>
                Vestmannagade 3<br/>
                Copenhagen <br />
                Denmark <br />
                szabina.locki@gmail.com <br />
                <a href="https://www.instagram.com/szabina.locki/" target="_blank" >Instagram</a> 
            </h6>
        </div>
        
        
       
    </footer>
)};