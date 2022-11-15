import {createSlice} from '@reduxjs/toolkit';
const user=createSlice({
    name:"user",
    initialState:{
        currentUser:null,
        error:false,
        isFetching:false
    },
    reducers:{
        loginStart(state){
            state.isFetching=true
        },
        loginSuccess(state,action){
            state.currentUser=action.payload;
            state.isFetching=false;
        },
        loginFailure(state,action){
            state.error=true;
            state.isFetching=false;
        },
        logout(state,action){
            state.currentUser=null;
        }
    }
});
export const userAction=user.actions;
export default user;