import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookList } from './components/BookList';
import { AIConcierge } from './components/AIConcierge';
import { Footer } from './components/Footer';
import { MOCK_BOOKS } from './constants';
import { Book, CartItem } from './types';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const addToCart = (book: Book) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === book.id);
      if (existing) {
        return prev.map(item => 
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...book, quantity: 1 }];
    });
    // In a real app, we'd use a toast notification here
    console.log(`Added ${book.title} to cart`);
  };

  const filteredBooks = useMemo(() => {
    if (selectedCategory === 'All') return MOCK_BOOKS;
    return MOCK_BOOKS.filter(book => book.category === selectedCategory);
  }, [selectedCategory]);

  const newArrivals = MOCK_BOOKS.filter(b => b.isNew);
  const bestSellers = MOCK_BOOKS.filter(b => b.isBestSeller);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar 
        cartItems={cartItems} 
        onCategorySelect={setSelectedCategory} 
      />
      
      {selectedCategory === 'All' ? (
        <>
          <Hero />
          
          <BookList 
            title="New Arrivals" 
            books={newArrivals} 
            onAddToCart={addToCart} 
          />
          
          <div className="bg-white py-8 my-8">
             <BookList 
              title="Best Sellers" 
              books={bestSellers} 
              onAddToCart={addToCart} 
            />
          </div>

          <BookList 
            title="Recommended for You" 
            books={MOCK_BOOKS.slice(0, 4)} 
            onAddToCart={addToCart} 
          />
        </>
      ) : (
        <div className="pt-8 min-h-[60vh]">
          <BookList 
            title={`${selectedCategory} Collection`} 
            books={filteredBooks} 
            onAddToCart={addToCart} 
          />
        </div>
      )}

      {/* AI Assistant - Persists across views */}
      <AIConcierge books={MOCK_BOOKS} />

      <Footer />
    </div>
  );
};

export default App;
