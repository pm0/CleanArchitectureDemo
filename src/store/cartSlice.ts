import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Product} from '../domain/entities/Product';
import {CartRepositoryImpl} from '../domain/infrastructure/CartRepositoryImpl';
import {CartServiceImpl} from '../domain/useCases/CartService';
import {FetchingStatus} from '../types';

const cartRepo = new CartRepositoryImpl();
const cartService = new CartServiceImpl(cartRepo);

export const createCart = createAsyncThunk('cart/create', async (thunkAPI) => {
  const cart = await cartService.CreateCart();
  return cart;
});

interface CartState {
  id: string | null;
  products: Product[];
  fetching: FetchingStatus;
}

const initialState = {
  id: null,
  products: [],
  fetching: 'idle',
} as CartState;

const productsSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createCart.pending, (state, action) => {
      state.id = null;
      state.products = [];
      state.fetching = 'pending';
    });
    builder.addCase(createCart.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.products = action.payload.products;
      state.fetching = 'succeeded';
    });
    builder.addCase(createCart.rejected, (state, action) => {
      state.fetching = 'failed';
    });
  },
});

export default productsSlice;
