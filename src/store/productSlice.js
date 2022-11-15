import {createSlice} from '@reduxjs/toolkit';
const product=createSlice({
    name:"product",
    initialState:{
        data:[],
        quanlity:0,
        total:0,
    },reducers:{
        addData(state,action){
            const request=state.data.find((item)=> item.id===action.payload.id&&item.size===action.payload.size&&item.color===action.payload.color);
                if(!request){
                      state.data.push(action.payload);
                }
              
               else{
                request.quanlity+=action.payload.quanlity;
               }
                state.quanlity+=action.payload.quanlity;
                state.total +=action.payload.price * action.payload.quanlity
        },
        increment(state,action){
           const product=state.data.find((item)=> item.id===action.payload);
           product.quanlity++;
           state.quanlity++;
           state.total+=product.price
        },
        descrement(state,action){
            const product=state.data.find((item)=> item.id===action.payload.id && item.color===action.payload.color && item.size===action.payload.size);
            if(product.quanlity>1){
                  product.quanlity--;
            }
          else{
            state.data=state.data.filter(((item)=> Object.entries(action.payload).some(([key,value])=>{
              return !item[key].includes(value);
            })));
          } 
            state.quanlity--;
          state.total-=product.price;
        },
        FetchData(state,action){
          state.data=action.payload.products;
          state.quanlity=action.payload.quanlity;
          state.total=action.payload.total;
        },
        OrderSuccess(state,action){
          state.data=[];
          state.quanlity=0;
          state.total=0
        }

    }
});
export const ProductAction=product.actions;
export default product;