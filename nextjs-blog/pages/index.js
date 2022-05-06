import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import Section from '../components/section';
import styles from './index.module.css';
import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className={styles.container}>
     
      <Image 
      src="/images/background.jpg"
      layout="fill"
      objectFit="cover"
      
      />
      <div  className={styles.indexContent}>
      <Header />
        <div className={styles.midContext}>
        <Link href="/about/about_new">
           <a>Szabina Loki</a>
          </Link>
          </div>
      
      
          </div>
          <div className={styles.footerIndex}> 
          <h6>
                szabina.locki@gmail.com

            </h6>
        <div className={styles.lowDiv}>
            <h6>
            ©All rights reserved studio szabina locki 
            </h6>
        </div>
            </div>
    </div>
    
  )
}
