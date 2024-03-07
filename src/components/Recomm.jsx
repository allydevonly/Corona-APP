import React from 'react';
import { Link } from 'react-router-dom'; 
import './recomm.css';

const Recomm1 = () => {

  return (
        <div className='container2'> <h1 >Recommandations officielles</h1>
    <div className="container1">

      <div className="left-content1">
      <p>
        <span className='blackp' >Si vous pensez être malade,</span><br />
          évitez les endroits publics.<br />
          Ne rendez pas visite aux personnes fragiles.<br />
          Évitez de sortir de chez vous.<br />
          Respectez les mesures barrière (lavage de main, masque).<br />
          Surveillez vos symptômes, l’évolution de votre température<br />
          corporelle et recherchez un avis médical.<br />
        </p>
      </div>
      <div className="right-content1">
        <h1 className='apple'>Apple Gratuit</h1>
        <button className='btn1'>080 100 47 47
</button>
        <br></br>
        <Link className='my-link' to="/another-page">www.sante.gov.ma</Link>
      </div>
    </div>

    </div>
  );
}

export default Recomm1;
