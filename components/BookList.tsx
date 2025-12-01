import React from 'react';
import { Book } from '../types';
import { ShoppingBag, Star } from 'lucide-react';

interface BookListProps {
  title: string;
  books: Book[];
  onAddToCart: (book: Book) => void;
}

export const BookList: React.FC<BookListProps> = ({ title, books, onAddToCart }) => {
  if (books.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6 border-b-2 border-gray-100 pb-3">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 font-serif tracking-tight">
          {title}
        </h2>
        <button className="text-xs font-bold text-kino-blue border border-kino-blue px-3 py-1 rounded-sm hover:bg-kino-blue hover:text-white transition-colors uppercase tracking-wider">
          View All
        </button>
      </div>
      
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10">
        {books.map((book) => (
          <div key={book.id} className="group flex flex-col h-full">
            {/* Image Container */}
            <div className="aspect-[2/3] w-full bg-gray-50 relative mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
               <img
                src={book.image}
                alt={book.title}
                className="h-full w-full object-cover object-center"
              />
              
              {/* Badges */}
              <div className="absolute top-2 left-0 flex flex-col items-start gap-1">
                {book.isNew && (
                  <span className="bg-kino-blue text-white text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider shadow-sm">
                    New
                  </span>
                )}
                {book.isBestSeller && !book.isNew && (
                  <span className="bg-kino-accent text-white text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider shadow-sm">
                    Best Seller
                  </span>
                )}
              </div>

              {/* Hover Actions */}
              <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      onAddToCart(book);
                    }}
                    className="w-full bg-kino-blue/90 backdrop-blur-sm text-white text-xs font-bold py-2.5 shadow-lg hover:bg-kino-blue transition-colors flex items-center justify-center uppercase tracking-wide"
                  >
                    <ShoppingBag size={14} className="mr-2" /> Add to Cart
                  </button>
              </div>
            </div>

            {/* Book Info */}
            <div className="flex-1 flex flex-col">
              {book.category && (
                <span className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">{book.category}</span>
              )}
              <h3 className="text-sm font-bold text-gray-900 leading-tight mb-1 group-hover:text-kino-blue transition-colors line-clamp-2 min-h-[2.5em]">
                {book.title}
              </h3>
              <p className="text-xs text-gray-500 mb-3">{book.author}</p>
              
              <div className="mt-auto border-t border-gray-100 pt-2">
                 {/* Standard Price */}
                 <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                    <span>Regular Price:</span>
                    <span className={book.memberPrice ? "line-through" : "font-bold text-gray-900"}>
                      ${book.price.toFixed(2)}
                    </span>
                 </div>
                 
                 {/* Member Price */}
                 {book.memberPrice && (
                   <div className="flex items-center justify-between text-kino-accent font-bold">
                      <span className="flex items-center text-[10px] uppercase tracking-tighter">
                        <Star size={10} className="mr-1 fill-current"/> Member
                      </span>
                      <span className="text-sm">${book.memberPrice.toFixed(2)}</span>
                   </div>
                 )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};