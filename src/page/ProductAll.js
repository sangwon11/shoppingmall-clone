import React, { useEffect, useState } from 'react'
import ProductCard from './component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {

  let [productList, setProductList] = useState([]);
  let [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log('쿼리값', searchQuery);
    let url = `https://my-json-server.typicode.com/sangwon11/shoppingmall-clone/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
};


useEffect(()=>{
  getProducts();
},[query]);

  return (
      <Container>
        <Row>
          {productList?.map((menu) => (
            <Col>
            <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
  )
}

export default ProductAll;