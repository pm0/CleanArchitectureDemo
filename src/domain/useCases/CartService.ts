import {Cart} from '../entities/Cart';
import {CartRepository} from '../entities/CartRepository';

export interface CartService {
  CreateCart(): Promise<Cart>;
}

export class CartServiceImpl implements CartService {
  CartRepo: CartRepository;

  constructor(cartRepo: CartRepository) {
    this.CartRepo = cartRepo;
  }

  async CreateCart(): Promise<Cart> {
    return this.CartRepo.CreateCart();
  }
}
