//Imports
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import IMAGE from '../../../ressources/dot/brownLogo.png';

//Style
import './HGlovesMobileComponent.css'

class HGlovesMobileComponent extends Component {

    render() {
        return (
            <div className="HGlovesMobileComponentContainer" id='hgloves'>
                <div className='HGlovesMobileContentContainer'>
                    <div className='HGlovesMobileTextContainer'>
                        <Typography variant='subtitle2' color='primary' style={{ fontWeight: 'bold' }}>HGloves -</Typography>
                        <Typography variant='h5' color='primary' style={{ fontWeight: 'bold', marginTop: 10 }}>La communication à porté de main</Typography>
                        <Typography variant='subtitle2' color='primary' style={{ marginTop: 10 }}>Le projet HGloves se matérialise par un gant et un boitier, porté par une personne atteinte de surdicécité.</Typography>
                    </div>
                    <div className='HGlovesMobileImageContainer'>
                        <img className='HGlovesMobileImage' alt='Logo du projet étudiant HGloves' src={IMAGE} />
                    </div>
                </div>
            </div>
        );
    }
}

export default HGlovesMobileComponent;