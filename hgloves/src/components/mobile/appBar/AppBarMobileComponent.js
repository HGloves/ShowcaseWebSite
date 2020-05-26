//Imports
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

//Style
import './AppBarMobileComponent.css';

//Images
import LOGO from '../../../ressources/logo/appBarLogo.png';

class AppBarMobileComponent extends Component {

    state = {
        tabs: [
            { name: 'HGloves', id: 'hgloves', current: true },
            { name: 'Problématique', id: 'problematic', current: false },
            { name: 'Solution', id: 'solution', current: false },
            { name: 'L\'équipe', id: 'team', current: false },
            { name: 'Acteurs', id: 'actors', current: false },
            { name: 'Contact', id: 'contact', current: false },
            { name: 'News', id: 'blog', current: false },
        ]
    }

    handleScroll = (component, key) => {
        const { tabs } = this.state;

        document.getElementById(component).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        let tmp = [...tabs];

        for (let i = 0; i !== tmp.length; i += 1)
            tmp[i].current = false;
        tmp[key].current = true;
        this.setState({
            tabs: [...tmp]
        })
    }

    render() {
        const { tabs } = this.state;

        return (
            <div className="AppBarMobileComponentContainer">
                <div className='AppBarMobileLogoContainer'>
                    <img className='AppBarMobileLogo' alt='logo' src={LOGO} />
                </div>
                <div className='AppBarMobileTabContainer'>
                    {tabs.map((tab, key) => {
                        return (
                            <div key={key} className='AppBarMobileTabDiv'>
                                <Typography
                                    className='AppBarMobileTab'
                                    key={key}
                                    style={{ fontWeight: 'bold', fontSize: '2vw' }}
                                    color='primary'
                                    onClick={() => this.handleScroll(tab.id, key)}
                                >
                                    {tab.name}
                                </Typography>
                                <div style={tab.current ? { width: '50%', height: '2px', backgroundColor: '#1C3956' } : {}} />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default AppBarMobileComponent;