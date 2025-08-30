import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JoinUs from './pages/JoinUs';
import DonateUS from './pages/DonateUs';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="join-us" element={<JoinUs />} />
          <Route path="donate-us" element={<DonateUS />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
