import React from 'react';
import "./upper.css"
import { Link } from "react-router-dom";

const ImageContentComponent = () => {
  return (

    <div className="container222">
      <div className="image-container">
      <img className='imgleft' src="images\Screenshot 2024-03-05 162535.jpg" alt="Left Image"/>
      </div>

      <div className="content-container1">

        <h1 className="title6">Vous pensez avoir été exposé au<br></br>Coronavirus COVID-19 et avez des symptômes ?</h1>
        <img src="images\élément-1@2x.png" alt="Right Image" width="80px" />
        <p className="paragraph">
            Je reste vigilant ?
            <br></br>Je programme une téléconsultation ?
            <br></br>J'appelle le 15 ?
            <br></br>Faites le test pour répondre en citoye<br></br>n
            éclairé selon vos symptômes.
            </p>
            <Link to="/cntn">
        <button className="button">Demare le test</button>
            </Link>

      </div>
      
    </div>

);
};

export default ImageContentComponent;
