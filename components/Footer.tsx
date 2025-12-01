import React from 'react';
import { Instagram, Twitter, Facebook, MapPin, Youtube, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-kino-light border-t border-gray-200 pt-16 pb-8 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Signup */}
        <div className="border-b border-gray-200 pb-12 mb-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
           <div className="mb-6 md:mb-0">
             <h3 className="text-xl font-bold text-kino-blue mb-2">Subscribe to our Newsletter</h3>
             <p className="text-sm text-gray-600">Get the latest news on new releases, events, and promotions.</p>
           </div>
           <div className="flex w-full md:w-auto max-w-md">
             <input type="email" placeholder="Enter your email" className="bg-white border border-gray-300 px-4 py-2 w-full md:w-64 focus:outline-none focus:border-kino-blue" />
             <button className="bg-kino-blue text-white px-6 py-2 font-bold hover:bg-blue-900 transition-colors">Subscribe</button>
           </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2 pr-8">
            <div className="flex flex-col mb-4">
               <span className="font-bold text-2xl text-kino-blue tracking-wide">KINOKUNIYA</span>
               <span className="text-sm text-gray-500 font-jp tracking-widest mt-1">紀伊國屋書店</span>
            </div>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Founded in 1927 in Tokyo, Kinokuniya USA offers a wide variety of books, magazines, and stationery from Japan. We are proud to bring the rich culture of Japan to the US.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-kino-blue hover:text-white transition-colors"><Instagram size={16} /></a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-kino-blue hover:text-white transition-colors"><Twitter size={16} /></a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-kino-blue hover:text-white transition-colors"><Facebook size={16} /></a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-kino-blue hover:text-white transition-colors"><Youtube size={16} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-wider">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-kino-blue">Books (Japanese)</a></li>
              <li><a href="#" className="hover:text-kino-blue">Books (English)</a></li>
              <li><a href="#" className="hover:text-kino-blue">Manga</a></li>
              <li><a href="#" className="hover:text-kino-blue">Magazines</a></li>
              <li><a href="#" className="hover:text-kino-blue">Stationery</a></li>
              <li><a href="#" className="hover:text-kino-blue">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-wider">Help & Info</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-kino-blue">Store Locations</a></li>
              <li><a href="#" className="hover:text-kino-blue">Membership</a></li>
              <li><a href="#" className="hover:text-kino-blue">Events</a></li>
              <li><a href="#" className="hover:text-kino-blue">Careers</a></li>
              <li><a href="#" className="hover:text-kino-blue">Contact Us</a></li>
              <li><a href="#" className="hover:text-kino-blue">FAQ</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-wider">Locations</h4>
             <ul className="space-y-3 text-sm text-gray-600">
               <li className="flex items-start">
                 <MapPin size={14} className="mr-2 mt-0.5 text-gray-400" />
                 <span>New York</span>
               </li>
               <li className="flex items-start">
                 <MapPin size={14} className="mr-2 mt-0.5 text-gray-400" />
                 <span>San Francisco</span>
               </li>
               <li className="flex items-start">
                 <MapPin size={14} className="mr-2 mt-0.5 text-gray-400" />
                 <span>Los Angeles</span>
               </li>
               <li className="flex items-start">
                 <MapPin size={14} className="mr-2 mt-0.5 text-gray-400" />
                 <span>Seattle</span>
               </li>
             </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Kinokuniya Book Stores of America Co., Ltd. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-kino-blue">Privacy Policy</a>
            <a href="#" className="hover:text-kino-blue">Terms of Service</a>
            <a href="#" className="hover:text-kino-blue">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};