//Imports
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import IMAGE from '../../../ressources/dot/brownLogo.png';

//Style
import './HGlovesComponent.css'

class HGlovesComponent extends Component {

    render() {
        return (
            <div className="HGlovesComponentContainer" id='hgloves'>
                <div className='HGlovesContentContainer'>
                    <div className='HGlovesTextContainer'>
                        <Typography variant='h5' color='primary' style={{ fontWeight: 'bold' }}>HGloves -</Typography>
                        <Typography variant='h2' color='primary' style={{ fontWeight: 'bold', marginTop: 10 }}>La communication à porté de main</Typography>
                        <Typography variant='h5' color='primary' style={{ marginTop: 10 }}>Le projet HGloves se matérialise par un gant et un boitier, porté par une personne atteinte de surdicécité.</Typography>
                    </div>
                    <div className='HGlovesImageContainer'>
                        <img className='HGlovesImage' alt='LOGO' src={IMAGE} />
                    </div>
                </div>
                <div className='HGlovesComponentEnd' />
            </div>
        );
    }
}

export default HGlovesComponent;