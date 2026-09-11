import React, { useState } from 'react';
import { 
  Container, Typography, Box, TextField, MenuItem, 
  Paper, Stepper, Step, StepLabel, Alert
} from '@mui/material';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '../components/PaymentForm';

// Initialize Stripe outside of component to avoid recreating it on every render
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder');

const SAFARI_ZONES = [
  { value: 'chambal1', label: 'Chambal River - Zone A' },
  { value: 'chambal2', label: 'Chambal River - Zone B' },
  { value: 'pali_ghat', label: 'Pali Ghat - Crocodile Point' },
];

const SAFARI_TIMINGS = [
  { value: 'morning', label: 'Morning (06:00 AM - 10:00 AM)' },
  { value: 'afternoon', label: 'Afternoon (02:00 PM - 06:00 PM)' },
];

const PRICE_PER_PERSON = 85;

export default function Booking() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    zone: '',
    timing: '',
    persons: 1,
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveStep(1);
  };

  const handlePaymentSuccess = () => {
    setBookingSuccess(true);
    setActiveStep(2);
  };

  const totalAmount = formData.persons * PRICE_PER_PERSON;

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 6 }}>
        Book Ranthambore Boat Safari
      </Typography>

      <Stepper activeStep={activeStep} sx={{ mb: 8 }}>
        <Step><StepLabel>Details</StepLabel></Step>
        <Step><StepLabel>Payment</StepLabel></Step>
        <Step><StepLabel>Confirmation</StepLabel></Step>
      </Stepper>

      <Paper elevation={0} sx={{ p: 6, borderRadius: 1, border: '1px solid', borderColor: 'divider' }}>
        {activeStep === 0 && (
          <form onSubmit={handleNext}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
              <Box>
                <TextField
                  required
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <TextField
                  required
                  fullWidth
                  type="email"
                  label="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <TextField
                  required
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <TextField
                  required
                  fullWidth
                  type="date"
                  label="Safari Date"
                  name="date"
                  InputLabelProps={{ shrink: true }}
                  value={formData.date}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <TextField
                  required
                  fullWidth
                  select
                  label="Safari Zone"
                  name="zone"
                  value={formData.zone}
                  onChange={handleChange}
                >
                  {SAFARI_ZONES.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              <Box>
                <TextField
                  required
                  fullWidth
                  select
                  label="Timing"
                  name="timing"
                  value={formData.timing}
                  onChange={handleChange}
                >
                  {SAFARI_TIMINGS.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              <Box sx={{ gridColumn: { xs: '1', sm: '1 / span 2' } }}>
                <TextField
                  required
                  fullWidth
                  type="number"
                  label="Number of Persons"
                  name="persons"
                  InputProps={{ inputProps: { min: 1, max: 10 } }}
                  value={formData.persons}
                  onChange={handleChange}
                  helperText={`Price per person: $${PRICE_PER_PERSON}`}
                />
              </Box>
              <Box sx={{ gridColumn: { xs: '1', sm: '1 / span 2' } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                  <Typography variant="h6">
                    Total: ${totalAmount}
                  </Typography>
                  <button 
                    type="submit" 
                    style={{
                      padding: '12px 32px',
                      backgroundColor: '#1a1a1a',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      fontWeight: 600
                    }}
                  >
                    Proceed to Payment
                  </button>
                </Box>
              </Box>
            </Box>
          </form>
        )}

        {activeStep === 1 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Review Booking
            </Typography>
            <Box sx={{ mb: 3, p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
              <Typography><strong>Name:</strong> {formData.name}</Typography>
              <Typography><strong>Date:</strong> {formData.date}</Typography>
              <Typography><strong>Zone:</strong> {SAFARI_ZONES.find(z => z.value === formData.zone)?.label}</Typography>
              <Typography><strong>Timing:</strong> {SAFARI_TIMINGS.find(t => t.value === formData.timing)?.label}</Typography>
              <Typography><strong>Persons:</strong> {formData.persons}</Typography>
            </Box>
            
            <Elements stripe={stripePromise}>
              <PaymentForm amount={totalAmount} onSuccess={handlePaymentSuccess} />
            </Elements>
            
            <Box sx={{ mt: 2 }}>
              <button 
                onClick={() => setActiveStep(0)}
                style={{
                  padding: '10px 24px',
                  backgroundColor: 'transparent',
                  color: '#1a1a1a',
                  border: '1px solid #1a1a1a',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
              >
                Back to Details
              </button>
            </Box>
          </Box>
        )}

        {activeStep === 2 && bookingSuccess && (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Alert severity="success" sx={{ mb: 4, justifyContent: 'center', fontSize: '1.1rem' }}>
              Payment successful! Your boat safari is confirmed.
            </Alert>
            <Typography variant="h5" gutterBottom>
              Thank you, {formData.name}!
            </Typography>
            <Typography color="text.secondary" paragraph>
              A confirmation email has been sent to {formData.email} with your booking details.
            </Typography>
            <button 
              onClick={() => {
                setFormData({ name: '', email: '', phone: '', date: '', zone: '', timing: '', persons: 1 });
                setActiveStep(0);
                setBookingSuccess(false);
              }}
              style={{
                marginTop: '24px',
                padding: '12px 32px',
                backgroundColor: '#1a1a1a',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1rem',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              Book Another Safari
            </button>
          </Box>
        )}
      </Paper>
    </Container>
  );
}
