import React from 'react'
import "./footer.css"

function Footer() {
  return (

      <div>
    <div className="container111">
      <div className="left11">
        <button className='btn2'>FRAN </button>  <br />
        <button className='btn5' >Accueil</button><br />
        <button className='btn3'>Conseil</button><br />
      </div>
      
      <div className="center7">
      <p  className='p10'>Contacts utile</p>
          <p  className='p11'>Chiffre économique "Alo épidémie vigilance"</p>
          <p className='p12'>080 100 47 47</p>
          <p className='p13'>Aide médicale urgente</p>
          <p className='p14'>114</p>
      </div>
      
      <div className="right8">
      <p className='right9' >Algorithme d'orientation mis à jour sur les recommandations en vigueur<br />
          au 22/03/2020 à 16h15. Ce site d’information n’est pas un dispositif médical,<br />
          il ne délivre pas d’avis médical. Projet solidaire d'urgence,financé par l’Alliance<br />
          Digitale contre le COVID-19 : @maladiecovid19</p>
      </div>
    </div>
      <div className='foot'></div>
</div>

  );
}

export default Footer;