import {Product} from './Product';

export interface ProductRepository {
  GetProducts(): Promise<Product[]>;
}
