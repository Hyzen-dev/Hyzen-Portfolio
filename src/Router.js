// Router.js
import './scss/main.scss';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Visitors/Home.page';
import Contact from './pages/Visitors/Contact.page';
import Services from './pages/Visitors/Services.page';
import Realisations from './pages/Visitors/Realisations.page';
import Navbar from './components/Navbar.component';
import polygon from './assets/svg/polygon.svg';
import Footer from './components/Footer.component';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export const toastNotification = (type, message) => {
  return toast[type](message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
}

export const updateToastNotification = (id, type, message) => {
  return toast.update(id, {
    render: message,
    type: type,
    isLoading: false,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
  })
}

function Router() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  return (
    <div className='page'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <div className="decoration">
        <div className="decoration-top">
          <img src={polygon} alt="" />
          <img src={polygon} alt="" />
        </div>
        <div className="decoration-bottom">
          <img src={polygon} alt="" />
          <img src={polygon} alt="" />
        </div>
      </div>
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Routes location={location}>
        <Route path="/" element={<Home setIsNavOpen={setIsNavOpen} />} />
        <Route path="/services" element={<Services setIsNavOpen={setIsNavOpen} />} />
        <Route path="/projects" element={<Realisations setIsNavOpen={setIsNavOpen} />} />
        <Route path="/contact" element={<Contact setIsNavOpen={setIsNavOpen} />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Router;
