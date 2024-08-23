import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = ({ authenticate }) => {

  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const getProductDetail = async() => {
    let url = `https://my-json-server.typicode.com/sangwon11/shoppingmall-clone/products/${id}`;
    let reponse = await fetch(url);
    let data = await reponse.json();
    console.log("data", data);
    setProduct(data);
  }

  const handlePurchase = () => {
    if (!authenticate) {
      navigate('/signup');
    } else {
      // 여기에 구매 로직을 추가합니다.
      console.log('Purchase successful!');
    }
  };

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
            <button className='purchase-btn' onClick={() =>handlePurchase()}>구매</button>
          </form>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail;