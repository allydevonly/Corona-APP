 import React from 'react'
 import NavBar from '../components/navbar'
 import Hero from '../components/hero'
 import ImageGallery from '../components/protection'
 import MyImageGallery from '../components/symptömes'
 import MyComponent from '../components/info'
 import B4last from '../components/2imgs'
 import Recomm1 from '../components/Recomm';
import B4fotter from '../components/b4fotter';
import Footer from '../components/footer';
 
 function Conseil() {
   return (
     <div>
      <NavBar />
      <Hero />
      <ImageGallery />
      <MyComponent />
      <MyImageGallery />
      <B4last />
      <Recomm1 />
      <B4fotter />
      <Footer />
     </div>
   )
 }
 
 export default Conseil