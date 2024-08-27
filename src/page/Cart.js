import React from 'react'
import './Cart.css';

const Cart = () => {
  return (
    <div className='cart-container'>
      <div className='cart'>
        <div className='cart-header'>CART</div>
        <div className='cart-option'>
          <div>선택삭제</div>
          <div>비우기</div>
        </div>

      </div>

      <div className='summary'>
        <div className='summary-header'>SUMMARY</div>
        <button className='cart-purchase-btn'>쇼핑 계속하기</button>
      </div>
    </div>
  )
}

export default Cart;