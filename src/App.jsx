import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`flex flex-col h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Fixed Header */}
      <header className="fixed top-0 w-full z-10">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>

      {/* Scrollable Main Content */}
      <main className="flex-1 overflow-y-auto mt-16 mb-20 px-4 sm:px-6 lg:px-8">
        <ProductList />
      </main>

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 w-full z-10">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
