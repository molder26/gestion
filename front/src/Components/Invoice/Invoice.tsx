import React from 'react';
import {Link }from 'react-router-dom';

function Invoice() {
  return (
         <div>
            <Link to='/'>
               <h2>Home</h2>
             </Link>
               <h1>Factura</h1>
       </div>
  )
}

export default Invoice