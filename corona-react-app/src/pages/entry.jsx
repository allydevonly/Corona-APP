import React from 'react'
import Entry1 from '../components/entrfr'
import NavBar from '../components/navbar';
import Recomm1 from '../components/Recomm';
import B4fotter from '../components/b4fotter';
import Footer from '../components/footer';
import Progfirst from '../components/firstprogressbar';

function Entry() {
  return (
    <div>
      <NavBar />  
      <Progfirst />
      <Entry1 />
      <Recomm1 />
      <B4fotter />
      <Footer />
    </div>
  )
}

export default Entry ;