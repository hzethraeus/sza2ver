import { Button } from '@mui/material';
import { useRouter } from 'next/router'
import { loadStripe } from '@stripe/stripe-js';
loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

//kan ta bort denna - sålänge buy class funkar i product.js


const Post = () => {
  const router = useRouter()
  const { pid } = router.query


   /*async function handleBuy () {
    
    const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
        body: JSON.stringify("hej"),
        
    
      })
  };*/
  
  return <form action="/api/checkout_sessions" method="POST">
    <input type="hidden" name="priceId" value={pid} />
    <button type="submit" role="link">
      Checkout
    </button>
    </form>
}

export default Post