import React, { useState } from 'react';
import { Menu, Search, ShoppingBag, X, MapPin, User, Globe, ChevronDown } from 'lucide-react';
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
    <nav className="sticky top-0 z-50 font-sans shadow-md bg-white">
      {/* 1. Top Utility Bar - Gray Background */}
      <div className="bg-gray-100 text-gray-600 text-[11px] py-1.5 px-4 hidden md:block border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center cursor-pointer hover:text-kino-blue transition-colors">
              <MapPin size={12} className="mr-1 text-gray-500"/> Store Locations & Events
            </span>
            <span className="flex items-center cursor-pointer hover:text-kino-blue transition-colors">
              <User size={12} className="mr-1 text-gray-500"/> Membership Card
            </span>
            <span className="flex items-center cursor-pointer hover:text-kino-blue transition-colors">
              <Globe size={12} className="mr-1 text-gray-500"/> 日本語 (Japanese)
            </span>
          </div>
          <div className="flex space-x-4">
             <a href="#" className="hover:text-kino-blue transition-colors">Log In</a>
             <span className="text-gray-300">|</span>
             <a href="#" className="hover:text-kino-blue transition-colors">Contact Us</a>
          </div>
        </div>
      </div>

      {/* 2. Main Header - Logo & Search */}
      <div className="bg-white py-4 md:py-6 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 -ml-2 text-kino-blue focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => onCategorySelect('All')}>
              <div className="bg-kino-blue text-white px-3 py-2 mr-3 group-hover:bg-blue-900 transition-colors hidden sm:block">
                <span className="font-bold text-2xl tracking-widest block leading-none font-serif">K</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-bold text-2xl leading-none tracking-tight text-kino-blue font-serif">KINOKUNIYA</span>
                <span className="text-[11px] text-gray-500 tracking-[0.3em] leading-none font-jp mt-1">紀伊國屋書店</span>
              </div>
            </div>

            {/* Desktop Search */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
                <div className="flex w-full">
                  <div className="relative flex-1">
                    <input 
                      type="text" 
                      placeholder="Search by Title, Author, Keyword or ISBN" 
                      className="w-full bg-white border border-r-0 border-gray-300 py-2.5 pl-4 pr-4 text-sm focus:outline-none focus:border-kino-blue transition-colors placeholder-gray-400 rounded-l-sm"
                    />
                  </div>
                  <button className="bg-kino-blue text-white px-6 py-2 rounded-r-sm hover:bg-blue-900 transition-colors">
                    <Search size={18} />
                  </button>
                </div>
            </div>

            {/* Cart & Account Icons */}
            <div className="flex items-center space-x-6">
              <button className="hidden md:flex flex-col items-center text-gray-500 hover:text-kino-blue transition-colors group">
                 <User size={24} strokeWidth={1.5} />
                 <span className="text-[10px] uppercase font-bold mt-1 group-hover:underline">Account</span>
              </button>
              <button className="flex flex-col items-center text-gray-500 hover:text-kino-blue transition-colors group relative">
                <div className="relative">
                  <ShoppingBag size={24} strokeWidth={1.5} />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-2 inline-flex items-center justify-center min-w-[18px] h-[18px] text-[10px] font-bold text-white bg-kino-accent rounded-full px-1 border-2 border-white">
                      {totalItems}
                    </span>
                  )}
                </div>
                <span className="text-[10px] uppercase font-bold mt-1 hidden md:block group-hover:underline">Cart</span>
              </button>
            </div>
          </div>
          
          {/* Mobile Search (visible only on small screens) */}
          <div className="mt-4 md:hidden relative">
             <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-gray-50 border border-gray-300 rounded-sm py-2 pl-4 pr-10 text-sm focus:border-kino-blue focus:outline-none"
              />
              <Search size={16} className="absolute right-3 top-2.5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* 3. Main Navigation Bar - Blue Background (Official Style) */}
      <div className="hidden md:block bg-kino-blue text-white shadow-inner relative z-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-center space-x-8 h-12">
              <div className="flex items-center font-bold text-sm tracking-wide cursor-pointer border-r border-blue-900 pr-6 h-full hover:bg-blue-900 transition-colors">
                <Menu size={16} className="mr-2"/> DEPARTMENTS
              </div>
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => onCategorySelect(link)}
                  className="text-sm font-medium text-blue-100 hover:text-white h-full px-2 transition-colors uppercase tracking-wide flex items-center relative group"
                >
                  {link}
                  {/* Underline effect */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </button>
              ))}
            </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute w-full left-0 shadow-xl z-50 h-screen overflow-y-auto pb-20">
          <div className="flex flex-col divide-y divide-gray-100">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => {
                  onCategorySelect(link);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-5 py-4 text-base font-bold text-gray-800 hover:bg-gray-50 hover:text-kino-blue flex justify-between items-center"
              >
                {link}
                <ChevronDown size={16} className="-rotate-90 text-gray-300"/>
              </button>
            ))}
            <div className="bg-gray-50 p-5 space-y-4">
              <div className="font-bold text-xs text-gray-400 uppercase tracking-wider mb-2">My Account</div>
              <div className="flex items-center text-sm text-gray-600"><User size={16} className="mr-3"/> Sign In / Register</div>
              <div className="flex items-center text-sm text-gray-600"><MapPin size={16} className="mr-3"/> Store Locations</div>
              <div className="flex items-center text-sm text-gray-600"><Globe size={16} className="mr-3"/> 日本語 (Japanese)</div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};