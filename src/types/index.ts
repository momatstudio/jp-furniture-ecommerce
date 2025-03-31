// export interface Product {
//   slug?: string;
//   name: string;
//   price?: number;
//   image: string;
// }
export interface Product {
  product: {
    name: string;
    slug: string;
    price: number;
    image: string;
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
      Dimentions: undefined;
    };
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}
