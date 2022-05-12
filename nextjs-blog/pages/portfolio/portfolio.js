import Head from 'next/head';
import Layout from '../../components/layout';
import Section from '../../components/section';
import styles from './portfolio.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio() {
    return (
    <Layout>
    <Head>
        <title>Sztudio \ Portfolio</title>
    </Head>

    <div className={styles.grid}>
        <div className={styles.cardImage}>
        <Image 
        
        src="/images/insta/normal_pic.jpg" // Route of the image file
        height={216} // Desired size with correct aspect ratio
        width={366} // Desired size with correct aspect ratio
        alt="Your Name"
        />
        <div className={styles.cardText}>
            <Link href="/portfolio/handbuilt">
                <a>
                    Handbuilt
                </a>
            </Link>
        </div>
        </div>
        <div className={styles.cardImage}>
         <Image 
         
        src="/images/insta/normal_pic.jpg" // Route of the image file
        height={216} // Desired size with correct aspect ratio
        width={366} // Desired size with correct aspect ratio
        alt="Your Name"
        />
         <div className={styles.cardText}>
            <Link href="/portfolio/thrown">
                <a>
                    Thrown
                </a>
            </Link>
        </div>
        </div>
        <div className={styles.cardImage}>
        <Image
        
        src="/images/insta/normal_pic.jpg" // Route of the image file
        height={216} // Desired size with correct aspect ratio
        width={366} // Desired size with correct aspect ratio
        alt="Your Name"
        />
         <div className={styles.cardText}>
            <Link href="/portfolio/casted">
                <a>
                    Casted
                </a>
            </Link>
        </div>
        </div> 
        </div>

    
    
    
    </Layout>
    )
  } 