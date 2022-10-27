import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

import style from './landengPage.module.css';

function LandingPage() {
  return (
    <>
      <NavBar />
    </>
    //   <nav className={style.navBarContainer}>
    //     <img alt='logo-gestion'/>
    //     <Link to='/client'>Cliente</Link>
    //     <Link to='/product'>Producto</Link>
    //     <Link to='/invoice'>Factura</Link>
    //     <Link to='/contact'>Contacto</Link>
    //     <Link to='/login'>Ingresar</Link>
    //     <Link to='/register'>Registrar</Link>
    //  </nav>
  )
}

export default LandingPage