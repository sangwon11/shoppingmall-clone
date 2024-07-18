import React, { useEffect, useState } from 'react'

const ProductAll = () => {
const [productList,setProductList] = useState()
  const getProducts = async() => {
    let uri = `http://localhost:4000/products`;
    let response = await fetch(uri);
    let data = await response.json();
    console.log(data);
  }

useEffect(()=>{
  getProducts()
},[])

  return (
    <div>ProductAll</div>
  )
}

export default ProductAll;