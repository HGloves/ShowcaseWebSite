//Imports
import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';

//Components
import AppBarComponent from '../computer/appBar/AppBarComponent';
import HGlovesComponent from '../computer/hgloves/HGlovesComponent';
import ProblematicComponent from '../computer/problematic/ProblematicComponent';
import SolutionComponent from '../computer/solution/SolutionComponent';
import TeamComponent from '../computer/team/TeamComponent';
import ActorsComponent from '../computer/actors/ActorsComponent';
import ContactComponent from '../computer/contact/ContactComponent';

import AppBarMobileComponent from '../mobile/appBar/AppBarMobileComponent';
import HGlovesMobileComponent from '../mobile/hgloves/HGlovesMobileComponent';
import ProblematicMobileComponent from '../mobile/problematic/ProblematicMobileComponent';
import SolutionMobileComponent from '../mobile/solution/SolutionMobileComponent';
import TeamMobileComponent from '../mobile/team/TeamMobileComponent';
import ActorsMobileComponent from '../mobile/actors/ActorsMobileComponent';
import ContactMobileComponent from '../mobile/contact/ContactMobileComponent';



import './Router.css'

class Router extends Component {

    render() {
        if (isMobile)
            return (
                <div className='RouterContainer'>
                    <AppBarMobileComponent />
                    <div className='RouterMobileContentContainer'>
                        <HGlovesMobileComponent />
                        <ProblematicMobileComponent />
                        <SolutionMobileComponent />
                        <TeamMobileComponent />
                        <ActorsMobileComponent />
                        <ContactMobileComponent />
                    </div>
                </div>
            )
        return (
            <div className='RouterContainer'>
                <AppBarComponent />
                <div className='RouterContentContainer'>
                    <HGlovesComponent />
                    <ProblematicComponent />
                    <SolutionComponent />
                    <TeamComponent />
                    <ActorsComponent />
                    <ContactComponent />
                </div>
            </div>
        );
    }
}

export default Router;