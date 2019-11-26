//Imports
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import ItemsCarousel from 'react-items-carousel';

import BG from '../../ressources/logo/socialNetwork.jpg';
import DOTS from '../../ressources/dot/cross.png';

//Style
import './ContactComponent.css'
import { Icon } from '@material-ui/core';

import FACEBOOK from '../../ressources/logo/facebookOutlined.png';
import TWITTER from '../../ressources/logo/twitterOutlined.png';
import INSTAGRAM from '../../ressources/logo/instagramOutlined.png';

//Images

const typoStyle = {
    fontSize: '5vw',
    fontWeight: 'bold',
    backgroundImage: 'linear-gradient(to left, #1c3956, #584668, #895469, #a76c61, #af8f61)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginTop: '15%',
};

const socialNetworkd = [
    { image: FACEBOOK, link: 'https://www.facebook.com/HGloves/' },
    { image: TWITTER, link: 'https://twitter.com/HGlovesFTC' },
    { image: INSTAGRAM, link: 'https://www.instagram.com/hglovesftc/' },
];

class ContactComponent extends Component {

    render() {
        return (
            <div className="ContactComponentContainer" id='contact'>
                <div className='ContactComponentContentContainer'>
                    <Typography style={typoStyle}>SUIVEZ-NOUS SUR NOS RÉSEAUX</Typography>
                    <div className='ContactComponentSNContainer'>
                        {socialNetworkd.map((value, key) => {
                            return (
                                <img
                                alt='logo'
                                src={value.image}
                                key={key}
                                className='ContactComponentSNImage'
                                onClick={() => window.open(value.link, "_blank")}/>
                            );
                        })}
                    </div>
                </div>
                <div className='ContactComponentImageContainer'>
                    <div className='ContactComponentImage'>
                        <img alt='dots' src={DOTS} className='ContactComponentDots' />
                        <img alt='bg' src={BG} style={{ width: '100%', zIndex: 1 }} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactComponent;