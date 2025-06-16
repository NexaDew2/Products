import React from 'react';
import products from '../data/products';
import {
  ArrowDownTrayIcon,
} from '@heroicons/react/24/solid';

const ProductList = () => {
  return (
    <div className="p-6 mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex-grow">
              <h2 className="text-lg dark:text-gray-300 font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
              <div className="flex flex-col gap-2">
                {['Mac', 'Windows', 'Android'].map((platform) => (
                  <button
                    key={platform}
                    className="flex items-center gap-2 bg-yellow-200 hover:bg-yellow-400 text-black px-4 py-2 rounded text-sm"
                  >
                    <ArrowDownTrayIcon className="w-4 h-4" />
                    Install on {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
