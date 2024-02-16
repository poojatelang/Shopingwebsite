import React from 'react'
import CartItem from "../CartItem"
import {  useSelector } from 'react-redux';

const Cart = () => {
  const {cart}=useSelector((state)=>state);
 
  return (

    <>
    <div >
      {
        cart && cart.length>0?(
          <div className="grid">
            {
              cart.map((cartitem)=><CartItem key={cartitem.id} cartitem={cartitem}/>)
            }
          </div>
        ):
        (
          <div><h3>No items in Cart</h3></div>
        )
      }
    </div>
   
    </>
  )
}

export default Cart