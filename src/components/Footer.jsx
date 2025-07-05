import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white border-t border-white/10 mt-12 px-4 py-6 md:px-8 backdrop-blur-md shadow-inner">
      <div className="max-w-7xl mx-auto text-center text-sm">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()}{' '}
          <span className="text-[#00ffff] font-semibold">MOVIXXX</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
