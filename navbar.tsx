import { useState } from 'react';
import { FaSearch, FaFilter, FaBell, FaUserCircle } from 'react-icons/fa';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="flex items-center justify-between bg-gray-800 p-4 text-white">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <div className="text-2xl font-bold">ShopLogo</div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for products"
            className="px-4 py-2 rounded-full bg-gray-700 text-white w-80"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Filter Icon */}
        <div className="ml-4 cursor-pointer">
          <FaFilter className="text-xl" />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Profile */}
        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
          <FaUserCircle className="text-white text-2xl" />
        </div>

        {/* Notification Bell */}
        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
          <FaBell className="text-white text-xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
