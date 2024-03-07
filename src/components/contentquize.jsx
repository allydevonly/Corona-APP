import React, { useState } from 'react';
import { Link } from "react-router-dom"; 

import "./contentquize.css"


const Stepper = () => {
  return (


          <div className="stepper">


            <h2 className="question">Pensez-vous avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?</h2>



            <div className="options">
              <label className="option">
                <input type="radio" style={{ borderRadius: '50%' }} />
                Oui
              </label>
              <label className="option">
                <input type="radio" style={{ borderRadius: '50%' }} />
                Non
              </label>
            </div>
                <div class="button-group">
                  <button class="left-button">Question précédente</button>

                  <Link to="/result55">
                  <button class="right-button">Question suivante</button>
                  </Link>
                </div>

          </div>


  );
};

export default Stepper;
