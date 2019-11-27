//Imports
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import IMAGE from '../../../ressources/dot/problematic.png';

//Style
import './ProblematicMobileComponent.css'

//Images

class ProblematicMobileComponent extends Component {

    render() {
        return (
            <div className="ProblematicMobileComponentContainer" id='problematic'>
                <div className='ProblematicMobileTitleContainer'>
                    <Typography color='primary' variant='h4'>Le XXIème siècle est l'âge de la communication.</Typography>
                </div>
                <div className='ProblematicMobileContentContainer'>
                    <div className='ProblematicMobileSideContainer'>
                        <div className='ProblematicMobileTextContainer'>
                            <Typography variant='h6' color='primary' style={{ fontWeight: 'bold', marginBottom: '50px' }}>Problématique</Typography>
                            <Typography variant='subtitle1' color='primary' style={{ marginBottom: '50px' }}>Le moyen de communication le plus fiable pour les sourdsaveugles est l'alphabet de Lorm. Ce dernier leur permet via des pressions exercées sur leur main, de former des mots.</Typography>
                            <Typography variant='subtitle1' color='primary'>Il faut 2 heures pour apprendre cet alphabet, 6 mois de pratique quotidienne pour communiquer, et 1 an complet de pratique intense pour avoir un réel dialogue.</Typography>
                            <Typography variant='subtitle1' color='primary'>Ce moyen archaïque isole les personnes atteintes de surdicécité et rend très difficile le fait d'établir un dialogue avec.</Typography>
                        </div>
                    </div>
                    <div className='ProblematicMobileSideContainer'>
                        <img alt='problematic' src={IMAGE} className='ProblematicMobileImageContainer' />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProblematicMobileComponent;