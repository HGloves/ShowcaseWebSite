//Imports
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

//Style
import './ProblematicComponent.css'

//Images

class ProblematicComponent extends Component {

    render() {
        return (
            <div className="ProblematicComponentContainer" id='problematic'>
                <div className='ProblematicTitleContainer'>
                    <Typography color='primary' variant='h3'>Le XXIème siècle est l'âge de la communication.</Typography>
                </div>
                <div className='ProblematicContentContainer'>
                    <div className='ProblematicSideContainer'>
                        <div className='ProblematicImageContainer' />
                    </div>
                    <div className='ProblematicSideContainer'>
                        <div className='ProblematicTextContainer'>
                            <Typography variant='h3' color='primary' style={{ fontWeight: 'bold', marginBottom: '50px' }}>Problématique</Typography>
                            <Typography variant='subtitle1' color='primary' style={{ marginBottom: '50px' }}>Le moyen de communication le plus fiable pour les sourdsaveugles est l'alphabet de Lorm. Ce dernier leur permet via des pressions exercées sur leur main, de former des mots.</Typography>
                            <Typography variant='subtitle1' color='primary'>Il faut 2 heures pour apprendre cet alphabet, 6 mois de pratique quotidienne pour communiquer, et 1 an complet de pratique intense pour avoir un réel dialogue.</Typography>
                            <Typography variant='subtitle1' color='primary'>Ce moyen archaïque isole les personnes atteintes de surdicécité et rend très difficile le fait d'établir un dialogue avec.</Typography>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProblematicComponent;