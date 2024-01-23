import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const productContext = createContext();
export const useProductContext = () => useContext(productContext);

const ProductContext = ({ children }) => {
  const API = "http://localhost:3000/data";
  const [data, setData] = useState([]);

  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
    ReadProduct();
  }

  async function ReadProduct() {
    let { data } = await axios(API);
    setData(data);
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    ReadProduct();
  }

  const values = {
    addProduct,
    ReadProduct,
    data,
    deleteProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
