//Imports
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

//Style
import './BlogMobileComponent.css'
import Button from "@material-ui/core/Button";


class BlogMobileComponent extends Component {

    render() {
        return (
            <div className="BlogComponentContainer" id='blog'>
                <div className='BlogComponentContentContainer'>
                    <div className='BlogComponentContent'>
                        <div className='BlogComponentSide'>
                            <div className='BlogComponentLeftContainer'>
                                <Typography variant='h3' color='primary' style={{ fontWeight: 'bold', marginBottom: '20px' }}>News</Typography>
                                <Typography variant='subtitle1' color='primary' style={{ marginBottom: '20px' }}>Si vous souhaitez en apprendre plus sur notre projet HGLOVES vous pouvez rejoindre notre site de news.</Typography>
                                <Button disabled variant="contained" size="large" color="primary" href="hgloves.tk">Rejoindre</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogMobileComponent;