import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import Section from '../components/section';
import styles from './index.module.css';
import Image from 'next/image';
import Title from '../components/title';

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

        {/*
<Image 
  src="https://instagram.fcph5-1.fna.fbcdn.net/v/t51.2885-15/122655564_866633483872481_3245339985411966401_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=instagram.fcph5-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=klCVlvk5EKoAX-S-irS&edm=APU89FABAAAA&ccb=7-4&oh=00_AT_w3tx0ngDTVLFE6du2G5h3GgpU9pvGlN_eqZEUimhfMA&oe=62563C94&_nc_sid=86f79a"
  height={144} // Desired size with correct aspect ratio
  width={244} // Desired size with correct aspect ratio
  alt="Your Name"

/>
        */}
      </main>

    </div>
    </Layout>
  )
}
