import Navbar from './Navbar';
import Footer from './Footer';

import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='pt-[120px] container mx-auto px-4 py-8 '>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
