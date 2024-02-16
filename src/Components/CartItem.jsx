import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromCart } from './Store/Slice';

const CartItem = ({cartitem}) => {
  const dispatch=useDispatch();
  function handleremovefromcart(){
    dispatch(removeFromCart(cartitem.id));
  }
  return (
    <>
     <div className='productdetails'>
        <img src={cartitem?.image} alt={cartitem?.title}/>
        <h3>{cartitem?.title.toUpperCase()}</h3>
        <p>{cartitem?.description}</p>
        <p>Price:{cartitem?.price}</p>
        <p>Rating:{cartitem?.rating?.rate}</p>
        <div>
        <button className='btn1' onClick={handleremovefromcart}>Remove From cart</button>
        </div>
    </div>
    </>
  )
}

export default CartItem