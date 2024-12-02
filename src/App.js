import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Numerology from './Components/Numerology';
import Prediction from './Components/Prediction';
import Services from './Components/Services';
import Videos from './Components/Videos';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsConditions from './Components/TermsConditions';
import SubCardPage from './Components/SubCardPage';
import PredictSubCard from './Components/PredictSubCard';
import Products from './Components/Products';
import Mulank1 from './Mulank/Mulank1';
import Mulank2 from './Mulank/Mulank2';
import Mulank3 from './Mulank/Mulank3';
import Mulank4 from './Mulank/Mulank4';
import Mulank5 from './Mulank/Mulank5';
import Mulank6 from './Mulank/Mulank6';
import Mulank7 from './Mulank/Mulank7';
import Mulank8 from './Mulank/Mulank8';
import Mulank9 from './Mulank/Mulank9';
import SubUsdCard from './Components/SubUsdCard';
import UsdService from './Components/UsdService';
import CheckoutForm from './Components/CheckoutForm';
import OrderReceived from './Components/OrderReceived';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/numerology" element={<Numerology />} />
        <Route path="/prediction" element={<Prediction />} />
        <Route path="/prediction/:id" element={<PredictSubCard />} />
        <Route path="/services" element={<Services />} />
        <Route path="/subcard/:id" element={<SubCardPage />} />
        <Route path="usdservice" element={<UsdService />} />
        <Route path="/usdservices/:id" element={<SubUsdCard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termscondition" element={<TermsConditions />} />
        <Route path="/mulank1" element={<Mulank1 />} />
        <Route path="/mulank2" element={<Mulank2 />} />
        <Route path="/mulank3" element={<Mulank3 />} />
        <Route path="/mulank4" element={<Mulank4 />} />
        <Route path="/mulank5" element={<Mulank5 />} />
        <Route path="/mulank6" element={<Mulank6 />} />
        <Route path="/mulank7" element={<Mulank7 />} />
        <Route path="/mulank8" element={<Mulank8 />} />
        <Route path="/mulank9" element={<Mulank9 />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/orderreceived" element={<OrderReceived />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
