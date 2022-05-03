import Head from 'next/head';
import Layout from '../../components/layout';
import Section from '../../components/section';
import styles from './classes.module.css';
import Product from '../../components/product.js'
import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
  

function Classes({prices}) {
    const [open, setOpen] = useState(false);
    const [titlePayment, setTitlePayment] = useState("");
    const [textPayment, setTextPayment] = useState("");
      const handleClose = () => {
        setOpen(false);
      };
    /*
    var titlePayment="";
    var textPayment="";
    */
    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
            console.log('Order placed! You will receive an email confirmation.');
            setTitlePayment("Congratulations, payment succeeded!");
            setTextPayment("You will receive a confirmation email with more information about the class. If you don't receive an email within 24 hours please contact XXX@Gmail.com . Don't forget to look in your spam filter.");
            setOpen(true);
        }
    
        if (query.get('canceled')) {
            console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
            setTitlePayment("Oops, something went wrong...");
            setTextPayment("Your payment failed or got cancelled. No money has been withdrawn from your account. Please contact XXX@Gmail.com if the problem persists.");
            
            setOpen(true);
        }
      }, []);
    console.log(titlePayment);
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
    <h1>+Classes</h1>
    </Section>
    
    
    <div className={styles.grid}>

        {listItems}
        </div>
        <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {titlePayment}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {textPayment}
          </Typography>
          
        </DialogContent>
        <DialogActions >
          
            <Button autoFocus onClick={handleClose}>
            Close
            </Button>
            
  
    
          
        </DialogActions>
      </BootstrapDialog>
    </Layout>
    )
}
export async function getServerSideProps() {
    
    var prices=undefined;
    try{
        const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
        prices = await stripe.prices.list({
            limit: 5,
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