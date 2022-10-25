import React from 'react';
import {Link }from 'react-router-dom';

function Product() {
  return (
       <div>
           <Link to='/'>
             <h2>Home</h2>
           </Link>
             <h1>Product</h1>
        </div>
  )
}

export default Product