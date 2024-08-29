import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Carousel } from 'react-bootstrap';
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
      //구매 로직
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
          <div>
            <img className='productList' src={product?.img[0]} />
          </div>
        </Col>
        <Col className='product-purchase'>
          <div className='productDetail-info'>
            <div className='productName'>{product?.title}</div>
            <div className='productDescription'>description description description description description</div>
            <div className='productPrice'>₩{product?.price}</div>
          </div>
          <form>
            <select required>
              <option value="" selected>size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
            <div className='btn-area'>
              <button className='purchase-btn' onClick={() => handlePurchase()}>구매</button>
              <button className='purchase-btn'>장바구니</button>
            </div>
            <ul className='detailList'>
              <div>DETAILS +</div>
              <div>SIZE GUIDE +</div>
              <div>DELIVERY +</div>
            </ul>
          </form>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail;