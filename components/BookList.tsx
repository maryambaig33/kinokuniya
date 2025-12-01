import React from 'react';
import { Book } from '../types';
import { ShoppingBag } from 'lucide-react';

interface BookListProps {
  title: string;
  books: Book[];
  onAddToCart: (book: Book) => void;
}

export const BookList: React.FC<BookListProps> = ({ title, books, onAddToCart }) => {
  if (books.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-2">
        <h2 className="text-xl font-bold text-kino-blue font-jp flex items-center">
          <span className="w-2 h-6 bg-kino-blue mr-3 rounded-sm"></span>
          {title}
        </h2>
        <button className="text-sm text-gray-500 hover:text-kino-blue font-medium transition-colors">See All &rarr;</button>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {books.map((book) => (
          <div key={book.id} className="group relative bg-white flex flex-col h-full">
            {/* Image */}
            <div className="aspect-[1/1.5] w-full overflow-hidden bg-gray-100 relative mb-3 border border-gray-100">
               <img
                src={book.image}
                alt={book.title}
                className="h-full w-full object-cover object-center group-hover:opacity-90 transition-opacity"
              />
              {book.isNew && (
                <span className="absolute top-0 left-0 bg-kino-blue text-white text-[10px] font-bold px-2 py-1">
                  NEW
                </span>
              )}
              {book.isBestSeller && !book.isNew && (
                <span className="absolute top-0 left-0 bg-kino-accent text-white text-[10px] font-bold px-2 py-1">
                  BESTSELLER
                </span>
              )}
              
              {/* Quick Add Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-t from-black/50 to-transparent">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      onAddToCart(book);
                    }}
                    className="w-full bg-white text-kino-blue text-xs font-bold py-2 rounded-sm hover:bg-kino-blue hover:text-white transition-colors flex items-center justify-center shadow-lg"
                  >
                    <ShoppingBag size={14} className="mr-1" /> Add to Cart
                  </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-tight mb-1 group-hover:text-kino-blue transition-colors">
                {book.title}
              </h3>
              {book.titleJp && (
                <p className="text-xs text-gray-500 font-jp mb-1 line-clamp-1">{book.titleJp}</p>
              )}
              <p className="text-xs text-gray-500 mb-2">{book.author}</p>
              
              <div className="mt-auto">
                 {book.memberPrice && (
                   <div className="flex items-baseline mb-0.5">
                      <span className="text-[10px] text-kino-gold font-bold mr-1 border border-kino-gold px-1 rounded-sm">MEMBER</span>
                      <span className="text-sm font-bold text-kino-gold">${book.memberPrice.toFixed(2)}</span>
                   </div>
                 )}
                 <p className={`text-sm ${book.memberPrice ? 'text-gray-500' : 'text-gray-900 font-bold'}`}>
                   ${book.price.toFixed(2)}
                 </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};