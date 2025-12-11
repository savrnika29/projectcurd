import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../features/products/productSlice';

const ProductList = () => {

    const dispatch = useDispatch();
    const {list,loading} =useSelector((state)=>{
        state.products
    })
    useEffect(()=>{
        dispatch(getProducts())
    },[])
  return (
    <div>
        <h1>
            ProductList
        </h1>
        <table>
            <thead>
                <tr>
                    <th>
                        ID
                    </th>
                     <th>
                        Title
                    </th> 
                    <th>
                        Brand
                    </th>
                     <th>
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>
                {list.map((p)=>{
                    <tr key={p.id}>
                         <td>
                            {p.id}
                         </td>
                            <td>
                            {p.title}
                         </td>
                            <td>
                            {p.brand}
                         </td>
                            <td>
                            {p.price}
                         </td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default ProductList