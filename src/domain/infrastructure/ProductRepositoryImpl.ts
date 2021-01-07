import {Product} from 'domain/entities/Product';
import {ProductRepository} from 'domain/entities/ProductRepository';
import Config from 'react-native-config';

interface ProductDTO {
  id: string;
  name: string;
  price: number;
}

export class ProductRepositoryImpl implements ProductRepository {
  async GetProducts(): Promise<Product[]> {
    const response = await fetch(Config.API_URL + 'product', {
      method: 'GET',
    });
    const json = await response.json();
    return json.map((product: ProductDTO) => {
      const newProduct: Product = {
        id: product.id,
        name: product.name,
        price: product.price,
      };
      return newProduct;
    });
  }
}
