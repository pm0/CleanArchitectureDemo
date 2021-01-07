import {Cart} from 'domain/entities/Cart';
import {CartRepository} from 'domain/entities/CartRepository';

let carts: Cart[] = [];

export class CartRepositoryMemory implements CartRepository {
  async GetCartById(id: string): Promise<Cart> {
    const cart = carts.find((c) => c.id === id);
    return cart!;
  }

  async CreateCart(): Promise<Cart> {
    let newCart: Cart = {
      id: 'a-new-random-id',
      products: [],
    };
    carts = [...carts, newCart];
    return newCart;
  }

  async AddToCart(cartId: string, productId: string): Promise<void> {
    const cartIndex = carts.findIndex((c) => c.id === cartId);

    if (cartIndex > -1) {
      const cart = carts[cartIndex];
      const productIndex = cart.products.findIndex((p) => p.id === productId);

      if (productIndex > -1) {
        const product = cart.products[productIndex];
        const updatedProduct = {
          id: productId,
          quantity: product.quantity + 1,
        };
        carts = [
          ...carts.slice(0, cartIndex),
          {
            id: cartId,
            products: [
              ...cart.products.slice(0, productIndex),
              updatedProduct,
              ...cart.products.slice(productIndex + 1, cart.products.length),
            ],
          },
          ...carts.slice(cartIndex + 1, carts.length),
        ];
      } else {
        const newProduct = {
          id: productId,
          quantity: 1,
        };
        carts = carts = [
          ...carts.slice(0, cartIndex),
          {
            id: cartId,
            products: [...cart.products, newProduct],
          },
          ...carts.slice(cartIndex + 1, carts.length),
        ];
      }
    }
  }
}
