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
                    <NavLink className='layoutNavlink' to='/about'>
                        <div className="tabBorder">
                        </div>
                        A PROPOS
                        <div className="tabBorder">
                        </div>
                    </NavLink>
                    </div>
                    <div className="tabContainer">
                    <NavLink className='layoutNavlink' to='/team'>
                        <div className="tabBorder">
                        </div>
                        L'EQUIPE
                        <div className="tabBorder">
                        </div>
                    </NavLink>
                    </div>
                    <div className="tabContainer">
                    <NavLink className='layoutNavlink' to='/contact'>
                        <div className="tabBorder">
                        </div>
                        <span>NOUS</span>
                        <span>CONTACTER</span>
                        <div className="tabBorder">
                        </div>
                    </NavLink>
                    </div>
                    <div className="tabContainer">
                    <NavLink className='layoutNavlink' to='/findUs'>
                        <div className="tabBorder">
                        </div>
                        <span>NOUS</span>
                        <span>TROUVER</span>
                        <div className="tabBorder">
                        </div>
                    </NavLink>
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