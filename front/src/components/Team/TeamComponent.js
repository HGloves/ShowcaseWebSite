//Imports
import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Icon } from 'antd';

//Style
import "./TeamComponent.css";

//Images
import Baudonnel from '../../ressources/images/CBaudonnel.jpg';
import Monjo from '../../ressources/images/CMonjo.jpg';
import Albiges from '../../ressources/images/NAlbiges.jpg';
import Laget from '../../ressources/images/ALaget.jpg';
import Cayrier from '../../ressources/images/BCayrier.jpg';
import Lesueur from '../../ressources/images/LLesueur.jpg';
import Rigal from '../../ressources/images/DRigal.jpg';
import Chaptal from '../../ressources/images/CChaptal.jpeg';
import Codinach from '../../ressources/images/HCodinach.jpeg';

class TeamComponent extends Component {

    state = {
        members: [
        {
            alt: 'CBaudonnel',
            name: 'Clément Baudonnel',
            birthDate: '1998-11-30',
            pic: Baudonnel,
            networks: [
                {
                    type: 'linkedin',
                    link: 'https://www.linkedin.com/in/baudonnel-clement/'
                },
                {
                    type: 'facebook',
                    link: 'https://www.facebook.com/profile.php?id=100009867942790'
                }
            ]
        },
        {
            alt: 'CMonjo',
            name: 'Camille Monjo',
            birthDate: '1998-03-12',
            pic: Monjo,
            networks: [
                {
                    type: 'linkedin',
                    link: 'https://www.linkedin.com/in/camille-monjo/'
                },
                {
                    type: 'facebook',
                    link: 'https://www.facebook.com/camille.monjo'
                },
                {
                    type: 'instagram',
                    link: 'https://www.instagram.com/monjocamille/'
                }]
        },
        {
            alt: 'NAlbiges',
            name: 'Nicolas Albiges',
            birthDate: '1999-09-22',
            pic: Albiges,
            networks: [
                {
                    type: 'linkedin',
                    link: 'https://www.linkedin.com/in/nicolas-albiges/'
                },
                {
                    type: 'facebook',
                    link: 'https://www.facebook.com/nicolas.albiges'
                }
            ]
        },
        {
            alt: 'ALaget',
            name: 'Antoine Laget',
            birthDate: '1998-03-10',
            pic: Laget,
            networks: [
                {
                    type: 'linkedin',
                    link: 'https://www.linkedin.com/in/antoine-laget-007b2b177/'
                },
                {
                    type: 'facebook',
                    link: 'https://www.facebook.com/antoine.laget'
                }
            ]
        },
        {
            alt: 'BCayrier',
            name: 'Baptiste Cayrier',
            birthDate: '1999-04-22',
            pic: Cayrier,
            networks: [
                {
                    type: 'linkedin',
                    link: 'https://www.linkedin.com/in/baptiste-cayrier-0b0760152/'
                },
                {
                    type: 'facebook',
                    link: 'https://www.facebook.com/batyste.cayrier'
                }
            ]
        },
        {
            alt: 'LLesueur',
            name: 'Lilian Lesueur',
            birthDate: '1998-10-21',
            pic: Lesueur,
            networks: [
                {
                    type: 'linkedin',
                    link: 'https://www.linkedin.com/in/lilian-lesueur-9b10a4167/'
                },
                {
                    type: 'facebook',
                    link: 'https://www.facebook.com/lilian.lesueur.353'
                }
            ]
        },
        {
            alt: 'DRigal',
            name: 'Dorian Rigal',
            birthDate: '2000-02-09',
            pic: Rigal,
            networks: [
                {
                    type: 'linkedin',
                    link: 'https://www.linkedin.com/in/dorian-rigal-901947158/'
                },
                {
                    type: 'facebook',
                    link: 'https://www.facebook.com/toad.bill?ref=br_rs'
                }
            ]
        },
        {
            alt: 'CChaptal',
            name: 'Clément Chaptal',
            birthDate: '1999-02-11',
            pic: Chaptal,
            networks: [
                {
                    type: 'linkedin',
                    link: 'https://www.linkedin.com/in/cl%C3%A9ment-chaptal-13bb13161/'
                },
                {
                    type: 'facebook',
                    link: 'https://www.facebook.com/profile.php?id=100006788836075'
                }
            ]
        },
        {
            alt: 'HCodinach',
            name: 'Hugo Codinach',
            birthDate: '1999-12-26',
            pic: Codinach,
            networks: [
                {
                    type: 'linkedin',
                    link: 'https://www.linkedin.com/in/hugo-codinach/'
                },
                {
                    type: 'facebook',
                    link: 'https://www.facebook.com/hugo.codinach.3'
                }
            ]
        },
    ]
    }

    computeAge = birthdatestr => {
        let birthDate = new Date(birthdatestr);
        let ageDifMs = Date.now() - birthDate.getTime();
        let ageDate = new Date(ageDifMs);

        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    render() {
        const { members } = this.state;

        return (
            <div className="teamContainer">
                {members.map((member, key) => {
                    return (
                        <Card key={key} className="teamMemberCard">
                            <img key={key} alt={member.alt} className="teamMemberPic" src={member.pic} />
                            <CardContent className='teamMemberContent'>
                                <span key={key} className='teamMemberName'>{member.name}</span>
                                <span className='teamMemberAge'>{this.computeAge(member.birthDate)} ans</span>
                            </CardContent>
                            <CardActions>
                                {member.networks.map((network, nKey) => {
                                    return (
                                        <Icon
                                        key={nKey}
                                        type={network.type}
                                        className="teamMemberNetwork"
                                        onClick={() => window.open(network.link, "_blank")}
                                        />
                                    );
                                })}
                            </CardActions>
                        </Card>
                    );
                })}
            </div>
        )
    }
}

export default TeamComponent;