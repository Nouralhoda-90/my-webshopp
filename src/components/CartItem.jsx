import React from 'react';



export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  const { id, name, price, quantity } = item;

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <div className="cart-item-buttons">
        <button onClick={() => onDecrease(id)}>-</button>
        <button onClick={() => onIncrease(id)}>+</button>
        <button onClick={() => onRemove(id)}>Remove</button>
      </div>
    </div>
  );
}

