import {Cart} from 'domain/entities/Cart';
import {CartRepository} from 'domain/entities/CartRepository';
import Config from 'react-native-config';

interface CartDTO {
  id: string;
  products: [
    {
      id: string;
      quantity: number;
    },
  ];
}

export class CartRepositoryImpl implements CartRepository {
  async GetCartById(id: string): Promise<Cart> {
    const response = await fetch(Config.API_URL + 'cart/' + id, {
      method: 'GET',
    });
    const json: CartDTO = await response.json();
    return {
      id: json.id,
      products: json.products,
    };
  }

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

  async AddToCart(cartId: string, productId: string): Promise<void> {
    const response = await fetch(Config.API_URL + 'cart/' + cartId, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId: productId,
      }),
    });
  }
}
