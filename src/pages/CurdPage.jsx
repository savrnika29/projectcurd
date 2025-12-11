import React, { useState } from 'react'
import axios from 'axios'
const CurdPage = () => {

    const [result,setResult]= useState(null);

    const createProduct = async ()=>{
        const res =await axios.post("https://dummyjson.com/products/add",{
            title:"new Product",

        });
        setResult(res.data)
    }
 const updateProduct = async ()=>{
        const res =await axios.put("https://dummyjson.com/products/1",{
            title:"update Product",

        });
        setResult(res.data)
    }
     const deleteProduct = async ()=>{
        const res =await axios.delete("https://dummyjson.com/products/1");
        setResult(res.data)
    }
  return (
    <div>
        <h1>
            curd Page
        </h1>
        <button onClick={createProduct}>Create</button>
        <button onClick={updateProduct}>Update</button>
        <button onClick={deleteProduct}>Delete</button>
{result&&(
    <pre>
        {JSON.stringify(result,null,2)}
    </pre>
)}
    </div>
  )
}

export default CurdPage