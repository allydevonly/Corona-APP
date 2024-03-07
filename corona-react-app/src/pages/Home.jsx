import React from 'react';
import NavBar from '../components/navbar';
import Hero from '../components/hero';
import ImageContentComponent from '../components/upper';
import Symptomes4 from '../components/symptomes4';
import Recomm1 from '../components/Recomm';
import B4fotter from '../components/b4fotter';
import Footer from '../components/footer';

function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ImageContentComponent />
      <Symptomes4 />
      <Recomm1 />
      <B4fotter />
      <Footer />
    </div>
  )
}

export default Home ;