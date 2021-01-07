import {Cart} from 'domain/entities/Cart';

export interface CartRepository {
  GetCartById(id: string): Promise<Cart>;
  CreateCart(): Promise<Cart>;
  AddToCart(cartId: string, productId: string): Promise<void>;
}
