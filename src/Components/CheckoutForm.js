import React, { useState } from 'react';
import { useCart } from './CartContext';
import ProgressBar from './ProgressBar';
import LoginForm from './LoginForm';
import PhoneOtpForm from './PhoneOtpForm'; // Import the merged PhoneOtpForm
import AddressForm from './AddressForm';
import OrderSummary from './OrderSummary';
import PaymentForm from './PaymentForm';

const CheckoutPage = () => {
  const { cart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState({ name: '', address: '', city: '', state: '', zip: '' });
  const [paymentMethod, setPaymentMethod] = useState('');

  // Calculate total amount from cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
  };

  // Handle form submissions for each step
  const handleSubmit = (e, step) => {
    e.preventDefault();
    switch (step) {
      case 'email':
        setCurrentStep(2); // Move to phone step after email
        break;
      case 'phone':
        setCurrentStep(3); // Move to OTP verification
        break;
      case 'address':
        setCurrentStep(4); // Move to order summary
        break;
      case 'payment':
        alert(`Payment method selected: ${paymentMethod}`);
        break;
      default:
        break;
    }
  };

  // Handle OTP verified callback and move to the next step
  const handleOtpVerified = () => {
    setCurrentStep(3); // Move to address form after OTP verification
  };

  // Render the correct form based on the current step
  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return <LoginForm email={email} setEmail={setEmail} handleSubmit={(e) => handleSubmit(e, 'email')} />;
      case 2:
        return (
          <PhoneOtpForm
            phone={phone}
            setPhone={setPhone}
            onOtpVerified={handleOtpVerified} // Use the updated callback for OTP verification
          />
        );
      case 3:
        return <AddressForm address={address} setAddress={setAddress} handleSubmit={(e) => handleSubmit(e, 'address')} />;
      case 4:
        return <OrderSummary cart={cart} calculateTotal={calculateTotal} handleSubmit={(e) => handleSubmit(e, 'payment')} />;
      case 5:
        return <PaymentForm paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} handleSubmit={(e) => handleSubmit(e, 'payment')} />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">Checkout</h1>
      <ProgressBar currentStep={currentStep} />
      <div className="flex flex-col md:flex-row gap-6">
        {/* Step Indicator Sidebar */}
        <div className="w-full md:w-1/4">
          {['Email', 'Phone Verification', 'Delivery Address', 'Order Summary', 'Payment Options'].map((step, index) => (
            <div
              key={index}
              className={`p-4 border mb-4 rounded-lg ${currentStep >= index + 1 ? 'border-blue-500' : 'border-gray-300'} hover:shadow-lg transition-all`}
            >
              <h2 className="text-lg font-semibold">{index + 1}. {step}</h2>
            </div>
          ))}
        </div>

        {/* Form Step */}
        <div className="w-full md:w-3/4">
          {renderFormStep()}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
