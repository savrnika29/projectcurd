import { configureStore } from '@reduxjs/toolkit'
import productRecducer from  "../features/products/productSlice"
import authReducer from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
          auth: authReducer,
         products:productRecducer,
  },
})
export default store;