import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

  let { id } = useParams()
  const [product, setProduct] = useState(null);

  const getProductDetail = async() => {
    let url = `http://localhost:4000/products/${id}`
    let reponse = await fetch(url);
    let data = await reponse.json();
    console.log("data", data);
    setProduct(data);
  }

  useEffect(() => {
    getProductDetail()
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          <img src={product?.img}/>
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail;