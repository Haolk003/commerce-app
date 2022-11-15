import {configureStore} from '@reduxjs/toolkit';
import auth from './authSlice';
import productSlice from './productSlice';
const store=configureStore({
    reducer:{
        "auth":auth.reducer,
        "product":productSlice.reducer,
    }
});
export default store;