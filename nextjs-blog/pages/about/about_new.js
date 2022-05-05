import Head from 'next/head';
import Layout from '../../components/layout';
import Image from 'next/image';
import styles from './about_new.module.css';

export default function About() {
    return (
    <Layout>
    <Head>
        <title>Sztudio \ About</title>
    </Head>
    <div className={styles.gridContainer}>
        <div className={styles.gridText}>
        <div className={styles.textDiv}>
        Szabinas ceramic journey started in Hawaii while apprenticing in a wood workshop. 
        After finishing her education as a furniture maker she gradually transitioned from wood to clay. 
       
        </div>
        <div className={styles.textDiv}>
        Today she runs a small, personal studio in the heart of Copenhagen, Denmark. 
        In the creative practice she focuses on form, function and process on a multisensory level. 
        With her objects she explores simplicity and playfulness. 
        
        </div>
        <div className={styles.textDiv}>
    Her work reflects the intersection of curiosity and familiarity. 
   
    </div>
        </div>
        <div className={styles.gridQuote}>

        </div>
        <div className={styles.gridImage}>

        </div>


    </div>
    
    
    
    </Layout>
    )
  }