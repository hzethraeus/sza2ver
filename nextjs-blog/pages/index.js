import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import Section from '../components/section';
import styles from './index.module.css';
import Image from 'next/image';


export default function Home() {
  return (
  <Layout>
    <Head>
        <title>Sztudio</title>
        {/* Add some photo
        <link rel="icon" href="../favicon.ico" />
        */}

      </Head>
      
    <div className={styles.container}>
      
      <main>
        
        <Section>
        <h1 className={styles.title}>
        SZTUDIO \ {' '}
        <Link href="/about/about">
           <a>Szabina Loki</a>
          </Link>
          
        </h1>
        </Section>
        <Section>
        <h1 className={styles.welcomeText}>
          
        Welcome to my web page. <br /><br/>
Each piece is designed, handmade and fired at my atelier in Copenhagen.
<br />
Follow my journey with clay on  <a href="https://www.instagram.com/szabina.locki/" target="_blank" >Instagram</a>.

        </h1>
        </Section>
        <div className={styles.grid}>
          <div className={styles.cardImage}>
          <Image 
          
          src="/images/insta/normal_pic.jpg" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={244} // Desired size with correct aspect ratio
          alt="Your Name"
          />
          </div>
          <div className={styles.cardImage}>
          <Image 
          className={styles.cardImage}
          src="/images/insta/normal_pic.jpg" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={244} // Desired size with correct aspect ratio
          alt="Your Name"
          />
          </div>
          <div className={styles.cardImage}>
          <Image
          className={styles.cardImage} 
          src="/images/insta/normal_pic.jpg" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={244} // Desired size with correct aspect ratio
          alt="Your Name"
          />
          </div>
          <div className={styles.cardImage}>
          <Image 
          className={styles.cardImage}
          src="/images/insta/normal_pic.jpg" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={244} // Desired size with correct aspect ratio
          alt="Your Name"
          />
          </div>
            
        </div>
        
      
      </main>

    </div>
    </Layout>
  )
}
