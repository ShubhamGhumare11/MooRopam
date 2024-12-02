import axios from "axios";

export const sendEmailWithAttachment = async (htmlEmailFormat) => {
  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: process.env.REACT_APP_BREVO_SENDER_NAME,
          email: process.env.REACT_APP_BREVO_SENDER_EMAIL,
        },
        to: [
          {
            name: process.env.REACT_APP_BREVO_RECEIVER_NAME,
            email: process.env.REACT_APP_BREVO_RECEIVER_EMAIL,
          },
        ],
        subject: "New Interested User for Numerology Book",
        htmlContent: htmlEmailFormat,
      },
      {
        headers: {
          "api-key": process.env.REACT_APP_BREVO_API_KEY,
          "content-type": "application/json",
        },
      }
    );
    alert("Registration Successful!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export const sendEmailWithAttachmentforOrderConfirm = async ({ htmlEmailFormat, userName, userEmail }) => {
  console.log(userName, userEmail, "DEBUG @313 ::::::::::::::sendEmailWithAttachmentforOrderConfirm  userName , userEmail")
  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: process.env.REACT_APP_BREVO_SENDER_NAME,
          email: process.env.REACT_APP_BREVO_SENDER_EMAIL,
        },
        to: [
          {
            name: userName,
            email: userEmail,
          },
        ],
        subject: `Thank you ${userName}! Your order has been received`,
        htmlContent: htmlEmailFormat,
      },
      {
        headers: {
          "api-key": process.env.REACT_APP_BREVO_API_KEY,
          "content-type": "application/json",
        },
      }
    );
    alert("Thank you! Your order has been received!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export const sendEmailWithAttachmentforAdminOrderConfirm = async ({ htmlEmailFormat }) => {
  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: process.env.REACT_APP_BREVO_SENDER_NAME,
          email: process.env.REACT_APP_BREVO_SENDER_EMAIL,
        },
        to: [
          {
            name: process.env.REACT_APP_BREVO_RECEIVER_NAME,
            email: process.env.REACT_APP_BREVO_RECEIVER_EMAIL,
          },
        ],
        subject: `Great news! Your new service order has been received.`,
        htmlContent: htmlEmailFormat,
      },
      {
        headers: {
          "api-key": process.env.REACT_APP_BREVO_API_KEY,
          "content-type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export const newInterestedUserForNumerologyBookEmailFormat = ({
  name,
  email,
}) => {
  return ` <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interested User Notification</title>
  <style>
    /* Base Styles */
    body, p, h1, h2 {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f4f4f4;
      color: #333;
      line-height: 1.6;
    }
    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      color: #E5890A;
      border-bottom: 2px solid #E5890A;
      padding-bottom: 15px;
      margin-bottom: 20px;
    }
    h1 {
      font-size: 22px;
      margin-bottom: 20px;
      text-align: center;
      color: #333;
    }
    p {
      font-size: 16px;
      margin-bottom: 15px;
    }
    .user-info {
      padding: 15px;
      background-color: #fafafa;
      border-left: 5px solid #E5890A;
      margin-bottom: 20px;
    }
    .user-info p {
      margin: 5px 0;
    }
    .highlight {
      font-weight: bold;
      color: #E5890A;
    }
    .footer {
      text-align: center;
      font-size: 14px;
      color: #888;
      border-top: 1px solid #ddd;
      padding-top: 15px;
      margin-top: 20px;
    }
    a {
      color: #E5890A;
      text-decoration: none;
    }

    /* Responsive Styles */
    @media only screen and (max-width: 768px) {
      .email-container {
        max-width: 90%;
        padding: 15px;
      }
      h1 {
        font-size: 20px;
      }
      p {
        font-size: 15px;
      }
    }

    @media only screen and (max-width: 480px) {
      .email-container {
        padding: 10px;
      }
      .header {
        font-size: 20px;
      }
      h1 {
        font-size: 18px;
      }
      p {
        font-size: 14px;
      }
      .user-info {
        padding: 10px;
        font-size: 14px;
      }
    }

    @media only screen and (max-width: 320px) {
      .email-container {
        padding: 5px;
      }
      .header {
        font-size: 18px;
      }
      h1 {
        font-size: 16px;
      }
      p {
        font-size: 13px;
      }
      .user-info {
        padding: 8px;
        font-size: 13px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      New Interested User for Numerology Book
    </div>

    <h1>Interested User Details</h1>
    <p>Dear Team,</p>
    <p>A new user has expressed interest in our upcoming book, <span class="highlight">"Unlock the Secrets of Numerology for Birth No. 1."</span></p>
    
    <p>Below are the user’s details:</p>

    <div class="user-info">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong>  ${email}</p>
    </div>

    <p>Please reach out to this user with further updates and special offers regarding the book launch.</p>

    <div class="footer">
      <p>Auspicious Numerology – Study of the Symbolism of Numbers</p>
      <p>For queries, contact us at <a href="mailto:support@auspiciousnumerology.com">support@auspiciousnumerology.com</a></p>
    </div>
  </div>
</body>
</html>`;
};

export const contactUsFormat = ({ name, email, phone, message }) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Us Form Submission</title>
  <style>
    /* Base Styles */
    body, p, h1, h2 {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f4f4f4;
      color: #333;
      line-height: 1.6;
    }
    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      padding: 25px;
      border-radius: 12px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      font-size: 26px;
      font-weight: bold;
      color: #E5890A;
      border-bottom: 3px solid #E5890A;
      padding-bottom: 15px;
      margin-bottom: 25px;
    }
    h1 {
      font-size: 24px;
      margin-bottom: 25px;
      text-align: center;
      color: #333;
    }
    p {
      font-size: 16px;
      margin-bottom: 15px;
      color: #555;
    }
    .user-info {
      padding: 20px;
      background-color: #f9f9f9;
      border-left: 5px solid #E5890A;
      border-radius: 8px;
      margin-bottom: 25px;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
    }
    .user-info p {
      margin: 8px 0;
    }
    .highlight {
      font-weight: bold;
      color: #E5890A;
    }
    .footer {
      text-align: center;
      font-size: 14px;
      color: #888;
      border-top: 1px solid #ddd;
      padding-top: 20px;
      margin-top: 30px;
    }
    a {
      color: #E5890A;
      text-decoration: none;
    }
    
    /* Custom styles for improved readability */
    .user-info strong {
      color: #333;
    }

    /* Responsive Styles */
    @media only screen and (max-width: 768px) {
      .email-container {
        max-width: 90%;
        padding: 20px;
      }
      h1 {
        font-size: 22px;
      }
      p {
        font-size: 15px;
      }
    }

    @media only screen and (max-width: 480px) {
      .email-container {
        padding: 15px;
      }
      .header {
        font-size: 22px;
      }
      h1 {
        font-size: 20px;
      }
      p {
        font-size: 14px;
      }
      .user-info {
        padding: 15px;
        font-size: 14px;
      }
    }

    @media only screen and (max-width: 320px) {
      .email-container {
        padding: 10px;
      }
      .header {
        font-size: 20px;
      }
      h1 {
        font-size: 18px;
      }
      p {
        font-size: 13px;
      }
      .user-info {
        padding: 12px;
        font-size: 13px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      New Contact Us Form Submission
    </div>

    <h1>Contact Form Details</h1>
    <p>Dear Team,</p>
    <p>We have received a new inquiry through the Contact Us form. Below are the details:</p>

    <div class="user-info">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    </div>

    <p>Please respond to the user's inquiry at your earliest convenience.</p>

    <div class="footer">
      <p>Auspicious Numerology – Study of the Symbolism of Numbers</p>
      <p>For queries, contact us at <a href="mailto:support@auspiciousnumerology.com">support@auspiciousnumerology.com</a></p>
    </div>
  </div>
</body>
</html>
`;
};

export const orderConfirmForUserEmailTemplate = ({
  invoiceId,
  date,
  price,
  firstName,
  lastName,
  phone,
  address,
  city,
  state,
  country,
  pincode,
  productName,
}) => {

  console.log(invoiceId,
    date,
    price,
    firstName,
    lastName,
    phone,
    address,
    city,
    state,
    country,
    pincode,
    productName, "DEBUG@313 ::::::::::::: orderConfirmForUserEmailTemplate :data ")
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        font-family: 'Times New Roman', serif;
        background-color: #f3f4f6;
        padding: 20px;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 20px;
        border: 2px solid #fbbf24;
        border-radius: 8px;
      }
      h1 {
        color: #fbbf24;
        font-size: 24px;
      }
      h2, h3 {
        color: #374151;
        font-size: 20px;
      }
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th, td {
        padding: 10px;
        border-bottom: 1px solid #e5e7eb;
        text-align: left;
      }
      .header-section {
        border-bottom: 2px solid #fbbf24;
        padding-bottom: 15px;
        margin-bottom: 20px;
      }
      .info {
        text-align: right;
        color: #6b7280;
        font-size: 12px;
      }
      .info p {
        margin: 5px 0;
      }
      .highlight {
        background-color: #fbbf24;
        padding: 8px;
        border-radius: 4px;
        font-size: 16px;
        color: #1f2937;
      }
      .total {
        text-align: right;
        font-weight: bold;
        font-size: 18px;
        margin-top: 10px;
      }
      footer {
        text-align: center;
        color: #9ca3af;
        font-size: 12px;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <!-- Header Section -->
      <div class="header-section">
        <h1>Order Received</h1>
        <div class="info">
          <p>Auspicious Numerology</p>
          <p>Sumiit Madhukar Messhram</p>
          <p>Email: <a href="mailto:sumiit@auspiciousnumerology.com">sumiit@auspiciousnumerology.com</a></p>
          <p>Phone: +918390005111</p>
        </div>
      </div>

      <!-- Thank You Message -->
      <div>
        <h2>Thank you ${firstName}! Your order has been received.</h2>
      </div>

      <!-- Order Details -->
      <div>
        <h3 class="highlight">Order Details</h3>
        <table>
          <tr>
            <th>Order Number</th>
            <td> ${invoiceId}</td>
          </tr>
          <tr>
            <th>Date</th>
            <td>${date}</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>${price}</td>
          </tr>
          <tr>
            <th>Payment Method</th>
            <td>Direct Bank Transfer</td>
          </tr>
        </table>
      </div>

      <!-- Billing Address -->
      <div>
        <h3 class="highlight">Billing Address</h3>
        <table>
          <tr>
            <th>First Name</th>
            <td>${firstName}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>${lastName}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>${phone}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>${address}</td>
          </tr>
          <tr>
            <th>City</th>
            <td>${city}</td>
          </tr>
          <tr>
            <th>State</th>
            <td>${state}</td>
          </tr>
          <tr>
            <th>Country</th>
            <td>${country}</td>
          </tr>
          <tr>
            <th>Pincode</th>
            <td>${pincode}</td>
          </tr>
        </table>
      </div>

      <!-- Bank Information -->
      <div>
        <h3 class="highlight">Our Bank Details</h3>
        <table>
          <tr>
            <th>Account Name</th>
            <td>Sumiit Madhukar Messhram</td>
          </tr>
          <tr>
            <th>Bank</th>
            <td>AXIS BANK, WARDHA BRANCH</td>
          </tr>
          <tr>
            <th>Account Number</th>
            <td>915010033347967</td>
          </tr>
          <tr>
            <th>IFSC</th>
            <td>UTIB0000808</td>
          </tr>
          <tr>
            <th>BIC</th>
            <td>AXISINBB048</td>
          </tr>
        </table>
      </div>

      <!-- Product Information -->
      <div>
        <h3 class="highlight">Order Summary</h3>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${productName}</td>
              <td>${price}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Total -->
      <div class="total">
        <p>Subtotal: ${price}.00</p>
        <p>Total: ${price}.00</p>
      </div>

      <!-- Footer -->
      <footer>
        <p>If you have any questions, please contact us at <a href="mailto:sumiit@auspiciousnumerology.com">sumiit@auspiciousnumerology.com</a>.</p>
        <p>Thank you for your business!</p>
      </footer>
    </div>
  </body>
</html>
`;
};


export const orderConfirmForAdminEmailTemplate = ({
  invoiceId,
  date,
  price,
  firstName,
  lastName,
  phone,
  address,
  city,
  state,
  country,
  pincode,
  productName,
}) => {

  console.log(invoiceId,
    date,
    price,
    firstName,
    lastName,
    phone,
    address,
    city,
    state,
    country,
    pincode,
    productName, "DEBUG@313 ::::::::::::: orderConfirmForUserEmailTemplate :data ")
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        font-family: 'Times New Roman', serif;
        background-color: #f3f4f6;
        padding: 20px;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 20px;
        border: 2px solid #fbbf24;
        border-radius: 8px;
      }
      h1 {
        color: #fbbf24;
        font-size: 24px;
      }
      h2, h3 {
        color: #374151;
        font-size: 20px;
      }
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th, td {
        padding: 10px;
        border-bottom: 1px solid #e5e7eb;
        text-align: left;
      }
      .header-section {
        border-bottom: 2px solid #fbbf24;
        padding-bottom: 15px;
        margin-bottom: 20px;
      }
      .info {
        text-align: right;
        color: #6b7280;
        font-size: 12px;
      }
      .info p {
        margin: 5px 0;
      }
      .highlight {
        background-color: #fbbf24;
        padding: 8px;
        border-radius: 4px;
        font-size: 16px;
        color: #1f2937;
      }
      .total {
        text-align: right;
        font-weight: bold;
        font-size: 18px;
        margin-top: 10px;
      }
      footer {
        text-align: center;
        color: #9ca3af;
        font-size: 12px;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <!-- Header Section -->
      <div class="header-section">
        <h1>Order Received</h1>
        <div class="info">
          <p>Auspicious Numerology</p>
          <p>Sumiit Madhukar Messhram</p>
          <p>Email: <a href="mailto:sumiit@auspiciousnumerology.com">sumiit@auspiciousnumerology.com</a></p>
          <p>Phone: +918390005111</p>
        </div>
      </div>

      <!-- Thank You Message -->
      <div>
        <h2> Great news! Your new service order has been received</h2>
      </div>

      <!-- Order Details -->
      <div>
        <h3 class="highlight">Order Details</h3>
        <table>
          <tr>
            <th>Order Number</th>
            <td> ${invoiceId}</td>
          </tr>
          <tr>
            <th>Date</th>
            <td>${date}</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>${price}</td>
          </tr>
          <tr>
            <th>Payment Method</th>
            <td>Direct Bank Transfer</td>
          </tr>
        </table>
      </div>

      <!-- Billing Address -->
      <div>
        <h3 class="highlight">Billing Address</h3>
        <table>
          <tr>
            <th>First Name</th>
            <td>${firstName}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>${lastName}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>${phone}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>${address}</td>
          </tr>
          <tr>
            <th>City</th>
            <td>${city}</td>
          </tr>
          <tr>
            <th>State</th>
            <td>${state}</td>
          </tr>
          <tr>
            <th>Country</th>
            <td>${country}</td>
          </tr>
          <tr>
            <th>Pincode</th>
            <td>${pincode}</td>
          </tr>
        </table>
      </div>

      <!-- Bank Information -->
      <div>
        <h3 class="highlight">Our Bank Details</h3>
        <table>
          <tr>
            <th>Account Name</th>
            <td>Sumiit Madhukar Messhram</td>
          </tr>
          <tr>
            <th>Bank</th>
            <td>AXIS BANK, WARDHA BRANCH</td>
          </tr>
          <tr>
            <th>Account Number</th>
            <td>915010033347967</td>
          </tr>
          <tr>
            <th>IFSC</th>
            <td>UTIB0000808</td>
          </tr>
          <tr>
            <th>BIC</th>
            <td>AXISINBB048</td>
          </tr>
        </table>
      </div>

      <!-- Product Information -->
      <div>
        <h3 class="highlight">Order Summary</h3>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${productName}</td>
              <td>${price}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Total -->
      <div class="total">
        <p>Subtotal: ${price}.00</p>
        <p>Total: ${price}.00</p>
      </div>

      <!-- Footer -->
      <footer>
        <p>If you have any questions, please contact us at <a href="mailto:sumiit@auspiciousnumerology.com">sumiit@auspiciousnumerology.com</a>.</p>
        <p>Thank you for your business!</p>
      </footer>
    </div>
  </body>
</html>
`;
};
