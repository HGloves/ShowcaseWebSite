//Imports
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import ItemsCarousel from 'react-items-carousel';

//Data
import Members from './Members';

//Style
import './TeamMobileComponent.css'
import { Icon, IconButton } from '@material-ui/core';

//Images

class TeamMobileComponent extends Component {

    state = {
        chevronWidth: 40,
        activeItemIndex: 0,
        members: [...Members],
        intervalID: 0,
    };

    componentDidMount() {
        let intervalId = setInterval(this.swapActiveItemIndex, 3000);
        this.setState({ intervalId: intervalId });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    swapActiveItemIndex = () => {
        const { activeItemIndex, members } = this.state;
        let newIndex = (activeItemIndex + 1 === members.length) ? 0 : activeItemIndex + 1;
        this.setState({
            activeItemIndex: newIndex,
        })
    }

    setActiveItemIndex = event => {
        this.setState({
            activeItemIndex: event,
        });
    }

    computeAge = birthDateStr => {
        let birthDate = new Date(birthDateStr);
        let ageDifMs = Date.now() - birthDate.getTime();
        let ageDate = new Date(ageDifMs);

        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    handeSocialNetworkOver = (memberKey, snKey, status) => {
        const { members } = this.state;
        let tmp = [...members];

        tmp[memberKey].networks[snKey].hoverStatus = status;
        this.setState({
            members: tmp,
        });
    };

    render() {
        const { activeItemIndex, members } = this.state;

        return (
            <div className="TeamMobileComponentContainer" id='team'>
                <div>
                    <ItemsCarousel
                        requestToChangeActive={this.setActiveItemIndex}
                        activeItemIndex={activeItemIndex}
                        numberOfCards={1}
                        leftChevron={<IconButton color='primary'><Icon>keyboard_arrow_left</Icon></IconButton>}
                        rightChevron={<IconButton color='primary'><Icon>keyboard_arrow_right</Icon></IconButton>}
                        disableSwipe={false}
                    >
                        {members.map((member, key) => {
                            return (
                                <div key={key} className='TeamMobileCarouselCardContainer'>
                                    <div key={key} className='TeamMobileCarouselImageContainer'>
                                        <img alt='Profile' src={member.pic} className='TeamMobileCarouselImage' />
                                    </div>
                                    <div className='TeamMobileCarouselContentContainer'>
                                        <div className='TeamMobileCarouselContentInfoContainer'>
                                            <Typography variant='h5' color='primary' style={{ fontWeight: 'bold' }}>{member.name}</Typography>
                                            <Typography variant='subtitle1' color='primary' style={{ fontWeight: 'bold', marginTop: '2%' }}>{this.computeAge(member.birthDate) + ' ans'}</Typography>
                                            <Typography variant='subtitle1' color='primary' style={{ fontWeight: 'bold', marginTop: '2%' }}>{member.pole}</Typography>
                                        </div>
                                        <div className='TeamMobileCarouselSocialNetworkContainer'>
                                            {member.networks.map((socialNetwork, keyN) => {
                                                return (
                                                    <img
                                                        className='TeamMobileCarouselSocialNetwork'
                                                        alt='logo'
                                                        key={keyN}
                                                        src={socialNetwork.hoverStatus ? socialNetwork.hover : socialNetwork.normal}
                                                        onMouseOver={() => this.handeSocialNetworkOver(key, keyN, true)}
                                                        onMouseOut={() => this.handeSocialNetworkOver(key, keyN, false)}
                                                        onClick={() => window.open(socialNetwork.link, "_blank")}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </ItemsCarousel>
                </div>
            </div>
        );
    }
}

export default TeamMobileComponent;