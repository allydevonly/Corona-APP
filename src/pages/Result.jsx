import React from 'react'
import Result4 from '../components/Result.jsx';
import NavBar from '../components/navbar';
import Recomm1 from '../components/Recomm';
import B4fotter from '../components/b4fotter';
import Footer from '../components/footer';
import Progfirst from '../components/firstprogressbar';
import Endprog from '../components/endbar.jsx';

function Result41() {
  return (
    <div>
    <NavBar />  
      <Endprog />
      <Result4 />
      <Recomm1 />
      <B4fotter />
      <Footer />
      </div>
  )
}

export default Result41;