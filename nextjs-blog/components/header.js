import React from 'react';
import Image from 'next/image';
import styles from './header.module.css';
import Link from 'next/link';
import { useRouter } from "next/router";
import {useEffect, useState} from 'react';

export default function Header() {
    const router=useRouter();
  
  return (
    <header>
        <div className={styles.headerAll}>
            <Link href="/">
            <div className={styles.logoImage}><a>
            <Image src="/images/j_logo_small_no_bg.png" height={200} width={200} />
   </a></div></Link>
   <div className={styles.rightSideMenu}>
    <Link href="/about/about_new">
        <a className={router.pathname== "/about/about_new" ? `${styles.activeTab}` :""}>
            About
        </a>
    </Link>
    <Link href="/portfolio/portfolio">
        <a className={router.pathname.startsWith("/portfolio/") ? `${styles.activeTab}` :""}>
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