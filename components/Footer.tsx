import React from 'react';
import { Instagram, Twitter, Facebook, Youtube, Mail, ChevronRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8 text-gray-600 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="flex flex-col items-start">
               <span className="font-bold text-xl text-kino-blue tracking-wide font-serif">KINOKUNIYA</span>
               <span className="text-xs text-gray-400 font-jp tracking-[0.2em] mt-1">紀伊國屋書店</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              Kinokuniya USA offers the largest selection of Japanese books, Manga, and stationery in the United States. We serve as a bridge between Japanese culture and the world.
            </p>
            <div className="flex space-x-3">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-sm text-gray-400 hover:bg-kino-blue hover:text-white hover:border-kino-blue transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2: Information */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-xs uppercase tracking-widest border-b border-gray-100 pb-2">Information</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-kino-blue transition-colors flex items-center group"><ChevronRight size={12} className="mr-2 text-gray-300 group-hover:text-kino-blue"/>About Us</a></li>
              <li><a href="#" className="hover:text-kino-blue transition-colors flex items-center group"><ChevronRight size={12} className="mr-2 text-gray-300 group-hover:text-kino-blue"/>Store Locations</a></li>
              <li><a href="#" className="hover:text-kino-blue transition-colors flex items-center group"><ChevronRight size={12} className="mr-2 text-gray-300 group-hover:text-kino-blue"/>Careers</a></li>
              <li><a href="#" className="hover:text-kino-blue transition-colors flex items-center group"><ChevronRight size={12} className="mr-2 text-gray-300 group-hover:text-kino-blue"/>Contact Us</a></li>
              <li><a href="#" className="hover:text-kino-blue transition-colors flex items-center group"><ChevronRight size={12} className="mr-2 text-gray-300 group-hover:text-kino-blue"/>Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 3: Shopping */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-xs uppercase tracking-widest border-b border-gray-100 pb-2">Shopping</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-kino-blue transition-colors flex items-center group"><ChevronRight size={12} className="mr-2 text-gray-300 group-hover:text-kino-blue"/>Membership</a></li>
              <li><a href="#" className="hover:text-kino-blue transition-colors flex items-center group"><ChevronRight size={12} className="mr-2 text-gray-300 group-hover:text-kino-blue"/>Gift Cards</a></li>
              <li><a href="#" className="hover:text-kino-blue transition-colors flex items-center group"><ChevronRight size={12} className="mr-2 text-gray-300 group-hover:text-kino-blue"/>Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-kino-blue transition-colors flex items-center group"><ChevronRight size={12} className="mr-2 text-gray-300 group-hover:text-kino-blue"/>FAQ</a></li>
              <li><a href="#" className="hover:text-kino-blue transition-colors flex items-center group"><ChevronRight size={12} className="mr-2 text-gray-300 group-hover:text-kino-blue"/>Advanced Search</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
             <h4 className="font-bold text-gray-900 mb-2 text-sm">Newsletter</h4>
             <p className="text-xs text-gray-500 mb-4">Subscribe to receive updates on new arrivals and special events.</p>
             <div className="flex flex-col space-y-2">
               <input type="email" placeholder="Email Address" className="bg-white border border-gray-300 px-3 py-2 text-xs w-full focus:outline-none focus:border-kino-blue" />
               <button className="bg-gray-800 text-white px-4 py-2 text-xs font-bold hover:bg-kino-blue transition-colors uppercase tracking-wide">
                 Subscribe
               </button>
             </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Kinokuniya Book Stores of America Co., Ltd.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-600">Terms of Use</a>
            <a href="#" className="hover:text-gray-600">Copyright</a>
            <a href="#" className="hover:text-gray-600">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};