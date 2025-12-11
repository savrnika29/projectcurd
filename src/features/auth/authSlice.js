import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk("auth/loginUser",async(data,thunkAPI)=>{
try {
    const res= await axios.post("https://dummyjson.com/auth/login",data);
    localStorage.setItem("token",res.data.token);
    return res.data;
} catch(err){
    return thunkAPI.rejectWithValue(err.response.data)
}
});

const authSlice =createSlice({
    name : "auth",
    initialState :{
        user:null,
        loading:false,
        error:null,

    },
   extraReducers: (builder) => {
    builder
    .addCase(loginUser.pending, (state) => {
      state.loading =true ;
    })
     .addCase(loginUser.fulfilled, (state,action) => {
      state.loading = false;
      state.user = action.payload;
    })
     .addCase(loginUser.rejected, (state,action) => {
      state.loading =false;
      state.user = action.payload.message
    })
}
})


export default authSlice.reducer;