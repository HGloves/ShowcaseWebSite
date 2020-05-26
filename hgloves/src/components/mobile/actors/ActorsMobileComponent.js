//Imports
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import Actors from './Actors';

//Style
import './ActorsMobileComponent.css'

class ActorsMobileComponent extends Component {

    render() {
        return (
            <div className="ActorsMobileComponentContainer" id='actors'>
                <div className="ActorsMobileComponentContentContainer">
                    {Actors.map((actor, key) => {
                        return (
                            <div key={key} className='ActorsMobileComponentCardContainer'>
                                <div key={key} className='ActorsMobileComponentCardContentContainer'>
                                    <div key={key} className='ActorsMobileComponentCardContent'>
                                        <img alt={'Logo de ' + actor.name} src={actor.image} />
                                        <Typography variant='h5' color='primary' style={{ fontWeight: 'bold' }}>{actor.name}</Typography>
                                        <Typography variant='subtitle1' color='primary' style={{ marginBottom: 10 }}>{actor.subtitle}</Typography>
                                    </div>
                                    {/* {actor.iconContent()} */}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default ActorsMobileComponent;