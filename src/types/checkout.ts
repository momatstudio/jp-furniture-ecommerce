export interface ShippingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  secondaryPhone: string;
  streetAddress: string;
  city: string;
  region: string;
  postalCode: string;
}

export interface OrderData {
  items: {
    name: string;
    price: number;
    quantity: number;
    image: string;
  }[];
  deliveryInfo: Omit<ShippingFormData, "email" | "secondaryPhone">;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}
