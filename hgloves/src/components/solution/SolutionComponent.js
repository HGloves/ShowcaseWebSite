//Imports
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

//Style
import './SolutionComponent.css'
import { Icon } from '@material-ui/core';

//Images
import HAND from '../../ressources/logo/hand.png';

class SolutionComponent extends Component {

    render() {
        return (
            <div className="SolutionComponentContainer" id='solution'>
                <div className='SolutionComponentContentContainer'>
                    <img alt='hand' src={HAND} className='SolutionComponentHand'/>
                    <div className='SolutionComponentContent'>
                        <div className='SolutionComponentSide'>
                            <div className='SolutionComponentLeftContainer'>
                                <Typography variant='h3' color='primary' style={{ fontWeight: 'bold', marginBottom: '20px' }}>Solution</Typography>
                                <Typography variant='subtitle1' color='primary' style={{ marginBottom: '20px' }}>Le projet HGloves se matérialise par un gant et un boitier, porté par une personne atteinte de surdicécité. Nos gants sont ainsi capables de retranscrire l'alphabet de Lorm en version "orale" grâce à un haut-parleur, comme le fait le Google Home par exemple. L'inverse est aussi possible, pour permettre à l'utilisateur du gant de comprendre ce qu'une personne lui dit oralement à l'aide d'un microphone et donnant enfin accès à la facilité de communication dont tous devraient disposer.</Typography>
                                <Typography variant='subtitle1' color='primary'>Notre solution propose ainsi quelque chose de novateur et offrant à son utilisateur une communication dans les deux sens. Et cela avec n'importe qui.</Typography>
                            </div>
                        </div>
                        <div className='SolutionComponentRightContainer' />
                    </div>
                </div>
            </div>
        );
    }
}

export default SolutionComponent;