import beansImg from '../assets/images/cafe_beans_roastery_1791314933549.jpg';

export interface CoffeeOrigin {
  id: string;
  name: string;
  origin: string;
  region: string;
  producer: string;
  elevation: string;
  varietal: string;
  process: string;
  tastingNotes: string[];
  bagWeight: string;
  price: number;
  image: string;
  description: string;
}

export const COFFEE_ORIGINS: CoffeeOrigin[] = [
  {
    id: 'origin-colombia-pink-bourbon',
    name: 'Huila Pink Bourbon Microlot',
    origin: 'Colombia',
    region: 'San Agustín, Huila',
    producer: 'Hernando & Sofia Alvarez',
    elevation: '1,850 MASL',
    varietal: 'Pink Bourbon',
    process: 'Fully Washed 36hr Ferment',
    tastingNotes: ['Pink Guava', 'Meyer Lemon', 'Wildflower Honey'],
    bagWeight: '300g Whole Bean',
    price: 22.00,
    image: beansImg,
    description: 'Our pride and flagship single-origin. Exceptionally clean with floral aromatics and sparkling malic clarity.'
  },
  {
    id: 'origin-ethiopia-guji',
    name: 'Guji Highland Anaerobic',
    origin: 'Ethiopia',
    region: 'Oromia, Guji Zone',
    producer: 'Tadele Dibaba & Smallholders',
    elevation: '2,100 MASL',
    varietal: '74110 & 74112 Heirloom',
    process: '72hr Anaerobic Natural',
    tastingNotes: ['Blueberry Compote', 'Jasmine', 'Cacao Nib'],
    bagWeight: '300g Whole Bean',
    price: 24.50,
    image: beansImg,
    description: 'Electric fruit sweetness with deep aromatics. Reminiscent of wild berry jam and Earl Grey tea.'
  },
  {
    id: 'origin-guatemala-huehuetenango',
    name: 'Huehuetenango Peña Roja',
    origin: 'Guatemala',
    region: 'San Pedro Necta',
    producer: 'Aurelio Villatoro',
    elevation: '1,700 MASL',
    varietal: 'Bourbon & Caturra',
    process: 'Mountain Spring Washed',
    tastingNotes: ['Milk Chocolate', 'Pecan Praline', 'Red Currant'],
    bagWeight: '300g Whole Bean',
    price: 21.00,
    image: beansImg,
    description: 'Our crowd-favorite comfort roast. Impeccable balance with velvety chocolate body and sweet nuttiness.'
  }
];
