import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {}
  return (
    <div onClick={showDetail}>
        <img src={item?.img}/>
        <div>Consious choice</div>
        <div>{item?.title}</div>
        <div>₩{item?.price}</div>
        <div>{item?.new == true ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard;