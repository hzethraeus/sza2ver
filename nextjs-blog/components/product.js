import Image from 'next/image';
import styles from './product.module.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';

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



export default function Product({resEl}) {
    //console.log(resEl);
    const hej ="hej";
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        console.log("HEJ");
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
      const handleBuy = () => {
        setOpen(false);
        
        
      };


  return  <div>
      
    <Card sx={{ maxWidth: 345, bgcolor: '#f7f3ec' }} onClick={handleClickOpen}>
      <CardActionArea>
        <CardMedia
        
          component="img"
          height="140"
          image={resEl.product.images[0]}
          alt={resEl.product.description}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          <a>{resEl.product.description}</a>
          </Typography>
          <Typography variant="body3" color="text.secondary">
          <h6>{resEl.nickname}</h6>
          <a>{resEl.unit_amount/100}{resEl.currency}</a>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {resEl.product.description}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions >
        <Link href="/[pid]" as={`/${resEl.id}`}>
            
                <Button autoFocus onClick={handleBuy}>
                    Buy Class
                </Button>
              
          </Link>
          <form action="/api/checkout_sessions" method="POST">
    <input type="hidden" name="priceId" value={resEl.id} />
    <Button autoFocus type="submit" role="link">
      Checkout
    </Button>
    </form>
          
        </DialogActions>
      </BootstrapDialog>
    
    </div>
};

/*
<Image 
        src={resEl.product.images[0]} // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={244} // Desired size with correct aspect ratio
         alt="test"
    />
    <p>{resEl.product.description}</p>
    <div className={styles.priceButton}>
        <p>{resEl.nickname}</p>
        <p>{resEl.unit_amount/100}{resEl.currency}</p>
    </div>

    */