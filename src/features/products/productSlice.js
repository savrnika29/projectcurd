// import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
// import axios from "axios";

// export const getProducts= createAsyncThunk("products/get", async()=>{
//     const res =await axios.get("https://dummyjson.com/products")
//     return res.data.products;
// })

// const productSlice = createSlice({
//     name :" product",
//      initialState: {
//         list:[],
//     loading: false,
 
//   },
// extraReducers: (builder) => {
//     builder
//     .addCase(getProducts.pending, (state) => {
//       state.loading =true ;
//     })
//      .addCase(getProducts.fulfilled, (state,action) => {
//       state.loading = false;
//       state.list = action.payload;
//     })
   
// }
// });

//  export default productSlice.reducer;


