import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import {ImSpinner9} from "react-icons/im"
import './CheckoutForm.css';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuthProvider from '../../Hooks/useAuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({serviceData,discount,id,closeModal,refetch}) => {
const axiosSecure = useAxiosSecure()
const {user}=useAuthProvider()
  const stripe = useStripe();
  const price = discount?discount:serviceData?.price;
  const elements = useElements();
const [clientSecret,setClientSecret] =useState()
const [cardError,setCardError] = useState('')
const [processing,setProssing] = useState(false)
const navigate = useNavigate()

let currentDate = new Date();
let formattedDate = currentDate.toISOString().split('T')[0];

useEffect(() => {
  if(price && price>1){
    getClientSecret(price)
  }

},[price])

const getClientSecret =async(price)=>{
 
  const {data}=await axiosSecure.post('/create-payment-intent',{price:price})
  console.log(data)
  setClientSecret(data.clientSecret)
}


const updateSlot = async () => {
  const updateSlot = {
      slot: serviceData?.slot - 1,
  };
  if(updateSlot){
    const { data } = await axiosSecure.patch(`/alltest/slot/${id}`, updateSlot);
    console.log(data);
  
  }
};




  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
     setProssing(true)
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
       setCardError(error.message)
      console.log('[error]', error);
      setProssing(false);
      return;
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setCardError('')
    }
    // confirm payment
    
    const {error:confirmError,paymentIntent}=await stripe.confirmCardPayment(clientSecret, {
      payment_method:{
      card: card,
      billing_details:{
      email: user?.email,
      name:user?.displayName,
      
      },
      },
    
    })
    if(confirmError){
    console.log(confirmError.message);
    setCardError(confirmError.message);
    setProssing(false);
    return;
    }
    
    if(paymentIntent.status=="succeeded"){
    //  --------------------booked serviceData------------------------
    console.log('sucessfully');
    updateSlot();
    const serviceDetails = {
      title: serviceData?.title,
      description: serviceData?.description,
      price: price,
      BookedDate:formattedDate,
      image: serviceData?.image,
      status:'panding',
      appontmentData:serviceData?.date,
      category: serviceData?.category,
      userName: user?.displayName,
      userEmail: user?.email,
      bookingId : id,
      }
      const postService = async()=>{
        const {data} = await axiosSecure.post('/alltest/Booking',serviceDetails);
        if(data.insertedId){
        setProssing(false)
        closeModal()
        refetch()
        navigate("/dashboard/upcommingappoinments")
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your paymet is successful",
          showConfirmButton: false,
          timer: 1500
        });
        }
      }
      postService();
    
    }
    
    
  };
  
  return (
   <>
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className=' btn bg-green-300 w-full' type="submit" disabled={!stripe || !clientSecret || processing }>
        {processing ? <ImSpinner9 className='animate-spin' size={
        24}></ImSpinner9>:`Pay${price}tk` }
      </button>
    </form>
    <div>
   {cardError && <p className=' text-red-500 text-sm mx-2'>{cardError}</p>} 
    </div>
   </>
  );
};

export default CheckoutForm;