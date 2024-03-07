import React from 'react';
import './symptömes.css';

const MyImageGallery = () => {
  return (
    <div className="my-gallery-container">
            <h1 className="gallery-title">Quels sont les symptomes a surveiller ?</h1>

          
      <div className="my-image-container">
        <img className="my-image-container" src="images\Screenshot_2024-03-02_060541-removebg-preview.png" alt="Image 1" width={250}/>
        <p className='dscrp'>Fiévre</p>
      </div>
      <div className="my-image-container">
        <img src="images\Calque 2.png" alt="Image 2" />
        <p className='dscrp'>Nausées<br></br>et vomissements</p>
      </div>
      <div className="my-image-container">
        <img src="images\Calque -2.png" alt="Image 3" />
        <p className='dscrp'>Géne<br></br>respiratoire</p>
      </div>
      <div className="my-image-container">
        <img src="images\Calque -9.png" alt="Image 4" />
        <p className='dscrp'>Toux et maux<br></br>de gorge</p>
      </div>

      </div>
  );
};

export default MyImageGallery;
