// // src/features/products/productSlice.js

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import {
//   fetchProductsAPI,
//   createProductAPI,
//   updateProductAPI,
//   deleteProductAPI,
// } from "./productAPI";

// // ========================
// // ⭐ Async Thunks
// // ========================

// // Fetch all products
// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () => {
//     const response = await fetchProductsAPI();
//     return response.products; // API returns { products: [...] }
//   }
// );

// // Create product
// export const createProduct = createAsyncThunk(
//   "products/createProduct",
//   async (productData) => {
//     const response = await createProductAPI(productData);
//     return response;
//   }
// );

// // Update product
// export const updateProduct = createAsyncThunk(
//   "products/updateProduct",
//   async ({ id, updateData }) => {
//     const response = await updateProductAPI(id, updateData);
//     return response;
//   }
// );

// // Delete product
// export const deleteProduct = createAsyncThunk(
//   "products/deleteProduct",
//   async (id) => {
//     const response = await deleteProductAPI(id);
//     return { id, result: response };
//   }
// );

// // ========================
// // ⭐ Slice
// // ========================
// const productSlice = createSlice({
//   name: "products",
//   initialState: {
//     products: [],
//     loading: false,
//     error: null,
//   },

//   extraReducers: (builder) => {
//     builder
//       // Fetch
//       .addCase(fetchProducts.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.products = action.payload;
//       })
//       .addCase(fetchProducts.rejected, (state) => {
//         state.loading = false;
//         state.error = "Failed to load products";
//       })

//       // Create
//       .addCase(createProduct.fulfilled, (state, action) => {
//         state.products.push(action.payload);
//       })

//       // Update
//       .addCase(updateProduct.fulfilled, (state, action) => {
//         state.products = state.products.map((p) =>
//           p.id === action.payload.id ? action.payload : p
//         );
//       })

//       // Delete
//       .addCase(deleteProduct.fulfilled, (state, action) => {
//         state.products = state.products.filter(
//           (p) => p.id !== action.payload.id
//         );
//       });
//   },
// });

// // Export reducer
// export default productSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createProductAPI, updateProductAPI, deleteProductAPI, fetchProductsAPI } from "./productAPI";

// GET ALL PRODUCTS
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return await fetchProductsAPI();
  }
);

// CREATE PRODUCT
export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (data) => {
    return await createProductAPI(data);
  }
);

// UPDATE PRODUCT
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, data }) => {
    return await updateProductAPI(id, data);
  }
);

// DELETE PRODUCT
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    return await deleteProductAPI(id);
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })

      // CREATE
      .addCase(createProduct.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })

      // UPDATE
      .addCase(updateProduct.fulfilled, (state, action) => {
        const updated = action.payload;
        const index = state.list.findIndex((p) => p.id === updated.id);
        if (index !== -1) {
          state.list[index] = updated;
        }
      })

      // DELETE
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const deletedId = action.payload.id;
        state.list = state.list.filter((p) => p.id !== deletedId);
      });
  },
});

export default productSlice.reducer;
