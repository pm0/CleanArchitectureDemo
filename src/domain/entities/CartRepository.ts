import {Cart} from './Cart';
import {Product} from './Product';

export interface CartRepository {
  CreateCart(): Promise<Cart>;
  //AddToCart(cart: Cart, product: Product): Promise<void>;
  //GetCartById(id: string): Promise<Cart>;
}
