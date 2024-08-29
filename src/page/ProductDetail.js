import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = ({ authenticate }) => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/sangwon11/shoppingmall-clone/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    setProduct(data);
  }

  const nextSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === product?.img.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? product?.img.length - 1 : prevIndex - 1
    );
  }

  const handlePurchase = () => {
    if (!authenticate) {
      navigate('/signup');
    } else {
      // 구매 로직
      console.log('Purchase successful!');
    }
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <div className='slider'>
            <div
              className='slides'
              style={{
                transform: `translateX(-${slideIndex * 25}%)`,
                transition: 'transform 0.5s ease'
              }}
            >
              {product?.img.map((image, index) => (
                <img key={index} className='slide-main-img' src={image} alt={`Slide ${index}`} />
              ))}
            </div>
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <button className="next" onClick={nextSlide}>&#10095;</button>
          </div>

          <div className='sub-slider'>
            <div 
            className='sub-slides'
            style={{
                transform: `translateX(-${slideIndex * 25}%)`,
                transition: 'transform 0.5s ease'
              }}
            >
              {product?.img.map((image, index) => (
                <img key={index} className='slide-sub-img' src={image} alt={`Slide ${index}`} />
              ))}
            </div>
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
              <button className='purchase-btn' type="button" onClick={handlePurchase}>구매</button>
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
  );
}

export default ProductDetail;
