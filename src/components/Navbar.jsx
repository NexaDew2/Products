import React from 'react';
import logo from '../assets/logo.png'

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-black text-white">
      <div className='flex'>
      <img src={logo} style={{width:50}} />
      <h1 className="text-xl font-semibold mt-4">NexaDew</h1>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200"
      >
        Switch to {darkMode ? 'Day' : 'Night'} Mode
      </button>
    </nav>
  );
};

export default Navbar;
