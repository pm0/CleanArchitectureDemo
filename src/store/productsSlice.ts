import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Product} from '../domain/entities/Product';
import {ProductRepositoryImpl} from '../domain/infrastructure/ProductRepositoryImpl';
import {ProductServiceImpl} from '../domain/useCases/ProductService';

export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async (thunkAPI) => {
    const productRepo = new ProductRepositoryImpl();
    const productService = new ProductServiceImpl(productRepo);
    const products = await productService.GetProducts();
    return products;
  },
);

interface ProductsState {
  products: Product[];
  fetching: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState = {
  products: [],
  fetching: 'idle',
} as ProductsState;

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.products = [];
      state.fetching = 'pending';
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.fetching = 'succeeded';
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.fetching = 'failed';
    });
  },
});

export default productsSlice;
