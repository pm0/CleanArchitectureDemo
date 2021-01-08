import {ProductId, Product} from 'domain/entities/product';

export type CartId = string;

export type Cart = {
  id: CartId;
  products: CartProduct[];
};

export type CartProduct = {
  product: Product;
  quantity: number;
};

export type CartNormalized = {
  id: CartId;
  products: CartProductNormalized[];
};

export type CartProductNormalized = {
  id: ProductId;
  quantity: number;
};
