<<<<<<< HEAD
import { useContext } from 'react';


import { CartContext } from '../../contexts/cart.context';

import {CartIconContainer, ShoppingIcon, ItemCount} from './cart-icon.styles.jsx';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount >{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

=======
import { useContext } from 'react';


import { CartContext } from '../../contexts/cart.context';

import {CartIconContainer, ShoppingIcon, ItemCount} from './cart-icon.styles.jsx';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount >{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

>>>>>>> c808f9da6df0166434a2294a260f16ec10da800f
export default CartIcon;