import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Product} from 'domain/entities/Product';
import {ProductRepositoryImpl} from 'domain/infrastructure/ProductRepositoryImpl';
import {ProductServiceImpl} from 'domain/useCases/ProductService';
import {FetchingStatus} from 'types';

const productRepo = new ProductRepositoryImpl();
const productService = new ProductServiceImpl(productRepo);

export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async (data, thunkAPI) => {
    const products = await productService.GetProducts();
    return products;
  },
);

interface ProductsState {
  productsList: Product[];
  fetching: FetchingStatus;
}

const initialState = {
  productsList: [],
  fetching: 'idle',
} as ProductsState;

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.productsList = [];
      state.fetching = 'pending';
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productsList = action.payload;
      state.fetching = 'succeeded';
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.fetching = 'failed';
    });
  },
});

export default productsSlice;
