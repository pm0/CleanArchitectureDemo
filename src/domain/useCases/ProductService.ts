import {Product} from '../entities/Product';
import {ProductRepository} from '../entities/ProductRepository';

export interface ProductService {
  GetProducts(): Promise<Product[]>;
}

export class ProductServiceImpl implements ProductService {
  ProductRepo: ProductRepository;

  constructor(productRepo: ProductRepository) {
    this.ProductRepo = productRepo;
  }

  async GetProducts(): Promise<Product[]> {
    return this.ProductRepo.GetProducts();
  }
}
