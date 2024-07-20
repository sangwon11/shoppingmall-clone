import React, { useEffect, useState } from 'react'
import ProductCard from './component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {

const [productList,setProductList] = useState([])
const [query, setQuery] = useSearchParams();
const getProducts = async() =>{
    let searchQuery = query.get('q') || '';
    let uri = `http://localhost:4000/products?q=${searchQuery}`;
    let response = await fetch(uri);
    let data = await response.json();
    setProductList(data)
}


useEffect(()=>{
  getProducts()
},[query])

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
            <ProductCard item={menu} />
            </Col>
        ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll;