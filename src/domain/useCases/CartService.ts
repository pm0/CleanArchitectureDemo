import {CartRepository} from '../entities/CartRepository';
import {Cart} from '../entities/Cart';
import {Product} from '../entities/Product';

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

  async CreateCart(): Promise<Cart> {
    return this.CartRepo.CreateCart();
  }

  async AddToCart(cartId: string, productId: string): Promise<void> {
    return this.CartRepo.AddToCart(cartId, productId);
  }
}
