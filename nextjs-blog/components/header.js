import React from 'react';
import Image from 'next/image';
import styles from './header.module.css';
import Link from 'next/link';
import { useRouter } from "next/router";
import {useEffect, useState} from 'react';

export default function Header() {
    const router=useRouter();
    var imgSrc="/images/j_logo.jpeg";
    var x ="" 
    var imgHeight=50;
    var imgWidth=50;
    if(typeof window !== 'undefined') {
        // detect window screen width function
        x=window.matchMedia("(max-width: 500px)")
        if (x.matches) { // If media query matches
            imgHeight=50;
           imgWidth=50;
           imgSrc="/images/j_logo_small.png";
           
          } else {
            imgHeight=108;
            imgWidth=200;
            imgSrc="/images/j_logo.jpeg"; // Route of the image file
           
          }
      }
    
    useEffect(()=>{
        if (x.matches) { // If media query matches
            imgHeight=50;
           imgWidth=50;
           imgSrc="/images/j_logo_small.png";
           
          } else {
            imgHeight=108;
            imgWidth=200;
            imgSrc="/images/j_logo.jpeg"; // Route of the image file
            
          }
    }, [x]);
 

    //console.log(router.pathname.startsWith("/about/about"))
  return (
    <header>
        <div className={styles.headerAll}>
            <Link href="/">
            <div className={styles.logoImage}><a>
            <Image src={imgSrc} height={imgHeight} width={imgWidth} />
   </a></div></Link>
   <div className={styles.rightSideMenu}>
    <Link href="/about/about_new">
        <a className={router.pathname== "/about/about_new" ? `${styles.activeTab}` :""}>
            About
        </a>
    </Link>
    <Link href="/portfolio/portfolio">
        <a className={router.pathname== "/portfolio/portfolio" ? `${styles.activeTab}` :""}>
            Portfolio
        </a>
    </Link>
    <Link href="/classes/classes">
        <a className={router.pathname== "/classes/classes" ? `${styles.activeTab}` :""}>
            Classes
        </a>
    </Link>
    </div>
  </div>
  
    </header>
)};