import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PhoneForm = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // Step 1: Enter mobile, Step 2: Verify OTP
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60); // OTP expiry timer
  const [isOtpExpired, setIsOtpExpired] = useState(false);
  const [retryCount, setRetryCount] = useState(0); // OTP retry limit
  const navigate = useNavigate();

  useEffect(() => {
    if (step === 2 && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setIsOtpExpired(true);
    }
  }, [step, timer]);

  const handleSendOtp = async () => {
    if (mobile.length !== 10 || isNaN(mobile)) {
      setMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/send-otp", { mobile });
      if (response.data.success) {
        setMessage("OTP sent to your mobile number.");
        setStep(2); // Move to OTP verification step
      }
    } catch (error) {
      setMessage("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (retryCount >= 3) {
      setMessage("You have reached the maximum OTP verification attempts.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/verify-otp", { otp });
      if (response.data.success) {
        setMessage("OTP verified successfully.");
      } else {
        setMessage("Invalid OTP. Please try again.");
        setRetryCount(retryCount + 1); // Increase retry count
      }
    } catch (error) {
      setMessage("Error verifying OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = () => {
    setIsOtpExpired(false);
    setTimer(60); // Reset timer
    setMessage("");
    handleSendOtp();
  };

  const handleContinue = () => {
    navigate("/address"); // Navigate to the AddressForm page
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ color: "#4a90e2", marginBottom: "20px" }}>OTP Verification</h2>
      {loading && <div>Loading...</div>}
      
      {step === 1 && (
        <>
          <input
            type="text"
            placeholder="Enter mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            style={{
              marginBottom: "10px",
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={handleSendOtp}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4a90e2",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Send OTP
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={{
              marginBottom: "10px",
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={handleVerifyOtp}
            style={{
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Verify OTP
          </button>

          {isOtpExpired ? (
            <button
              onClick={handleResendOtp}
              style={{
                marginTop: "10px",
                padding: "8px 16px",
                backgroundColor: "#ffc107",
                color: "black",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Resend OTP
            </button>
          ) : (
            <p>OTP expires in {timer} seconds</p>
          )}
        </>
      )}

      {message && <p style={{ marginTop: "10px", color: "#333" }}>{message}</p>}

      {message === "OTP verified successfully." && (
        <button
          onClick={handleContinue}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#ffc107",
            color: "#333",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Continue
        </button>
      )}
    </div>
  );
};

export default PhoneForm;
