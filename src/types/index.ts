// export interface Product {
//   slug?: string;
//   name: string;
//   price?: number;
//   image: string;
// }
export interface Product {
  product: {
    id: string;
    name: string;
    slug: string;
    price: number;
    imageUrl: string;
    description: string;
    category: string;
    inStock: boolean;
    dimensions: string;
    features: {
      Features: string;
      Benefits: string;
      Dimensions: string;
      "Credit Terms": string;
      Delivery: string;
      Returns: string;
      Dimentions: string;
    };
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}
