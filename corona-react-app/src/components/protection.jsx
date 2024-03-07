// ImageGallery.js

import React from 'react';
import './protection.css';

const ImageGallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="title" >Comment se protéger et protéger<br></br>les autres au quotidien ?</h2>

      <div className="gallery-images">

        <div className="gallery-image">

          <img src="..\images\Calque -5 (3).png" alt="Image 1"  style={{ width: '140px', height: '120px' }}/>
          <h6 className="image-description1">Saluez sans serrer la main,<br></br>n'embrassez personne</h6>
        </div>

        <div className="gallery-image">
          <img src="..\images\Calque-19.png" alt="Image 2" />
          <p className="image-description">Lavez-vous tris<br></br>réguliérement Ies mains</p>
        </div>

        <div className="gallery-image">
          <img src="..\images\Calque -18.png" alt="Image 3"  />
          <p className="image-description">Portez un masque<br></br>si vous étes malade.</p>
        </div>
      </div>


      <div className="gallery-images">

        <div className="gallery-image">
          <img src="..\images\cough-svgrepo-com.png" alt="Image 4" />
          <p className="image-description">Toussez ou éternuez dans votre coude<br></br>ou dans un mouchoir</p>
        </div>

        <div className="gallery-image">
          <img src="..\images\Fichier 7.png" alt="Image 5"/>
          <p className="image-description">Évitez de toucher les yeux<br></br>Bouche de nez</p>
        </div>

        <div className="gallery-image" >
          <img src="..\images\Calque -21.png" alt="Image 6" />
          <p className="image-description">Évitez Ies rassemblements</p>
        </div>
      </div>

      <div className="gallery-images">
        <div className="gallery-image">
          <img src="..\images\icon-house.png" alt="Image 7"/>
          <p className="image-description">Restez chez vous, évitez tout contact avec les autres.<br></br>Certaines personnes transmettent le virus sans en ressentir<br></br>Ies symptömes.</p>
        </div>
        
      </div>
    </div>
  );
};






export default ImageGallery;
