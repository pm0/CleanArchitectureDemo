import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {CartProduct} from 'domain/entities/Cart';
import {CartRepositoryMemory} from 'domain/infrastructure/CartRepositoryMemory';
import {CartServiceImpl} from 'domain/useCases/CartService';
import {FetchingStatus} from 'types';
import {RootState} from 'store';

const cartRepo = new CartRepositoryMemory(); // Change to CartRepositoryDB to use database implementation
const cartService = new CartServiceImpl(cartRepo);

export const getCart = createAsyncThunk(
  'cart/get',
  async (data: void, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const cart = await cartService.GetCartById(state.cart.id!);
    return cart;
  },
);

export const createCart = createAsyncThunk(
  'cart/create',
  async (data: void, thunkAPI) => {
    const cart = await cartService.CreateCart();
    return cart;
  },
);

export const addToCart = createAsyncThunk(
  'cart/add',
  async (data: {productId: string}, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    await cartService.AddToCart(state.cart.id!, data.productId);
    thunkAPI.dispatch(getCart());
  },
);

interface CartState {
  id: string | null;
  products: CartProduct[];
  fetchingCart: FetchingStatus;
  creatingCart: FetchingStatus;
  addingProduct: FetchingStatus;
}

const initialState = {
  id: null,
  products: [],
  fetchingCart: 'idle',
  creatingCart: 'idle',
  addingProduct: 'idle',
} as CartState;

const productsSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCart.pending, (state, action) => {
      state.fetchingCart = 'pending';
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.products = action.payload.products;
      state.fetchingCart = 'succeeded';
    });
    builder.addCase(getCart.rejected, (state, action) => {
      state.fetchingCart = 'failed';
    });

    builder.addCase(createCart.pending, (state, action) => {
      state.id = null;
      state.products = [];
      state.creatingCart = 'pending';
    });
    builder.addCase(createCart.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.products = action.payload.products;
      state.creatingCart = 'succeeded';
    });
    builder.addCase(createCart.rejected, (state, action) => {
      state.creatingCart = 'failed';
    });

    builder.addCase(addToCart.pending, (state, action) => {
      state.addingProduct = 'pending';
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.addingProduct = 'succeeded';
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.addingProduct = 'failed';
    });
  },
});

export default productsSlice;
