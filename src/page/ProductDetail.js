import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async() => {
    let url = `https://my-json-server.typicode.com/sangwon11/shoppingmall-clone/products/${id}`;
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
        <Col className='product-img'>
          <img className='productList' src={product?.img}/>
        </Col>
        <Col className='product-purchase'>
          <div>
            <div>{product?.title}</div>
            <div>{product?.price}</div>
          </div>
          <form>
            <select required>
              <option value="" selected>size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
            <Button>구매</Button>
          </form>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail;