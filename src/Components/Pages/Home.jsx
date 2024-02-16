import React, { useState } from 'react'
import { useEffect } from 'react';
import Productitem from "../Productitem"

const Home = () => {
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(false);
  async function getShoppindata(){
    try {
      setLoading(true);
      let res=await fetch("https://fakestoreapi.com/products");
      let data=await res.json();
      console.log(data)
      setProducts(data);
      setLoading(false);

    } catch (error) {
       console.log(error);
       setLoading(false);
    }
  }
  useEffect(()=>{
    getShoppindata();
  },[])
  return (
    <>
    <div>
        <div>
          {
            products && products.length>0?(
              <div className='grid'>
               {
                 products.map((product)=>
                 <Productitem key={product.id} product={product}/>)
               }
              </div>
            ):null
          }
        </div>
    </div>
    </>
  )
}

export default Home