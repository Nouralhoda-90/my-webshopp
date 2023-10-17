import React from 'react';
import EmptyCartButton from './EmptyCartButton';

export default function CartPage({
  cartItems,
  totalPrice,
  onClearCart,
  onNavigateToProducts,
  setPurchaseMessage,
  updateProductStock, // Add the updateProductStock prop
}) {
  const handlePurchaseClick = () => {
    // Reduce stock for purchased items
    cartItems.forEach(item => {
      updateProductStock(item.id,item.stock - item.quantity);

    });

    // Clear the cart and set purchase message
    onClearCart();
    setPurchaseMessage('Tack för ditt köp! Ditt köp har genomförts.');

    setTimeout(() => {
      setPurchaseMessage('');
    }, 3000);
  };

  const handleEmptyCartClick = () => {
    onClearCart(); // Clear the cart using the passed prop function
    setPurchaseMessage('Cart has been emptied.'); // Set a message when the cart is emptied
  };

  return (
    <div className="cart-summary">
      <h3>Total Price: ${totalPrice}</h3>
      {cartItems.length > 0 && <button onClick={handlePurchaseClick}>Purchase</button>}
      {cartItems.length > 0 && <EmptyCartButton onEmptyCart={handleEmptyCartClick} />}
      <button onClick={onNavigateToProducts}>Back to Products</button>
    </div>
  );
}
