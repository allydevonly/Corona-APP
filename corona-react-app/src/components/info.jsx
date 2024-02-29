import React from 'react';
import './info.css';



const MyComponent = () => {
  return (
    
    <div className="container">
      <div className="left">
        <h1>Informations</h1>
        <p>Obtenez des informations a jour<br></br>en provenance de Gouvernement.fr</p>
      </div>
      <div className="center">
      <a href="https://www.covidmaroc.ma/Pages/AccueilAR.aspx">
        <button className='btnb' >http://www.covidmaroc.ma</button>
        </a>
      </div>
      <div className="right">
        <button className='btnb1'>Ce qu'il faut savoir</button>
      </div>
    </div>
    
  );
};

export default MyComponent;

