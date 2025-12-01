import React from 'react';
import { Star, CreditCard } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="bg-gray-100 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Carousel / Feature Banner (8 cols) */}
          <div className="lg:col-span-8 relative rounded-sm overflow-hidden bg-white shadow-sm group cursor-pointer min-h-[360px] md:h-[450px]">
             <img 
               src="https://images.unsplash.com/photo-1560942485-b2a11cc13456?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
               alt="Japanese Literature" 
               className="absolute inset-0 w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
             
             <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <span className="inline-block bg-kino-accent text-white text-[10px] font-bold px-2 py-1 mb-3 uppercase tracking-wider">Monthly Highlight</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-2 text-white font-jp">Discover Japanese Literature</h2>
                <p className="text-gray-200 mb-6 max-w-lg text-sm md:text-base">Explore our curated collection of award-winning novels, from Haruki Murakami to upcoming authors making waves in Tokyo.</p>
                <button className="bg-white text-gray-900 px-6 py-3 rounded-sm font-bold hover:bg-kino-blue hover:text-white transition-colors text-sm uppercase tracking-wide">
                  View Collection
                </button>
             </div>
          </div>

          {/* Sidebar Promotions (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6 md:h-[450px]">
            
            {/* Membership Promo - Modeled after the real card promo */}
            <div className="bg-kino-blue rounded-sm overflow-hidden flex-1 shadow-sm p-6 relative flex flex-col justify-between border-t-4 border-kino-gold min-h-[200px]">
               <div className="relative z-10">
                  <div className="flex items-center space-x-2 mb-3">
                     <CreditCard className="text-kino-gold" size={20} />
                     <h3 className="text-lg font-bold text-white uppercase tracking-wide">Membership</h3>
                  </div>
                  <p className="text-blue-100 text-sm leading-relaxed mb-4">
                    Join today and receive <span className="text-white font-bold">10% OFF</span> most books and magazines every time you shop.
                  </p>
               </div>
               
               <div className="bg-white/10 p-4 rounded-sm border border-white/20 backdrop-blur-sm relative z-10">
                 <div className="flex justify-between items-end">
                   <div>
                     <p className="text-[10px] text-gray-300 uppercase">Annual Fee</p>
                     <p className="text-2xl font-bold text-white">$25.00</p>
                   </div>
                   <button className="bg-kino-gold text-kino-blue px-4 py-2 rounded-sm text-xs font-bold hover:bg-white transition-colors whitespace-nowrap">
                     JOIN NOW
                   </button>
                 </div>
               </div>
               
               {/* Abstract BG pattern */}
               <div className="absolute top-0 right-0 -mt-4 -mr-4 text-white opacity-5 pointer-events-none">
                 <Star size={150} />
               </div>
            </div>

            {/* Featured Item / Secondary Promo */}
            <div className="bg-white rounded-sm overflow-hidden flex-1 shadow-sm border border-gray-200 p-6 flex flex-col justify-center relative group cursor-pointer min-h-[180px]">
               <div className="absolute inset-0 overflow-hidden">
                 <img 
                    src="https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
                    alt="Stationery"
                 />
               </div>
               <div className="relative z-10 text-center">
                 <h3 className="text-xl font-bold text-gray-900 mb-1 font-serif">Stationery World</h3>
                 <div className="w-10 h-0.5 bg-kino-accent mx-auto mb-3"></div>
                 <p className="text-gray-600 text-xs mb-4 px-4">Imported high-quality pens, planners, and gifts from Japan.</p>
                 <span className="text-kino-blue font-bold text-xs hover:underline uppercase tracking-wide">
                   Shop Stationery
                 </span>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};