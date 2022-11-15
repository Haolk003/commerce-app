import {configureStore} from '@reduxjs/toolkit';
import product from './productSlice';
import user from './userSlice';
const store=configureStore({
    reducer:{
        "product":product.reducer,
        "user":user.reducer,
    }
});
export default store;