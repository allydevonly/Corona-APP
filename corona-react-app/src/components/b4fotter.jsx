import React from 'react';
import { Link } from 'react-router-dom';
import './b4fotter.css';


const B4fotter = () => {
  return (
    <div className="container3">
      <h1 className='title8'>Vous pensez avoir été exposé au Coronavirus COVID-19 et avez des symptômes ?</h1>
      <img src="images\élément-1@2x.png" width={80} alt="Small Image" />
      <Link to="/cntn">
        <button className='btn40'>Demarer le test</button>
      </Link>
    </div>
  );
}

export default B4fotter;
