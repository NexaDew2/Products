import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 dark:bg-gray-800 text-white py-6 mt-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <div className="mt-2 sm:mt-0 text-sm">
          <a href="#" className="hover:underline mx-2">Privacy Policy</a>
          <a href="#" className="hover:underline mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
