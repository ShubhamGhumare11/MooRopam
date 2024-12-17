import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './Components/CartContext';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop'; // Import ScrollToTop component
import AddressForm from './Components/AddressForm';

// Lazy load components
const Home = React.lazy(() => import('./Components/Home'));
const About = React.lazy(() => import('./Components/About'));
const Numerology = React.lazy(() => import('./Components/Numerology'));
const Prediction = React.lazy(() => import('./Components/Prediction'));
const Services = React.lazy(() => import('./Components/Services'));
const Videos = React.lazy(() => import('./Components/Videos'));
const Blogs = React.lazy(() => import('./Components/Blogs'));
const Contact = React.lazy(() => import('./Components/Contact'));
const PrivacyPolicy = React.lazy(() => import('./Components/PrivacyPolicy'));
const TermsConditions = React.lazy(() => import('./Components/TermsConditions'));
const SubCardPage = React.lazy(() => import('./Components/SubCardPage'));
const PredictSubCard = React.lazy(() => import('./Components/PredictSubCard'));
const Products = React.lazy(() => import('./Components/Products'));
const CheckoutForm = React.lazy(() => import('./Components/CheckoutForm'));
const OrderReceived = React.lazy(() => import('./Components/OrderReceived'));
const Cart = React.lazy(() => import('./Components/Cart'));
const NotFound = React.lazy(() => import('./Components/NotFound')); // Lazy load NotFound
const PhoneForm = React.lazy(() => import('./Components/PhoneForm'));  // Add PhoneForm lazy load

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <ScrollToTop /> {/* Ensures the page scrolls to the top on navigation */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/numerology" element={<Numerology />} />
            <Route path="/prediction" element={<Prediction />} />
            <Route path="/prediction/:id" element={<PredictSubCard />} />
            <Route path="/services" element={<Services />} />
            <Route path="/subcard/:id" element={<SubCardPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="/order-received" element={<OrderReceived />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/address" element={<AddressForm />} />  Add PhoneForm route */}

            {/* <Route path="/phone-form" element={<PhoneForm />} />  Add PhoneForm route */}
            <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
