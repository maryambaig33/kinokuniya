export interface Book {
  id: string;
  title: string;
  titleJp?: string;
  author: string;
  price: number;
  category: 'Manga' | 'Literature' | 'Art & Design' | 'Stationery' | 'Magazine';
  image: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  description: string;
}

export interface CartItem extends Book {
  quantity: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}
