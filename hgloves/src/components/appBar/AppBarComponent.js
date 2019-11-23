//Imports
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

//Style
import './AppBarComponent.css';

//Images
import LOGO from '../../ressources/logo/appBarLogo.png';

class AppBarComponent extends Component {

    state = {
        tabs: [
            { name: 'HGloves', id: 'hgloves', current: true },
            { name: 'Problématique', id: 'problematic', current: false },
            { name: 'Solution', id: 'solution', current: false },
            { name: 'L\'équipe', id: 'team', current: false },
            { name: 'Acteurs', id: 'actors', current: false },
            { name: 'Contact', id: 'actors', current: false },
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
            <div className="AppBarComponentContainer">
                <div className='AppBarLogoContainer'>
                    <img className='AppBarLogo' alt='logo' src={LOGO} />
                </div>
                <div className='AppBarTabContainer'>
                    {tabs.map((tab, key) => {
                        return (
                            <div key={key} className='appBarTabDiv'>
                                <Typography
                                    className='AppBarTab'
                                    key={key}
                                    style={{ fontWeight: 'bold' }}
                                    variant='h6'
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

export default AppBarComponent;