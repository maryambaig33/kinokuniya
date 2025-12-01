import React from 'react';
import { Book } from '../types';
import { Plus } from 'lucide-react';

interface BookListProps {
  title: string;
  books: Book[];
  onAddToCart: (book: Book) => void;
}

export const BookList: React.FC<BookListProps> = ({ title, books, onAddToCart }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900 font-jp border-l-4 border-kino-blue pl-4">
          {title}
        </h2>
        <button className="text-sm text-kino-blue hover:text-blue-800 font-medium">View All</button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {books.map((book) => (
          <div key={book.id} className="group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
            {/* Badges */}
            <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
              {book.isNew && (
                <span className="bg-kino-blue text-white text-xs font-bold px-2 py-1 rounded-sm shadow-sm">
                  NEW
                </span>
              )}
              {book.isBestSeller && (
                <span className="bg-kino-accent text-white text-xs font-bold px-2 py-1 rounded-sm shadow-sm">
                  BEST SELLER
                </span>
              )}
            </div>

            {/* Image Container */}
            <div className="aspect-[2/3] w-full overflow-hidden bg-gray-200 relative">
               <img
                src={book.image}
                alt={book.title}
                className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity" />
              
              {/* Quick Add Button (Visible on Hover) */}
              <button 
                onClick={() => onAddToCart(book)}
                className="absolute bottom-4 right-4 bg-white text-kino-blue p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-kino-blue hover:text-white"
                title="Add to Cart"
              >
                <Plus size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-[2.5rem]">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {book.title}
                </h3>
                {book.titleJp && (
                  <p className="mt-1 text-xs text-gray-500 font-jp">{book.titleJp}</p>
                )}
                <p className="mt-1 text-sm text-gray-500">{book.author}</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-bold text-gray-900">${book.price.toFixed(2)}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wide">{book.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
