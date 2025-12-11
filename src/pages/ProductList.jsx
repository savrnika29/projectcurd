import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list = [], loading } = useSelector(s => s.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h2>Products</h2>
      <button onClick={() => navigate("/crud")}>Go to CRUD</button>
      <button onClick={() => { dispatch(logout()); navigate("/"); }} style={{ marginLeft: 10 }}>Logout</button>

      {loading && <p>Loading...</p>}

      <table border="1" cellPadding="8" style={{ marginTop: 15 }}>
        <thead>
          <tr><th>ID</th><th>Title</th><th>Price</th></tr>
        </thead>
        <tbody>
          {(list || []).length > 0
            ? list.map(p => <tr key={p.id}><td>{p.id}</td><td>{p.title}</td><td>{p.price}</td></tr>)
            : <tr><td colSpan="3">No products found</td></tr>}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
