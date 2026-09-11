import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Box, Button, Typography, CircularProgress, Alert } from '@mui/material';

interface PaymentFormProps {
  amount: number;
  onSuccess: () => void;
}

export default function PaymentForm({ amount, onSuccess }: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      // 1. Create Payment Intent on the server
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: amount * 100 }), // Stripe expects amount in cents
      });

      if (!response.ok) {
        throw new Error('Failed to initialize payment');
      }

      const { clientSecret } = await response.json();

      // 2. Confirm the payment on the client
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) throw new Error('Card element not found');

      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (stripeError) {
        setError(stripeError.message || 'An error occurred during payment.');
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        onSuccess();
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit}
      sx={{
        mt: 3,
        p: 3,
        bgcolor: '#fff',
        borderRadius: 1,
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Payment Details
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Total Amount: ${amount}
      </Typography>
      
      <Box sx={{
        p: 2,
        border: '1px solid',
        borderColor: 'grey.300',
        borderRadius: 1,
        mb: 3,
        bgcolor: '#fafafa',
      }}>
        <CardElement options={{
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
        }} />
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={!stripe || processing}
        size="large"
        sx={{ 
          boxShadow: 'none', 
          '&:hover': { boxShadow: 'none', backgroundColor: '#333' },
          py: 1.5,
          fontWeight: 600
        }}
      >
        {processing ? <CircularProgress size={24} color="inherit" /> : `Pay $${amount}`}
      </Button>
    </Box>
  );
}
