import Head from 'next/head';
import Layout from '../../components/layout';
import Section from '../../components/section';
import styles from './classes.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Classes() {
    
    const [kurs, setKurs] = useState("empty");

    const getProducts = async() =>{
        
        try{
            const stripe = require('stripe')('sk_test_51KqwH4BfpTgAZrS3Oq3n9fomMX5HVeYnn9n1IOpzGJpCYtctxQsI4NUclcdfAH4r4tNKfYc2f78ejoBlAgT3LxLl00wmx3GOyK');
        
            const products = await stripe.products.list({
              limit: 1,
            });
            console.log(products);
            const name = await products.data[0].name;
            console.log(name);
            return (name);
        }catch(err){
            console.error(err);
        }
    }
    var prodName="hej";
    getProducts().then(response => {
        console.log(typeof response);
        console.log(response);
        prodName= response;
        console.log(typeof prodName);
        
        setKurs(prodName);
      });
      
      
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
        <p>{kurs}</p>
        <p>{prodName}</p>
        
    </Layout>
    )
  }