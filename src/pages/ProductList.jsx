import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../features/products/productSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const { list = [], loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Product List</h1>

      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <table border="1" cellPadding="6" style={{ borderCollapse: 'collapse', marginTop: 12 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Brand</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(list) && list.length > 0 ? (
            list.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>{p.brand}</td>
                <td>{p.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>{!loading ? "No products found" : "Loading..."}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
