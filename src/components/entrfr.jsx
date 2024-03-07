import React from "react";
import "./entryfr.css"
import { Link } from "react-router-dom";

function Entry1  () {

          return(

            <div className="entryone" > 

              <div className="banner1">
                <div className="upperbanner" >

                <h1 className="titlehero" >introduction</h1>
                  <p className="infohero1" >
                    Cette application est gratuite, nous l’avons gérée pour permettre aux personnes qui  ont un cas avec le virus Corona 19 de connaître plus facilement leur situation et ce  qui ne va pas chez elles
                      Ils gèrent. Nous ne garantissons pas à 100% l’exactitude des informations fournies par cette application. L’utilisateur reconnaît que l’application, y compris :
                      Le test et les autres informations que je contiens ne constituent pas une recommandation, un examen, une prescription ou tout besoin de nature médicale.
                    </p>
                    <p className="sepline14">----------------------------------------------</p>
                    <p  className="infohero1" >    
                      Cette application ne rémunère pas votre médecin ou votre pharmacien pour vous       donner de meilleurs conseils. Ce n’est pas avant que je ne fasse bonjour
                      Consultez un médecin.<br />
                      Les informations de cette application sont le premier niveau, nous pouvons donc déterminer les cas possibles.
                    </p>

                </div>
              <Link to="/test" >
              <button className="unique-button2" >Nous commençons le test</button>
              </Link>

              </div>


            </div>

          )
}
export default Entry1 ;