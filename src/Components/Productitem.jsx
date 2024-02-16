import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { addToCart } from './Store/Slice';

const Productitem = ({product}) => {
    const dispatch=useDispatch();
    const {cart}=useSelector((state)=>state);
    function  handleaddToCart(){
        dispatch(addToCart(product));
    }
    function handleremovefromcart(){
        dispatch(removeFromCart(cartitem.id));
      }
    
  return (
    <>
    <div className='productdetails'>
        <img src={product?.image} alt={product?.title}/>
        <h3>{product?.title.toUpperCase()}</h3>
        <p>{product?.description}</p>
        <p>Price:{product?.price}</p>
        <p>Rating:{product?.rating?.rate}</p>
        <div>
        <button className='btn1' onClick={
            cart.some((item)=>item.id===product.id)?handleremovefromcart:handleaddToCart
        }>
            {
                cart.some((item)=>item.id===product.id)?"Remove From Cart":"Add to Cart"
            }
        </button>
        </div>
    </div>
    
    </>
  )
}

export default Productitem