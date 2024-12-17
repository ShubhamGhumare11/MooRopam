import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import ProgressBar from './ProgressBar';
import LoginForm from './LoginForm';
import PhoneForm from './PhoneForm';
import AddressForm from './AddressForm';
import OrderSummary from './OrderSummary';
import PaymentForm from './PaymentForm';

// Utility function to calculate the cart total
const calculateCartTotal = (cart) => {
  return cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
};

const CheckoutPage = () => {
  const { cart } = useCart(); // Access the cart from context
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('');

  // Persist form data in local storage
  useEffect(() => {
    localStorage.setItem('checkoutData', JSON.stringify({ email, phone, address, paymentMethod }));
  }, [email, phone, address, paymentMethod]);

  const handleSubmit = (e, step) => {
    e.preventDefault();
    switch (step) {
      case 'email':
        if (!email || !email.includes('@')) {
          alert('Please enter a valid email address');
          return;
        }
        setCurrentStep(2);
        break;
      case 'phone':
        if (!phone || phone.length < 10) {
          alert('Please enter a valid phone number');
          return;
        }
        setCurrentStep(3);
        break;
      case 'address':
        if (!address.name || !address.city || !address.zip) {
          alert('Please fill in all required address fields');
          return;
        }
        setCurrentStep(4);
        break;
      case 'payment':
        if (!paymentMethod) {
          alert('Please select a payment method');
          return;
        }
        alert(`Payment method selected: ${paymentMethod}`);
        setCurrentStep(5);
        break;
      default:
        break;
    }
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return <LoginForm email={email} setEmail={setEmail} handleSubmit={handleSubmit} />;
      case 2:
        return <PhoneForm phone={phone} setPhone={setPhone} handleSubmit={handleSubmit} />;
      case 3:
        return <AddressForm address={address} setAddress={setAddress} handleSubmit={handleSubmit} />;
      case 4:
        return <OrderSummary cart={cart} calculateTotal={calculateCartTotal} handleSubmit={handleSubmit} />;
      case 5:
        return <PaymentForm paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} handleSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">Checkout</h1>
      <ProgressBar currentStep={currentStep} />
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Steps */}
        <div className="w-full md:w-1/4">
          {['Email', 'Phone Verification', 'Delivery Address', 'Order Summary', 'Payment Options'].map((step, index) => (
            <div
              key={index}
              onClick={() => setCurrentStep(index + 1)} // Allow clicking back to previous steps
              className={`cursor-pointer p-4 border mb-4 rounded-lg ${currentStep >= index + 1 ? 'border-blue-500' : 'border-gray-300'} hover:shadow-lg transition-all`}
            >
              <h2 className="text-lg font-semibold">{index + 1}. {step}</h2>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4">
          {renderFormStep()}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
