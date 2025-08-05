'use client';

import { CardElement, useStripe, useElements } from '@stripe/stripe-react';
import { useState } from 'react';

export default function DonationForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState(50);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const presetAmounts = [25, 50, 100, 250, 500];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!stripe || !elements) {
      return;
    }

    try {
      const response = await fetch('/donate/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount * 100, // Convert to cents
          name,
          email,
        }),
      });

      const { clientSecret } = await response.json();

      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name,
            email,
          },
        },
      });

      if (error) {
        setMessage(error.message || 'Payment failed');
      } else {
        setMessage('Payment successful! Thank you for your donation.');
        // Reset form
        setName('');
        setEmail('');
        setAmount(50);
        elements.getElement(CardElement).clear();
      }
    } catch (err) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <h3 className="text-lg font-medium mb-2">Select Donation Amount</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
          {presetAmounts.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => setAmount(preset)}
              className={`py-2 px-4 rounded border ${
                amount === preset ? 'bg-blue-100 border-blue-500' : 'bg-white border-gray-300'
              }`}
            >
              ${preset}
            </button>
          ))}
        </div>
        <div className="mb-4">
          <label htmlFor="customAmount" className="block mb-2">
            Or enter custom amount ($)
          </label>
          <input
            id="customAmount"
            type="number"
            min="5"
            step="5"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="block mb-2">Card Details</label>
        <div className="p-3 border rounded">
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
        </div>
      </div>

      <button
        type="submit"
        disabled={!stripe || isLoading}
        className="w-full mt-6 bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {isLoading ? 'Processing...' : `Donate $${amount}`}
      </button>

      {message && (
        <div
          className={`mt-4 p-3 rounded ${
            message.includes('success') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {message}
        </div>
      )}
    </form>
  );
}