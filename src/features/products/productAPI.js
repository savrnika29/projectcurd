
export const fetchProductsAPI = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data;
};

// Create product
export const createProductAPI = async (productData) => {
  const res = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });

  const data = await res.json();
  return data;
};

// Update product
export const updateProductAPI = async (id, updateData) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData),
  });

  const data = await res.json();
  return data;
};

// Delete product
export const deleteProductAPI = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    method: "DELETE",
  });

  const data = await res.json();
  return data;
};
