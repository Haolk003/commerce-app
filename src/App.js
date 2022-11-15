import React, { useEffect, useState } from 'react'
import { Route,Routes,useNavigate,Navigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';

import {Home,User,UpdateUser,NewUser,Products,SingleProduct,NewProduct,Login} from './Pages';
import {FetchUser,sendCartUser,FetchNewUser} from './store/apiCall';
const App = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [request,setRequest]=useState(false);
  const user=useSelector((state)=> state.auth.user);
  
  useEffect(()=>{
    if(request){
      dispatch(sendCartUser(user));
    }
    setRequest(true);
  },[user]);
  useEffect(()=>{
    dispatch(FetchUser());
  },[])
  useEffect(()=>{
if(!user?.isAdmin){
  navigate('/login');
  }
 
  },[user]);

  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/user' element={<User />} />
            <Route path='/user/:id' element={<UpdateUser />} />
            <Route path='/newUser' element={<NewUser />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<SingleProduct />} />
            <Route path='/newProduct' element={<NewProduct />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    </div>
  )
}

export default App;