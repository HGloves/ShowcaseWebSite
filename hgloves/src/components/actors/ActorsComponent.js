//Imports
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import Actors from './Actors';

//Style
import './ActorsComponent.css'
import { Icon, Tooltip, Zoom } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

class ActorsComponent extends Component {

    render() {
        return (
            <div className="ActorsComponentContainer" id='actors'>
                <div className='ActorsComponentBegin' />
                <div className='ActorsComponentLeft' />
                <div className="ActorsComponentContentContainer">
                    {Actors.map((actor, key) => {
                        return (
                            <div key={key} className='ActorsComponentCardContainer'>
                                <div key={key} className='ActorsComponentCardContent'>
                                    <Icon color='primary' style={{ fontSize: '6vw' }}>{actor.icon}</Icon>
                                    <Typography variant='h5' color='primary' style={{ fontWeight: 'bold' }}>{actor.name}</Typography>
                                    <Typography variant='subtitle1' color='primary'>{actor.subtitle}</Typography>
                                </div>
                                <HtmlTooltip TransitionComponent={Zoom}
                                    placement="top"
                                    title={
                                        <React.Fragment>
                                            <Typography color="primary" variant='h6' style={{ fontWeight: 'bold' }}>{actor.name}</Typography>
                                            {actor.iconContent()}
                                        </React.Fragment>
                                    }
                                >
                                    <Icon className='ActorsComponentCardButton' color='primary' style={{ fontSize: '3vw' }} >info</Icon>
                                </HtmlTooltip>
                            </div>
                        );
                    })}
                </div>
                <div className='ActorsComponentEnd' />
            </div>
        );
    }
}

const HtmlTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: 'white',
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        maxWidth: '27vw',
    },
}))(Tooltip);

export default ActorsComponent;