import Head from 'next/head';
import Layout from '../../components/layout';
import styles from './inportfolio.module.css';
import Image from 'next/image';
export default function Thrown() {
    return <Layout>
    <Head>
        <title>Sztudio \ Thrown</title>
    </Head>
    <div className={styles.gridContainer}>
        <div className={styles.gridText}>
        <div className={styles.textDiv}>
        

Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed sit amet dui a dui imperdiet auctor. 
Ut sodales tristique lectus condimentum auctor. 
Orci varius natoque penatibus et magnis dis parturient montes, 
nascetur ridiculus mus. 
Donec sem leo, rhoncus sed nulla nec, commodo volutpat mi. 
Donec id molestie enim, sed porttitor eros. Suspendisse potenti.
 Donec neque metus, scelerisque efficitur dignissim consequat,
  vestibulum a arcu. 
  Proin risus magna, accumsan quis volutpat sit amet, 
  commodo elementum lorem. Nam accumsan volutpat pretium.
   Nullam vel justo urna. 
   Class aptent taciti sociosqu ad litora torquent per conubia nostra,
    per inceptos himenaeos. Morbi sodales sem lorem, 
    id varius lacus laoreet in.

Duis ac eleifend ante. 
Aenean sit amet neque eget purus posuere laoreet a sit amet tellus. 
Cras aliquet nisl justo, vel sagittis lorem laoreet at.
 Pellentesque vestibulum felis et velit aliquam, 
 nec elementum justo condimentum. 
 Curabitur aliquet posuere tellus eget congue. 
 Etiam orci erat, ultricies sed. 
    </div>
    
        </div>
        
        <div className={styles.gridImage}>
        <Image 
            src="/images/portrait.jpg" // Route of the image file
            height={1876} // Desired size with correct aspect ratio
            width={2742} // Desired size with correct aspect ratio
            alt="Your Name"
        />
        </div>


    </div>
</Layout>
};