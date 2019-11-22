//Imports
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//Components
import AppBarComponent from '../appBar/AppBarComponent';
import HGlovesComponent from '../hgloves/HGlovesComponent';
import ProblematicComponent from '../problematic/ProblematicComponent';
import SolutionComponent from '../solution/SolutionComponent';
import TeamComponent from '../team/TeamComponent';

import './Router.css'

class Router extends Component {

    render() {
        return (
            <div className='RouterContainer'>
                <AppBarComponent/>
                <div className='RouterContentContainer'>
                    <HGlovesComponent/>
                    <ProblematicComponent/>
                    <SolutionComponent/>
                    <TeamComponent/>
                </div>
            </div>
        );
    }
}

export default Router;