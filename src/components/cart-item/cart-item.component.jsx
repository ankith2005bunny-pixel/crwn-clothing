import {CartItemContainer, Name} from  "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, quantity,imageUrl,price } = cartItem;

  return (
    <CartItemContainer>
    <img src={imageUrl} alt={`${name}`} />
    <div className='item-details'></div>
      <Name>{name}</Name>
      <span className='price'>
        {quantity} x ${price} </span>
    </CartItemContainer>
  );
};

export default CartItem;