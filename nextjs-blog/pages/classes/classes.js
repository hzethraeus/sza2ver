import Head from 'next/head';
import Layout from '../../components/layout';
import Section from '../../components/section';
import styles from './classes.module.css';
import Product from '../../components/product.js'
import { useEffect, useState } from 'react';

function Classes({prices}) {
    
   
    
    var listItems= "No classes to show right now."
    if(prices != null ){
        if(prices.data.length==0){
            console.log("HEJ");

        } else{
        listItems = prices.data.map((element) => {
            return <div className={styles.cardImage} key={element.id}>
               <Product 
                resEl={element}
                />
                </div>

        });  
    }
}

      
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
    
    var prices=undefined;
    try{
        const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
        prices = await stripe.prices.list({
            limit: 3,
            active: true,
            expand: ['data.product']
        });
    }catch(err){
        console.log("Catch" +err);
    }
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

        // Fetch data from external API
    /*const stripe = require('stripe')('');
        
    const products = await stripe.products.list({
      limit: 3,
    });
*/