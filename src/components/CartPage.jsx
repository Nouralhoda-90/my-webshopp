import React from 'react';
import EmptyCartButton from './EmptyCartButton';
import PurchaseButton from './PurchaseButton';

export default function CartPage({
  cartItems,
  totalPrice,
  onClearCart,
  onNavigateToProducts,
  setPurchaseMessage,
  updateProductStock, // This prop is already available, no need to declare it again
  products, // Pass products as a prop
}) {
  const handlePurchaseClick = () => {
    console.log('Cart items before update:', cartItems);
    console.log('Total price before update:', totalPrice);

    // Reduce stock for purchased items
    cartItems.forEach(item => {
      const product = products.find(product => product.id === item.id);
      if (product) {
        updateProductStock(item.id, product.stock - item.quantity);
      }
    });

    console.log('Cart items after update:', cartItems);
    console.log('Total price after update:', totalPrice);

    onClearCart();
    setPurchaseMessage('Tack för ditt köp! Ditt köp har genomförts.');

    setTimeout(() => {
      setPurchaseMessage('');
    }, 3000);
  };

  const handleEmptyCartClick = () => {
    onClearCart();
    setPurchaseMessage('Cart has been emptied.');
  };

  return (
    <div className="cart-summary">
      <h3>Total Price: ${totalPrice}</h3>
      {cartItems.length > 0 && <PurchaseButton onClick={handlePurchaseClick} purchaseMessage="" />}
      {cartItems.length > 0 && <EmptyCartButton onEmptyCart={handleEmptyCartClick} />}
      <button onClick={onNavigateToProducts}>Back to Products</button>
    </div>
  );
}
