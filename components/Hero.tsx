import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="bg-kino-light border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Feature Banner */}
          <div className="lg:col-span-2 relative rounded-lg overflow-hidden bg-white shadow-sm border border-gray-200 group cursor-pointer">
             <div className="absolute inset-0 bg-gradient-to-r from-kino-blue to-transparent opacity-90 z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1614849963640-9b93052e8550?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
               alt="Manga Collection" 
               className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="relative z-20 p-8 md:p-12 h-full flex flex-col justify-center items-start text-white">
                <span className="bg-kino-accent text-white text-xs font-bold px-2 py-1 mb-4 uppercase tracking-wider">Featured</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 font-jp">Manga of the Month</h2>
                <p className="text-lg text-blue-100 mb-8 max-w-md">Discover the latest hits from Shonen Jump, Kodansha, and indie publishers directly from Japan.</p>
                <button className="bg-white text-kino-blue px-6 py-3 rounded-sm font-bold hover:bg-gray-100 transition-colors flex items-center">
                  Shop Manga <ArrowRight size={16} className="ml-2" />
                </button>
             </div>
          </div>

          {/* Side Promotions */}
          <div className="space-y-6 flex flex-col">
            
            {/* Membership Card Promo */}
            <div className="bg-kino-blue rounded-lg overflow-hidden flex-1 shadow-sm border border-gray-200 p-6 flex flex-col justify-center relative">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Star size={120} />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Kinokuniya Membership</h3>
               <p className="text-blue-200 text-sm mb-4">Save 10% on most items every day. Exclusive offers and events for members.</p>
               <button className="w-fit border border-white/30 text-white px-4 py-2 rounded-sm text-sm hover:bg-white hover:text-kino-blue transition-colors">
                 Join Today
               </button>
            </div>

            {/* New Arrivals Promo */}
            <div className="bg-white rounded-lg overflow-hidden flex-1 shadow-sm border border-gray-200 p-6 flex flex-col justify-center relative">
               <div className="absolute inset-0 bg-yellow-50/50"></div>
               <div className="relative z-10">
                 <h3 className="text-xl font-bold text-gray-900 mb-2 font-jp">New Stationery Arrivals</h3>
                 <p className="text-gray-600 text-sm mb-4">High-quality pens, notebooks, and washi tape from Japan.</p>
                 <button className="text-kino-blue font-bold text-sm hover:underline flex items-center">
                   View Collection <ArrowRight size={14} className="ml-1" />
                 </button>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};