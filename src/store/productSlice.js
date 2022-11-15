import {createSlice} from '@reduxjs/toolkit';
const productSlice= createSlice({
    name:"product",
    initialState:{
        isFetching:false,
        product:[],
        error:false,
    },
    reducers:{
        //create
        createProductStart(state,action){
            state.isFetching=true;
        },
        createProductSuccess(state,action){
            state.isFetching=false;
            state.product.push(action.payload);
        },
        createProductError(state,action){
            state.error=true;
        },
        //get
        getProductStart(state,action){
            state.isFetching=true;
        },
        getProductSuccess(state,action){
            state.isFetching=false;
            state.product=action.payload;
        },
        getProductError(state,action){
            state.error=true;
        },
        //delete
        deleteProductStart(state,action){
            state.isFetching=true;
        },
        deleteProductSuccess(state,action){
            state.isFetching=false;
           state.product=state.product.filter((item)=> item._id!==action.payload);
        },
        deleteProductError(state,action){
            state.error=true;
        },
        //update
        updateProductStart(state,action){
            state.isFetching=true;
        },
        updateProductSuccess(state,action){
            state.isFetching=false;
        state.product[state.product.findIndex((item)=> item._id===action.payload.id)]=action.payload.product;
        },
        updateProductError(state,action){
            state.error=true;
        },
    }
});
export const productAction=productSlice.actions;
export default productSlice;