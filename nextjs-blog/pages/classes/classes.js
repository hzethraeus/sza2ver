import Head from 'next/head';
import Layout from '../../components/layout';
import Section from '../../components/section';
import styles from './classes.module.css';
import Image from 'next/image';


export default function Classes() {
    return (
    <Layout>
    <Head>
        <title>Sztudio \ Classes</title>
    </Head>
    
    <Section>
    <h1>Classes</h1>
    </Section>
    
    
    <div className={styles.grid}>
        <div className={styles.cardImage}>
        <Image 
        
        src="/images/insta/jbellina.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={244} // Desired size with correct aspect ratio
        alt="Your Name"
        />
         <p>Introduction to throwing, trimming and glazing.</p>
         <div className={styles.priceButton}>
             <p>First half of May</p>
             <p>Price</p>
             
          </div>
        </div>
       
        <div className={styles.cardImage}>
        
         <Image 
         className={styles.cardImage}
        src="/images/insta/jbellina.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={244} // Desired size with correct aspect ratio
        alt="Your Name"
        />
        <p>Introduction to throwing, trimming and glazing.</p>
        <div className={styles.priceButton}>
            <p>Second half of May</p>
             <p>Price</p>
          </div>
        </div>
       
        <div className={styles.cardImage}>
        <Image
        className={styles.cardImage} 
        src="/images/insta/jbellina.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={244} // Desired size with correct aspect ratio
        alt="Your Name"
        />
         <p>Private class in throwing, trimming and glazing. </p>
         <div className={styles.priceButton}>
         <p>Date upon request</p>
             <p>Price</p>
             
             
          </div>
        </div>
         
          
        </div>

    
    
    </Layout>
    )
  }