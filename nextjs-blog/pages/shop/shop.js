import Head from 'next/head';
import Layout from '../../components/layout';
import Section from '../../components/section';
import styles from './shop.module.css';
import Image from 'next/image';

export default function Shop() {
    return (
    <Layout>
    <Head>
        <title>Sztudio \ Shop</title>
    </Head>
    <Section>
        <h1>Shop</h1>

    </Section>
    <Section>
    
    <div className={styles.grid}>
        <div className={styles.cardImage}>
        <Image 
        
        src="/images/insta/jbellina.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={244} // Desired size with correct aspect ratio
        alt="Your Name"
        />
        </div>
        <div className={styles.cardImage}>
         <Image 
         className={styles.cardImage}
        src="/images/insta/jbellina.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={244} // Desired size with correct aspect ratio
        alt="Your Name"
        />
        </div>
        <div className={styles.cardImage}>
        <Image
        className={styles.cardImage} 
        src="/images/insta/jbellina.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={244} // Desired size with correct aspect ratio
        alt="Your Name"
        />
        </div>
         <div className={styles.cardImage}>
         <Image 
         className={styles.cardImage}
        src="/images/insta/jbellina.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={244} // Desired size with correct aspect ratio
        alt="Your Name"
        />
        </div>
          
        </div>

    </Section>
    
    
    </Layout>
    )
  } 