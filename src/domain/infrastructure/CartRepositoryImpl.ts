import {Cart} from '../entities/Cart';
import {CartRepository} from '../entities/CartRepository';
import Config from 'react-native-config';

interface CartDTO {
  id: string;
  products: [];
}

export class CartRepositoryImpl implements CartRepository {
  async CreateCart(): Promise<Cart> {
    const response = await fetch(Config.API_URL + 'cart', {
      method: 'POST',
    });
    const json: CartDTO = await response.json();
    return {
      id: json.id,
      products: json.products,
    };
  }

  /*async AddToCart(cart: Cart, product: Product): Promise<void> {

  }
  
  async GetCartById(id: string): Promise<Cart> {

  }*/
}
