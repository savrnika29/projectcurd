import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createProduct,
  updateProduct,
  deleteProduct,
} from "../features/products/productSlice";

const CrudPage = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    id: "",
    title: "",
    price: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreate = () => {
    dispatch(createProduct({ title: form.title, price: Number(form.price) }))
      .then((res) => setResult(res.payload));
  };

  const handleUpdate = () => {
    dispatch(
      updateProduct({
        id: Number(form.id),
        data: { title: form.title, price: Number(form.price) },
      })
    ).then((res) => setResult(res.payload));
  };

  const handleDelete = () => {
    dispatch(deleteProduct(Number(form.id))).then((res) =>
      setResult(res.payload)
    );
  };

  return (
    <div style={{ width: "400px", margin: "auto", marginTop: "40px" }}>
      <h2 style={{ textAlign: "center" }}>CRUD Operations</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="number"
          name="id"
          placeholder="Product ID (For Update / Delete)"
          value={form.id}
          onChange={handleChange}
        />

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleCreate}>Create</button>

        <button onClick={handleUpdate} style={{ marginLeft: "10px" }}>
          Update
        </button>

        <button onClick={handleDelete} style={{ marginLeft: "10px" }}>
          Delete
        </button>
      </div>

      {result && (
        <pre
          style={{
            marginTop: "20px",
            background: "#eee",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default CrudPage;
