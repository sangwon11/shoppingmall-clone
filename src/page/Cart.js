import React, { useState } from 'react';
import { useCart } from './CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [selectedItems, setSelectedItems] = useState([]);

  // 선택한 아이템 체크박스 토글
  const handleSelectItem = (id) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter((itemId) => itemId !== id)
        : [...prevSelectedItems, id]
    );
  };

  // 선택 삭제 기능
  const handleRemoveSelected = () => {
    selectedItems.forEach((id) => {
      removeFromCart(id);
    });
    setSelectedItems([]);
  };

  return (
    <div className='cart-container'>
      <div>
        <div className='cart'>
          <div className='cart-header'>CART</div>
          <div className='cart-option'>
            <button onClick={handleRemoveSelected}>선택삭제</button>
            <button onClick={clearCart}>비우기</button>
          </div>
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className='cart-item'>
              <input
                type='checkbox'
                checked={selectedItems.includes(item.id)}
                onChange={() => handleSelectItem(item.id)}
              />
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
  );
}

export default Cart;
