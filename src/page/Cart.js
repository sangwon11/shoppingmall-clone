import React from 'react'
import './Cart.css';

const Cart = () => {
  return (
    <div className='cart-container'>
      <div className='cart'>
        <div>CART</div>
        <div>전체삭체</div>
        <div>비우기</div>
      </div>
      <div className='summary'></div>
    </div>
  )
}

export default Cart;