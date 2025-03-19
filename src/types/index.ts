export interface Product {
  slug: string;
  name: string;
  price: number;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
