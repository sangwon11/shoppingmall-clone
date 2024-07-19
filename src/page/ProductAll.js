import React, { useEffect, useState } from 'react'
import ProductCard from './component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const ProductAll = () => {

const [productList,setProductList] = useState([])

const getProducts = async() =>{
    let uri = `http://localhost:4000/products`;
    let response = await fetch(uri);
    let data = await response.json();
    setProductList(data)
}


useEffect(()=>{
  getProducts()
},[])

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