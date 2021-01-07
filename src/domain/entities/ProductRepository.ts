import {Product} from 'domain/entities/Product';

export interface ProductRepository {
  GetProducts(): Promise<Product[]>;
}
