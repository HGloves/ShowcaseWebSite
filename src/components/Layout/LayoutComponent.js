//Imports
import React, { Component } from 'react'

//Style
import './LayoutComponent.css';

//Antd
import { Icon, Button } from 'antd';
import { NavLink } from 'react-router-dom';

import history from '../../utils/history';

class LayoutComponent extends Component {

    render() {
        return (
            <div className="layoutContainer">
                <span className="title">
                    HGloves
                </span>
                <div className="tabListContainer">
                    <div className="tabContainer">
                        <div className="tabBorder">
                        </div>
                        <NavLink className='navlink' to='/about'>A PROPOS</NavLink>
                        <div className="tabBorder">
                        </div>
                    </div>
                    <div className="tabContainer">
                        <div className="tabBorder">
                        </div>
                        <NavLink className='navlink' to='/team'>L'EQUIPE</NavLink>
                        <div className="tabBorder">
                        </div>
                    </div>
                    <div className="tabContainer">
                        <div className="tabBorder">
                        </div>
                        <NavLink className='navlink' to='/contact'>CONTACT</NavLink>
                        <div className="tabBorder">
                        </div>
                    </div>
                </div>
                <div className="socialNetworkContainer">
                    <Icon type="twitter" className="socialNetworkIcon"/>
                    <Icon type="linkedin" className="socialNetworkIcon"/>
                    <Icon type="facebook" className="socialNetworkIcon"/>
                    <Icon type="instagram" className="socialNetworkIcon"/>
                </div>
            </div>
        )
    }
}

export default LayoutComponent;