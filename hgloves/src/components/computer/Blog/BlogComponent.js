//Imports
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

//Style
import Button from '@material-ui/core/Button';
import './BlogComponent.css'
import NEWSWEBSITE from '../../../ressources/NewsWebsite.png'

class BlogComponent extends Component {

    render() {
        return (
            <div className="BlogComponentContainer" id='blog'>
                <div className='BlogComponentContentContainer'>
                    <div className='BlogComponentContent'>
                        <div className='BlogComponentSide'>
                            <div className='BlogComponentLeftContainer'>
                                <Typography variant='h3' color='primary' style={{ fontWeight: 'bold', marginBottom: '20px' }}>News</Typography>
                                <Typography variant='subtitle1' color='primary' style={{ marginBottom: '20px' }}>Si vous souhaitez en apprendre plus sur notre projet HGLOVES vous pouvez rejoindre notre site de news.</Typography>
                                <Button variant="contained" size="large" color="primary" onClick={() => window.open("http://hgloves.tk:3000", "_blank")}>Rejoindre</Button>
                            </div>
                        </div>
                        <div className="BlogComponentImageContainer">
                            <img alt="éxemple d'article présent sur le site de news H.news" src={NEWSWEBSITE} className="BlogComponentImage"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogComponent;
