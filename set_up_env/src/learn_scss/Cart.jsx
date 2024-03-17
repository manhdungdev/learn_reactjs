import React from 'react';
import './Cart.scss';
import styled from './Cart.module.scss';

function Cart({ isShow }) {
  return (
    <div>
      Cart
      <div className={styled.productList}>
        <div className={styled.productItem}>Item</div>
        <div className={styled.productItem}>Item</div>
        <div className={styled.productItem}>Item</div>
        <div className={styled.productItem}>Item</div>
      </div>
    </div>
  );
}

export default Cart;
