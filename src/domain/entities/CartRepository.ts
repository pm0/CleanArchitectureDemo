import {CartNormalized} from 'domain/entities/Cart';

export interface CartRepository {
  GetCartById(id: string): Promise<CartNormalized>;
  CreateCart(): Promise<CartNormalized>;
  AddToCart(cartId: string, productId: string): Promise<void>;
}
