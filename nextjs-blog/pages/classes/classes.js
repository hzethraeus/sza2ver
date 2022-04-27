import Head from 'next/head';
import Layout from '../../components/layout';
import Section from '../../components/section';
import styles from './classes.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function Classes({prices}) {
    
   
    console.log(prices.data[0]);
    //console.log(data[0].product.name);
    
const listItems = prices.data.map((element) => {
    return <div className={styles.cardImage} key={element.id}>
        <Image 
        src={element.product.images[0]} // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={244} // Desired size with correct aspect ratio
        alt="test"
        />
         <p>{element.product.description}</p>
         <div className={styles.priceButton}>
             <p>{element.nickname}</p>
             <p>{element.unit_amount/100}{element.currency}</p>
          </div>
        </div>
    
} );  

      
    return (
    <Layout>
    <Head>
        <title>Sztudio \ Classes</title>
    </Head>
    
    <Section>
    <h1>Classes</h1>
    </Section>
    
    
    <div className={styles.grid}>
        
        
       
        
        {listItems}
          
        </div>
       
        
        
    </Layout>
    )
  }

export async function getServerSideProps() {
    // Fetch data from external API
    /*const stripe = require('stripe')('sk_test_51KqwH4BfpTgAZrS3Oq3n9fomMX5HVeYnn9n1IOpzGJpCYtctxQsI4NUclcdfAH4r4tNKfYc2f78ejoBlAgT3LxLl00wmx3GOyK');
        
    const products = await stripe.products.list({
      limit: 3,
    });
*/
    const stripe = require('stripe')('sk_test_51KqwH4BfpTgAZrS3Oq3n9fomMX5HVeYnn9n1IOpzGJpCYtctxQsI4NUclcdfAH4r4tNKfYc2f78ejoBlAgT3LxLl00wmx3GOyK');

    const prices = await stripe.prices.list({
        limit: 3,
        active: true,
        expand: ['data.product']
    });
    
    

  
    // Pass data to the page via props
    return { props: { prices } }
  }

  export default Classes;

  /*
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

        */