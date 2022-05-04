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
        <h1>
        <Link href="/about/about">
           <a>Szabina Loki</a>
          </Link>
          </h1>
      
      <Footer />
          </div>
    </div>
    
  )
}
