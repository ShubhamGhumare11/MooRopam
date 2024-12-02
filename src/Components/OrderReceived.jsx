import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderReceived = () => {
  const printRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  let { data } = location.state || {};

  console.log(data, "DEBUG@313 :::::::::::::::::::: data")


  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
          <style>
            body { font-family: 'Times New Roman', serif; }
          </style>
        </head>
        <body>
          <div>${printRef.current.innerHTML}</div>
        </body>
      </html>
    `);
    printWindow.document.close();

    printWindow.print();

    setTimeout(() => {
      printWindow.close();
    }, 100);
  };

  return (
    <div className="font-serif bg-gray-100 p-5">
      <div className="bg-white max-w-2xl mx-auto p-10 shadow-lg rounded-lg border border-yellow-500" ref={printRef}>
        {/* Header */}
        <header className="border-b-2 border-yellow-500 pb-5 mb-10">
          <div className="flex justify-between items-center">
            <h1 className="text-yellow-500 text-2xl">Order Received</h1>
            <div className="text-right text-gray-600 text-sm">
              <p>Auspicious Numerology</p>
              <p>Sumiit Madhukar Messhram</p>
              <p>Email: sumiit@auspiciousnumerology.com</p>
              <p>Phone: +918390005111</p>
            </div>
          </div>
        </header>

        {/* Thank You Message */}
        <div className="text-center text-gray-700 my-10">
          <h2 className="text-2xl">Thank you! Your order has been received.</h2>
        </div>

        {/* Order Details */}
        <div className="mb-10">
          <h3 className="bg-yellow-400 p-2 rounded mb-2 text-gray-800 text-lg">Order Details</h3>
          <table className="w-full border-collapse mb-5">
            <tbody>
              <tr>
                <th className="py-3 text-left border-b border-gray-300">Order Number</th>
                <td className="py-3 border-b border-gray-300">{data.invoiceId}</td>
              </tr>
              <tr>
                <th className="py-3 text-left border-b border-gray-300">Date</th>
                <td className="py-3 border-b border-gray-300"> {data.date}</td>
              </tr>
              <tr>
                <th className="py-3 text-left border-b border-gray-300">Total</th>
                <td className="py-3 border-b border-gray-300"> {data.price}</td>
              </tr>
              <tr>
                <th className="py-3 text-left border-b border-gray-300">Payment Method</th>
                <td className="py-3 border-b border-gray-300">Direct Bank Transfer</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Billing Address */}
        <div className="mb-10">
          <h3 className="bg-yellow-400 p-2 rounded mb-2 text-gray-800 text-lg">Billing Address</h3>
          <table className="w-full border-collapse mb-5">
            <tbody>
              <tr>
                <th className="py-3 text-left border-b border-gray-300">First Name</th>
                <td className="py-3 border-b border-gray-300">{data.firstName}</td>
              </tr>
              <tr>
                <th className="py-3 text-left border-b border-gray-300">Last Name</th>
                <td className="py-3 border-b border-gray-300">{data.lastName}</td>
              </tr>
              <tr>
                <th className="py-3 text-left border-b border-gray-300">Phone</th>
                <td className="py-3 border-b border-gray-300">{data.phone}</td>
              </tr>
              <tr>
                <th className="py-3 text-left border-b border-gray-300">Address</th>
                <td className="py-3 border-b border-gray-300"> {data.address}</td>
              </tr>
              <tr>
                <th className="py-3 text-left border-b border-gray-300">City</th>
                <td className="py-3 border-b border-gray-300"> {data.city}</td>
              </tr>
              <tr>
                <th className="py-3 text-left border-b border-gray-300">State</th>
                <td className="py-3 border-b border-gray-300">{data.state}</td>
              </tr>
              <tr>
                <th className="py-3 text-left border-b border-gray-300">Country</th>
                <td className="py-3 border-b border-gray-300">{data.country}</td>
              </tr>
              <tr>
                <th className="py-3 text-left border-b border-gray-300">Pincode</th>
                <td className="py-3 border-b border-gray-300">{data.pincode}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bank Information */}
        <div className="mb-10">
          <h3 className="bg-yellow-400 p-2 rounded mb-2 text-gray-800 text-lg">Our Bank Details</h3>
          <table className="w-full border-collapse mb-5">
            <tbody>
              <tr>
                <th className="py-3 text-left border-b border-gray-300">Account Name</th>
                <td className="py-3 border-b border-gray-300">Sumiit Madhukar Messhram</td>
              </tr>
              <tr>
                <th className="py-3 text-left border-b border-gray-300">Bank</th>
                <td className="py-3 border-b border-gray-300">AXIS BANK, WARDHA BRANCH</td>
              </tr>
              <tr>
                <th className="py-3 text-left border-b border-gray-300">Account Number</th>
                <td className="py-3 border-b border-gray-300">915010033347967</td>
              </tr>
              <tr>
                <th className="py-3 text-left border-b border-gray-300">IFSC</th>
                <td className="py-3 border-b border-gray-300">UTIB0000808</td>
              </tr>
              <tr>
                <th className="py-3 text-left border-b border-gray-300">BIC</th>
                <td className="py-3 border-b border-gray-300">AXISINBB048</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Product Information */}
        <div className="mb-10">
          <h3 className="bg-yellow-400 p-2 rounded mb-2 text-gray-800 text-lg">Order Summary</h3>
          <table className="w-full border-collapse mb-5">
            <thead>
              <tr>
                <th className="py-3 text-left border-b border-gray-300">Product</th>

                <th className="py-3 text-left border-b border-gray-300">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 border-b border-gray-300"> {data.productName}</td>

                <td className="py-3 border-b border-gray-300"> {data.price}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Total */}
        <div className="text-right font-bold text-lg">
          <p>Subtotal:{data.price}.00</p>
          <p>Total: {data.price}.00</p>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-xs mt-10">
          <p>If you have any questions, please contact us at <a href="mailto:sumiit@auspiciousnumerology.com" className="text-blue-500">sumiit@auspiciousnumerology.com</a>.</p>
          <p>Thank you for your business!</p>
        </footer>

        {/* Print Button */}
        <div className="text-center mt-5">
          <button
            onClick={handlePrint}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-4 rounded"
          >
            Print this order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderReceived;
