//Imports
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

//Style
import './SolutionMobileComponent.css'

import IMAGE from '../../../ressources/dot/solution.png';

//Images
import HAND from '../../../ressources/logo/hand.png';

class SolutionMobileComponent extends Component {

    render() {
        return (
            <div className="SolutionMobileComponentContainer" id='solution'>
                <div className='SolutionMobileComponentContentContainer'>
                    <div className='SolutionMobileComponentContent'>
                        <div className='SolutionMobileComponentSide'>
                            <div className='SolutionMobileComponentLeftContainer'>
                                <Typography variant='h5' color='primary' style={{ fontWeight: 'bold', marginBottom: '20px' }}>Solution</Typography>
                                <Typography variant='subtitle1' color='primary' style={{ marginBottom: '20px' }}>Le projet HGloves se matérialise par un gant et un boitier, porté par une personne atteinte de surdicécité. Nos gants sont ainsi capables de retranscrire l'alphabet de Lorm en version "orale" grâce à un haut-parleur, comme le fait le Google Home par exemple. L'inverse est aussi possible, pour permettre à l'utilisateur du gant de comprendre ce qu'une personne lui dit oralement à l'aide d'un microphone et donnant enfin accès à la facilité de communication dont tous devraient disposer.</Typography>
                                <Typography variant='subtitle1' color='primary'>Notre solution propose ainsi quelque chose de novateur et offrant à son utilisateur une communication dans les deux sens. Et cela avec n'importe qui.</Typography>
                            </div>
                        </div>
                        <img alt='solution' src={IMAGE} className='SolutionMobileComponentRightContainer' />
                    </div>
                </div>
            </div>
        );
    }
}

export default SolutionMobileComponent;