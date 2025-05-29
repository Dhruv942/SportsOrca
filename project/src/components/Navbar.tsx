import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingBasket as Basketball } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-indigo-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink 
              to="/" 
              className="flex items-center space-x-3"
            >
              <Basketball size={28} className="text-orange-500" />
              <span className="text-xl font-bold">NBA Tracker</span>
            </NavLink>
          </div>
          <div className="flex items-center space-x-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-indigo-800 
                ${isActive ? 'bg-indigo-800' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/matches" 
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-indigo-800 
                ${isActive ? 'bg-indigo-800' : ''}`
              }
            >
              Matches
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;