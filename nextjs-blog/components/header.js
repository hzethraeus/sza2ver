import React from 'react';
import Image from 'next/image';
import styles from './header.module.css';
import Link from 'next/link';
import { useRouter } from "next/router";

export default function Header() {
    const router=useRouter();
    //console.log(router.pathname.startsWith("/about/about"))
  return (
    <header>
        <div className={styles.headerAll}>
            <Link href="/"><a className={styles.logoImage}>
                <Image
            src="/images/j_logo.jpeg" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={244} // Desired size with correct aspect ratio
            alt="Your Name"
            />
   </a></Link>
   <div className={styles.rightSideMenu}>
    <Link href="/about/about">
        <a className={router.pathname== "/about/about" ? `${styles.activeTab}` :""}>
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