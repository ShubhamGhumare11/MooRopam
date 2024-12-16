import React, { useState } from "react";
import { useCart } from "../Components/CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CheckoutForm = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [mobile, setMobile] = useState("");

  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    alternateMobile: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
  });

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleSendOtp = async () => {
    if (mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/send-otp", { mobile });
      setIsOtpSent(true);
      alert("OTP sent successfully.");
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP. Please try again.");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post("http://localhost:5000/verify-otp", {
        mobile,
        otp,
      });

      if (response.data.success) {
        setIsVerified(true);
        alert("OTP verified successfully.");
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Failed to verify OTP. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = async () => {
    if (!isVerified) {
      alert("Please complete OTP verification before proceeding.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/razorpay-order", {
        amount: totalPrice,
      });
      const { orderId } = response.data;

      const options = {
        key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay key ID
        amount: totalPrice * 100,
        currency: "INR",
        name: "Your Store Name",
        description: "Test Transaction",
        order_id: orderId,
        handler: function (response) {
          alert("Payment successful!");
          dispatch({ type: "CLEAR_CART" });
          navigate("/thank-you");
        },
        prefill: {
          name: personalDetails.fullName,
          email: personalDetails.email,
          contact: mobile,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Error during payment:", error);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Checkout</h1>

        {/* OTP Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">
            Mobile OTP Verification
          </h2>
          {!isOtpSent ? (
            <>
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg mb-4"
                placeholder="Enter your 10-digit mobile number"
              />
              <button
                onClick={handleSendOtp}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Send OTP
              </button>
            </>
          ) : !isVerified ? (
            <>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg mb-4"
                placeholder="Enter OTP"
              />
              <button
                onClick={handleVerifyOtp}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Verify OTP
              </button>
            </>
          ) : (
            <p className="text-green-500 font-bold">OTP Verified!</p>
          )}
        </div>

        {/* Personal Details */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">
            Personal Information
          </h2>
          {Object.keys(personalDetails).map((key) => (
            <div key={key} className="mb-4">
              <label className="block text-gray-700 capitalize">{key}</label>
              <input
                type="text"
                name={key}
                value={personalDetails[key]}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder={`Enter your ${key}`}
              />
            </div>
          ))}
        </div>

        {/* Payment Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Payment</h2>
          <h3 className="text-lg font-semibold text-gray-800">
            Total: ₹{totalPrice}
          </h3>
          <button
            onClick={handlePayment}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mt-4"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
