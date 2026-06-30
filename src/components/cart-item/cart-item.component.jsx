<<<<<<< HEAD
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

=======
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

>>>>>>> c808f9da6df0166434a2294a260f16ec10da800f
export default CartItem;