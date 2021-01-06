export interface CartProduct {
  id: string;
  quantity: number;
}

export interface Cart {
  id: string;
  products: CartProduct[];
}
