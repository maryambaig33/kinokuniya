import React, { useState } from 'react';
import { Menu, Search, ShoppingBag, X, MapPin, User, Globe } from 'lucide-react';
import { CartItem } from '../types';
import { CATEGORIES } from '../constants';

interface NavbarProps {
  cartItems: CartItem[];
  onCategorySelect: (category: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartItems, onCategorySelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = CATEGORIES.filter(c => c !== 'All');

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md font-sans">
      {/* Utility Bar */}
      <div className="bg-kino-blue text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center cursor-pointer hover:text-gray-300"><MapPin size={12} className="mr-1"/> Stores & Events</span>
            <span className="flex items-center cursor-pointer hover:text-gray-300"><User size={12} className="mr-1"/> Membership</span>
            <span className="flex items-center cursor-pointer hover:text-gray-300"><Globe size={12} className="mr-1"/> 日本語 (Japanese)</span>
          </div>
          <div className="flex space-x-4">
             <a href="#" className="hover:text-gray-300">Log In</a>
             <span className="text-gray-500">|</span>
             <a href="#" className="hover:text-gray-300">Contact Us</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-kino-blue hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => onCategorySelect('All')}>
            <div className="bg-kino-blue text-white p-2 mr-3 group-hover:bg-blue-900 transition-colors">
              <span className="font-bold text-2xl tracking-widest block leading-none">KI</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none tracking-wide text-kino-blue">KINOKUNIYA</span>
              <span className="text-[10px] text-gray-500 tracking-[0.2em] leading-none font-jp mt-1">紀伊國屋書店</span>
            </div>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8 relative">
              <input 
                type="text" 
                placeholder="Search by title, author, or keyword..." 
                className="w-full bg-gray-100 border border-gray-200 rounded-sm py-2 pl-4 pr-10 text-sm focus:outline-none focus:bg-white focus:border-kino-blue transition-all placeholder-gray-500"
              />
              <button className="absolute right-0 top-0 h-full px-3 text-gray-500 hover:text-kino-blue">
                <Search size={18} />
              </button>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="hidden md:flex flex-col items-center text-gray-600 hover:text-kino-blue">
               <User size={20} />
               <span className="text-[10px] uppercase font-bold mt-1">Account</span>
            </button>
            <button className="relative flex flex-col items-center text-gray-600 hover:text-kino-blue group">
              <div className="relative">
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-kino-accent rounded-full">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="text-[10px] uppercase font-bold mt-1 hidden md:block">Cart</span>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Category Nav */}
      <div className="hidden md:block border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-center space-x-8 h-12">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => onCategorySelect(link)}
                  className="text-sm font-medium text-gray-600 hover:text-kino-blue hover:border-b-2 hover:border-kino-blue h-full px-1 transition-all uppercase tracking-wide"
                >
                  {link}
                </button>
              ))}
            </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute w-full left-0 shadow-lg">
          <div className="px-4 py-2">
             <div className="relative mb-4 mt-2">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full bg-gray-100 border border-gray-200 rounded-sm py-2 pl-4 pr-10 text-sm"
                />
                <Search size={16} className="absolute right-3 top-2.5 text-gray-400" />
            </div>
          </div>
          <div className="px-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => {
                  onCategorySelect(link);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-3 border-b border-gray-100 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-kino-blue"
              >
                {link}
              </button>
            ))}
            <div className="pt-4 px-3 text-sm text-gray-500 space-y-3">
              <div className="flex items-center"><MapPin size={16} className="mr-2"/> Stores</div>
              <div className="flex items-center"><User size={16} className="mr-2"/> Membership</div>
              <div className="flex items-center"><Globe size={16} className="mr-2"/> 日本語</div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};