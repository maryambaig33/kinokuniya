import { Book } from './types';

export const MOCK_BOOKS: Book[] = [
  {
    id: '1',
    title: 'Spy x Family, Vol. 11',
    titleJp: 'SPY×FAMILY 11',
    author: 'Tatsuya Endo',
    price: 11.99,
    memberPrice: 10.79,
    category: 'Manga',
    image: 'https://m.media-amazon.com/images/I/718y91J+9gL._AC_UF1000,1000_QL80_.jpg',
    isNew: true,
    isBestSeller: true,
    description: 'Master spy Twilight must infiltrate a prestigious school by creating a fake family.'
  },
  {
    id: '2',
    title: 'Killing Commendatore',
    titleJp: '騎士団長殺し',
    author: 'Haruki Murakami',
    price: 30.00,
    memberPrice: 27.00,
    category: 'English Books',
    image: 'https://m.media-amazon.com/images/I/71e9MY-XE9L._AC_UF1000,1000_QL80_.jpg',
    isBestSeller: true,
    description: 'A tour de force of love and loneliness, war and art.'
  },
  {
    id: '3',
    title: 'Studio Ghibli: The Complete Works',
    titleJp: 'スタジオジブリ全作品集',
    author: 'Studio Ghibli',
    price: 35.50,
    memberPrice: 31.95,
    category: 'Japanese Books',
    image: 'https://m.media-amazon.com/images/I/815U9+r8CSL._AC_UF1000,1000_QL80_.jpg',
    isNew: false,
    description: 'A comprehensive look at the art and animation of Studio Ghibli.'
  },
  {
    id: '4',
    title: 'Chainsaw Man, Vol. 15',
    titleJp: 'チェンソーマン 15',
    author: 'Tatsuki Fujimoto',
    price: 11.99,
    memberPrice: 10.79,
    category: 'Manga',
    image: 'https://m.media-amazon.com/images/I/81s3k+fFmQL._AC_UF1000,1000_QL80_.jpg',
    isNew: true,
    description: 'Denji is a poor young man who will do anything for money, even hunting devils with his pet devil-dog Pochita.'
  },
  {
    id: '5',
    title: 'BRUTUS No. 1000',
    titleJp: 'ブルータス',
    author: 'Magazine House',
    price: 18.99,
    memberPrice: 17.09,
    category: 'Magazines',
    image: 'https://m.media-amazon.com/images/I/51w7gY1+HnL._AC_UF1000,1000_QL80_.jpg',
    isNew: true,
    description: 'Special 1000th issue of the legendary Japanese lifestyle magazine.'
  },
  {
    id: '6',
    title: 'Hobonichi Techo Weeks',
    titleJp: 'ほぼ日手帳',
    author: 'Hobonichi',
    price: 28.00,
    memberPrice: 25.20,
    category: 'Stationery',
    image: 'https://m.media-amazon.com/images/I/71X8k-p+RUL._AC_UF1000,1000_QL80_.jpg',
    description: 'The popular Japanese planner, Weeks format. Compact and easy to carry.'
  },
  {
    id: '7',
    title: 'Mildliner Double Ended Highlighter Set',
    titleJp: 'マイルドライナー',
    author: 'Zebra',
    price: 8.99,
    memberPrice: 8.09,
    category: 'Stationery',
    image: 'https://m.media-amazon.com/images/I/61NlW5yYcSL._AC_UF1000,1000_QL80_.jpg',
    isBestSeller: true,
    description: 'Features soft colored ink that is easy on the eyes. Set of 5.'
  },
  {
    id: '8',
    title: 'Jujutsu Kaisen, Vol. 22',
    titleJp: '呪術廻戦 22',
    author: 'Gege Akutami',
    price: 11.99,
    memberPrice: 10.79,
    category: 'Manga',
    image: 'https://m.media-amazon.com/images/I/81t3X3+J7+L._AC_UF1000,1000_QL80_.jpg',
    isNew: true,
    description: 'Yuji Itadori is a boy with tremendous physical strength, until he consumes the finger of Ryomen Sukuna.'
  },
  {
    id: '9',
    title: 'Sonny Angel: Hippers',
    titleJp: 'ソニーエンジェル',
    author: 'Dreams',
    price: 12.00,
    memberPrice: 12.00,
    category: 'Gifts',
    image: 'https://m.media-amazon.com/images/I/61H-eL-gGRL._AC_UF1000,1000_QL80_.jpg',
    isBestSeller: true,
    description: 'Decorative mini figures that can attach to your laptop or phone.'
  },
  {
    id: '10',
    title: 'Days at the Morisaki Bookshop',
    titleJp: '森崎書店の日々',
    author: 'Satoshi Yagisawa',
    price: 16.99,
    memberPrice: 15.29,
    category: 'English Books',
    image: 'https://m.media-amazon.com/images/I/91tQx+Uf-pL._AC_UF1000,1000_QL80_.jpg',
    description: 'A moving story about a young woman who moves into her uncle\'s used bookshop in Jimbocho.'
  }
];

export const CATEGORIES = ['All', 'Manga', 'Japanese Books', 'English Books', 'Magazines', 'Stationery', 'Gifts'];