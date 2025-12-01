import React, { useState } from 'react';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cartItems: CartItem[];
  onCategorySelect: (category: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartItems, onCategorySelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { name: 'Books', category: 'Literature' },
    { name: 'Manga', category: 'Manga' },
    { name: 'Art & Design', category: 'Art & Design' },
    { name: 'Stationery', category: 'Stationery' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-kino-blue text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-white/10 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => onCategorySelect('All')}>
            <div className="border-2 border-white p-1 mr-2">
              <span className="font-bold text-xl tracking-widest">KI</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none tracking-wide">KINOKUNIYA</span>
              <span className="text-[10px] text-gray-300 tracking-widest leading-none font-jp">紀伊國屋書店</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => onCategorySelect(link.category)}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <input 
                type="text" 
                placeholder="Search by title..." 
                className="bg-kino-blue/50 border border-white/30 rounded-full py-1 pl-4 pr-10 text-sm focus:outline-none focus:bg-white/10 focus:border-white transition-all w-48 placeholder-gray-400"
              />
              <Search size={16} className="absolute right-3 top-1.5 text-gray-300" />
            </div>
            
            <button className="relative p-2 hover:bg-white/10 rounded-full transition-colors">
              <ShoppingBag size={24} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-kino-accent rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-kino-blue border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  onCategorySelect(link.category);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
