import React from 'react';
import { Instagram, Twitter, Facebook, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col mb-4">
               <span className="font-bold text-xl text-kino-blue">KINOKUNIYA</span>
               <span className="text-xs text-gray-500 font-jp">紀伊國屋書店</span>
            </div>
            <p className="text-gray-500 text-sm mb-4">
              Your gateway to Japanese culture, literature, and imagination since 1927.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-kino-blue"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-kino-blue"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-kino-blue"><Facebook size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-kino-blue">Books (Japanese)</a></li>
              <li><a href="#" className="hover:text-kino-blue">Books (English)</a></li>
              <li><a href="#" className="hover:text-kino-blue">Manga</a></li>
              <li><a href="#" className="hover:text-kino-blue">Magazines</a></li>
              <li><a href="#" className="hover:text-kino-blue">Stationery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-kino-blue">Store Locations</a></li>
              <li><a href="#" className="hover:text-kino-blue">Membership Card</a></li>
              <li><a href="#" className="hover:text-kino-blue">Gift Cards</a></li>
              <li><a href="#" className="hover:text-kino-blue">Careers</a></li>
              <li><a href="#" className="hover:text-kino-blue">Contact Us</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-gray-900 mb-4">Store Locations</h4>
             <ul className="space-y-3 text-sm text-gray-600">
               <li className="flex items-start">
                 <MapPin size={16} className="mr-2 mt-0.5 text-kino-accent" />
                 <span>New York Main Store<br/>1073 Avenue of the Americas</span>
               </li>
               <li className="flex items-start">
                 <MapPin size={16} className="mr-2 mt-0.5 text-kino-accent" />
                 <span>San Francisco<br/>1581 Webster St</span>
               </li>
             </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2024 Kinokuniya Book Stores of America Co., Ltd.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
