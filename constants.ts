import { Book } from './types';

export const MOCK_BOOKS: Book[] = [
  {
    id: '1',
    title: 'Spy x Family, Vol. 11',
    titleJp: 'SPY×FAMILY 11',
    author: 'Tatsuya Endo',
    price: 11.99,
    category: 'Manga',
    image: 'https://picsum.photos/id/24/300/450',
    isNew: true,
    isBestSeller: true,
    description: 'Master spy Twilight must infiltrate a prestigious school by creating a fake family.'
  },
  {
    id: '2',
    title: 'Kafka on the Shore',
    titleJp: '海辺のカフカ',
    author: 'Haruki Murakami',
    price: 18.00,
    category: 'Literature',
    image: 'https://picsum.photos/id/20/300/450',
    isBestSeller: true,
    description: 'A teenage boy, Kafka Tamura, runs away from home either to escape a gruesome oedipal prophecy or to search for his long-missing mother and sister.'
  },
  {
    id: '3',
    title: 'Studio Ghibli: The Complete Works',
    titleJp: 'スタジオジブリ全作品集',
    author: 'Studio Ghibli',
    price: 35.50,
    category: 'Art & Design',
    image: 'https://picsum.photos/id/28/300/450',
    isNew: false,
    description: 'A comprehensive look at the art and animation of Studio Ghibli.'
  },
  {
    id: '4',
    title: 'Chainsaw Man, Vol. 14',
    titleJp: 'チェンソーマン 14',
    author: 'Tatsuki Fujimoto',
    price: 11.99,
    category: 'Manga',
    image: 'https://picsum.photos/id/36/300/450',
    isNew: true,
    description: 'Denji is a poor young man who will do anything for money, even hunting devils with his pet devil-dog Pochita.'
  },
  {
    id: '5',
    title: 'Convenience Store Woman',
    titleJp: 'コンビニ人間',
    author: 'Sayaka Murata',
    price: 14.95,
    category: 'Literature',
    image: 'https://picsum.photos/id/42/300/450',
    description: 'Keiko Furukura has never fit in, neither in her family nor at school, but when she begins working at the Hiiromachi branch of "Smile Mart," she finds peace.'
  },
  {
    id: '6',
    title: 'Premium Fountain Pen - Blue',
    author: 'Pilot',
    price: 45.00,
    category: 'Stationery',
    image: 'https://picsum.photos/id/56/300/450',
    description: 'High quality Japanese fountain pen with smooth flow.'
  },
  {
    id: '7',
    title: 'Before the Coffee Gets Cold',
    titleJp: 'コーヒーが冷めないうちに',
    author: 'Toshikazu Kawaguchi',
    price: 16.99,
    category: 'Literature',
    image: 'https://picsum.photos/id/64/300/450',
    isBestSeller: true,
    description: 'If you could go back, who would you want to meet? A touching story about a mysterious cafe.'
  },
  {
    id: '8',
    title: 'Jujutsu Kaisen, Vol. 21',
    titleJp: '呪術廻戦 21',
    author: 'Gege Akutami',
    price: 11.99,
    category: 'Manga',
    image: 'https://picsum.photos/id/78/300/450',
    isNew: true,
    description: 'Yuji Itadori is a boy with tremendous physical strength, until he consumes the finger of Ryomen Sukuna.'
  }
];

export const CATEGORIES = ['All', 'Manga', 'Literature', 'Art & Design', 'Stationery'];
