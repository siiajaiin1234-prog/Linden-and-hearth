export interface MenuItem {
  id: string;
  name: string;
  category: 'espresso' | 'filter' | 'cold-drinks' | 'bakery' | 'kitchen';
  categoryLabel: string;
  price: number;
  description: string;
  tastingNotes?: string[];
  dietary?: string[];
  image?: string;
  customizable?: boolean;
  options?: {
    milk?: string[];
    temperature?: string[];
    sweetness?: string[];
    extraShot?: boolean;
  };
}

export interface CartItem {
  cartId: string;
  item: MenuItem;
  quantity: number;
  selectedMilk?: string;
  selectedTemperature?: string;
  selectedSweetness?: string;
  hasExtraShot?: boolean;
  specialInstructions?: string;
  itemTotal: number;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Coffee Science' | 'Origin & Sourcing' | 'Hearth Bakery' | 'Brew Guides' | 'Cafe Culture';
  author: {
    name: string;
    role: string;
  };
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  tastingOrKeyTakeaway?: string;
  tags: string[];
}

export interface OrderDetails {
  orderId: string;
  customerName: string;
  customerPhone: string;
  pickupTime: string;
  notes?: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  tip: number;
  total: number;
  createdAt: string;
  status: 'received' | 'brewing' | 'ready' | 'picked-up';
}
