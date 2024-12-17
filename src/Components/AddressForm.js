import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddressForm = () => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform address validation here (optional)
    if (!address || !city || !state || !zip) {
      setMessage("Please fill all fields.");
      return;
    }

    setMessage("Address added successfully.");
    setTimeout(() => {
      navigate("/order-summary"); // Navigate to order summary or checkout confirmation
    }, 1000);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", textAlign: "center", border: "1px solid #ddd", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <h2 style={{ color: "#4a90e2", marginBottom: "20px" }}>Enter Your Address</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{ marginBottom: "10px", width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ marginBottom: "10px", width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <input
          type="text"
          placeholder="Enter State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          style={{ marginBottom: "10px", width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <input
          type="text"
          placeholder="Enter Zip Code"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          style={{ marginBottom: "10px", width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <button
          type="submit"
          style={{ padding: "10px 20px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
        >
          Submit Address
        </button>
      </form>
      {message && <p style={{ marginTop: "10px", color: "#333" }}>{message}</p>}
    </div>
  );
};

export default AddressForm;
