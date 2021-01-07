import {Product} from 'domain/entities/Product';
import {ProductRepository} from 'domain/entities/ProductRepository';

let products: Product[] = [
  {id: 'a-test-product', name: 'TestProductMem', price: 10.01},
  {id: 'a-test-product-2', name: 'TestProductMem2', price: 20.02},
];

export class ProductRepositoryMemory implements ProductRepository {
  async GetProducts(): Promise<Product[]> {
    return products;
  }
}
