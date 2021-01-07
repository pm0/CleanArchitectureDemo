import {configureStore} from '@reduxjs/toolkit';
import cartSlice from 'store/slices/cartSlice';
import productsSlice from 'store/slices/productsSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: productsSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
