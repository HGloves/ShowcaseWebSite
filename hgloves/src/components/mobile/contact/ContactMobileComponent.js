//Imports
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

//Style
import './ContactMobileComponent.css'

import FACEBOOK from '../../../ressources/logo/facebookOutlined.png';
import TWITTER from '../../../ressources/logo/twitterOutlined.png';
import INSTAGRAM from '../../../ressources/logo/instagramOutlined.png';

//Images

const typoStyle = {
    fontSize: '8vw',
    fontWeight: 'bold',
    backgroundImage: 'linear-gradient(to left, #1c3956, #584668, #895469, #a76c61, #af8f61)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginTop: '15%',
};

const socialNetworkd = [
    { name: "Facebook", image: FACEBOOK, link: 'https://www.facebook.com/HGlovesFTC/' },
    { name: "Twitter", image: TWITTER, link: 'https://twitter.com/HGlovesFTC' },
    { name: "Instagram", image: INSTAGRAM, link: 'https://www.instagram.com/hglovesftc/' },
];

class ContactMobileComponent extends Component {

    render() {
        return (
            <div className="ContactMobileComponentContainer" id='contact'>
                <div className='ContactMobileComponentContentContainer'>
                    <Typography style={typoStyle}>SUIVEZ-NOUS SUR NOS RÉSEAUX</Typography>
                    <div className='ContactMobileComponentSNContainer'>
                        {socialNetworkd.map((value, key) => {
                            return (
                                <img
                                alt={"Logo de " + value.name}
                                src={value.image}
                                key={key}
                                className='ContactMobileComponentSNImage'
                                onClick={() => window.open(value.link, "_blank")}/>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactMobileComponent;