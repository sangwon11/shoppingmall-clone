import React from 'react'
import { useCart } from './CartContext';
import './Cart.css';

const Cart = () => {

  const { cartItems } = useCart();

  return (
    <div className='cart-container'>
      <div>
        <div className='cart'>
          <div className='cart-header'>CART</div>
          <div className='cart-option'>
            <div>선택삭제</div>
            <div>비우기</div>
          </div>
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className='cart-item'>
              <div>{item.title}</div>
              <div>₩{item.price}</div>
            </div>
          ))
        ) : (
          <div className='empty-cart'>장바구니가 비었습니다.</div>
        )}
      </div>

      <div className='summary'>
        <div className='summary-header'>SUMMARY</div>
        <div>총 금액: ₩{cartItems.reduce((acc, item) => acc + item.price, 0)}</div>
        <button className='cart-purchase-btn'>쇼핑 계속하기</button>
      </div>
    </div>
  )
}

export default Cart;