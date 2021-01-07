import {Cart} from 'domain/entities/Cart';
import {CartRepository} from 'domain/entities/CartRepository';

export interface CartService {
  GetCartById(id: string): Promise<Cart>;
  CreateCart(): Promise<Cart>;
  AddToCart(cartId: string, productId: string): Promise<void>;
}

export class CartServiceImpl implements CartService {
  CartRepo: CartRepository;

  constructor(cartRepo: CartRepository) {
    this.CartRepo = cartRepo;
  }

  GetCartById(id: string): Promise<Cart> {
    return this.CartRepo.GetCartById(id);
  }

  CreateCart(): Promise<Cart> {
    return this.CartRepo.CreateCart();
  }

  AddToCart(cartId: string, productId: string): Promise<void> {
    return this.CartRepo.AddToCart(cartId, productId);
  }
}
