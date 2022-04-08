import React from 'react';
import Image from 'next/image';
import styles from './header.module.css';
import Link from 'next/link';


export default function Header() {

  return (
    <header>
        <div className={styles.headerAll}>
            <Link href="/"><a>
                <Image
            src="/images/j_logo.jpeg" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={244} // Desired size with correct aspect ratio
            alt="Your Name"
            />
   </a></Link>
   <div className={styles.rightSideMenu}>
    <Link href="/about/about">
        <a>About</a>
    </Link>
    <Link href="/shop/shop">
        <a>Shop</a>
    </Link>
    <Link href="/shop/classes">
        <a>Classes</a>
    </Link>

    <Link href="/contact/contact">
        <a>Contact</a>
    </Link>
    </div>
  </div>
    </header>
)};