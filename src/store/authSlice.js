import { createSlice } from "@reduxjs/toolkit";
const auth=createSlice({
    name:"auth",
    initialState:{
        user:null,
        isFetching:false,
        error:false,
    },reducers:{
        loginStart(state,action){
            state.isFetching=true;
        },
        loginSuccess(state,action){
            state.isFetching=false;
            state.user=action.payload;
        },
        loginError(state,action){
            state.isFetching=false;
            state.error=true;
        },
        logout(state,action){
            state.user=null
        }
    }
});
export const authAction=auth.actions;
export default auth;