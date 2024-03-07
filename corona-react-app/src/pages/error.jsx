import React from 'react'
import Error from '../components/error404';
import NavBar from '../components/navbar';
import Recomm1 from '../components/Recomm';
import B4fotter from '../components/b4fotter';
import Footer from '../components/footer';

function Errormain() {
  return (
    <div>
      <NavBar />
      <Error /> 
      <Recomm1 />
      <B4fotter />
      <Footer />
    </div>
  )
}

export default Errormain ;