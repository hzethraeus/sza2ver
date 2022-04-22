import Head from 'next/head';
import Layout from '../../components/layout';
import Section from '../../components/section';
import styles from './portfolio.module.css';
import Image from 'next/image';

export default function Portfolio() {
    return (
    <Layout>
    <Head>
        <title>Sztudio \ Portfolio</title>
    </Head>
    <Section>
        <h1>+Portfolio</h1>

    </Section>
    
    
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

    
    
    
    </Layout>
    )
  } 