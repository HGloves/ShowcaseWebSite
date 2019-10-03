//Imports
import React, { Component } from 'react'

//Style
import "./HomeComponent.css";

//Images
import problem from '../../ressources/images/problem.jpg'
import solution from '../../ressources/images/solution.jpg'

class HomeComponent extends Component {

    render() {
        return (
            <div className="homeContainer">
                <div className="homeTitleContainer">
                    <span className="homeTitle">
                        HGloves
                    </span>
                    <span className="catchingSentence">
                        La communicaton à portée de main !
                    </span>
                </div>
                <div className="homeIntroContainer">
                    <div className="introContainer">
                        <img alt='problem' src={problem} className="homeIntroImage"/>
                        <span className="homeIntroTitle">Problème</span>
                        <span className="homeIntroContent">
                        En France, il y a <span className='homeIntroImp'>6500</span> personnes atteintes de <span className='homeIntroImp'>surdicécité</span> (sourds et aveugles). Ces personnes ont donc du <span className='homeIntroImp'>mal à communiquer</span>, ce qui leur fait perdre de l’<span className='homeIntroImp'>autonomie</span>, et n’ont aucun <span className='homeIntroImp'>lien social</span>, en dehors de leur assistant(e).<br /><br />
                        • Problèmes : Il existe <span className='homeIntroImp'>6500 SourdAveugles</span> en France. L'espérance de vie augmente, or les personnes qui sont sourdes ou aveugles vont de plus surement devenir SourdAveugles avec l'âge.<br />
                        • Douleur : <span className='homeIntroImp'>Perte d'autonomie</span>, peu ou aucun <span className='homeIntroImp'>liens sociaux</span> en dehors du milieu familiale et médicale. Les Solutions actuelles sont <span className='homeIntroImp'>inadaptées</span> et <span className='homeIntroImp'>obsolètes</span>.
                        </span>
                    </div>
                    <div className="introContainer">
                        <img alt='solution' src={solution} className="homeIntroImage"/>
                        <span className="homeIntroTitle">Solution</span>
                        <span className="homeIntroContent">
                            Des <span className='homeIntroImp'>gants</span> permettant aux sourdaveugles de <span className='homeIntroImp'>comprendre</span> et d’<span className='homeIntroImp'>être compris</span> par tous.<br /><br />
                            • Ces gants permettraient de <span className='homeIntroImp'>retranscrire</span>retranscrire l'alphabet de <span className='homeIntroImp'>Lorm</span> vocalement, pour permettre à l'auditeur d'entendre ce que le SourdAveugle a à dire.<br />
                            • La réponse orale de l'interlocuteur serait ensuite <span className='homeIntroImp'>retranscrite</span> via l'alphabet de <span className='homeIntroImp'>Lorm</span>, ressenti grâce au <span className='homeIntroImp'>gant</span>.
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeComponent;