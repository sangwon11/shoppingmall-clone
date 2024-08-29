import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ProductCard.css';

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  }
  return (
    <div className='product-info' onClick={showDetail}>
      <div className='img-case'>
        <img className='productList' src={item?.img[0]} />
      </div>
      <div>
        <div className='productName'>{item?.title}</div>
        <div className='productPrice'>₩{item?.price}</div>
      </div>
    </div>
  )
}

export default ProductCard;