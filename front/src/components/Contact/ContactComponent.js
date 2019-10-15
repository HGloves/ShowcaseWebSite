//Imports
import React, { Component } from 'react'
import {Editor, EditorState, RichUtils} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';

//Antd
import {Icon} from 'antd';

//Material
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

//Style
import "./ContactComponent.css";

//Services
import ContactService from '../../services/contactService'
import { Snackbar } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

class ContactComponent extends Component {

    state = {
        editorState: EditorState.createEmpty(),
        mailObject: '',
        emailAdress: '',
        snackbarParam: {
            open: false,
            vertical: 'bottom',
            horizontal: 'center',
            content: '',
            error: false,
        },
        loading: false,
    }

    editorHandle = status => {
        this.setState({
            editorState: status,
        });
    }

    handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);

        if (newState)
          this.editorHandle(newState);
    }

    _onBoldClick = () => {
        this.editorHandle(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }

    _onCodeClick = () => {
        this.editorHandle(RichUtils.toggleInlineStyle(this.state.editorState, 'CODE'));
    }

    _onItalicClick = () => {
        this.editorHandle(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
    }

    _onStrikeThroughClick = () => {
        this.editorHandle(RichUtils.toggleInlineStyle(this.state.editorState, 'STRIKETHROUGH'));
    }

    _onUnderlineClick = () => {
        this.editorHandle(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
    }

    handleMailObj = event => {
        this.setState({
            mailObject: event.target.value
        });
    }

    sendMail = () => {
        const { mailObject, emailAdress, snackbarParam, loading } = this.state;

        this.setState({ loading: true });
        ContactService.sendMail({
            from: emailAdress,
            to: 'hgloves.ftc@gmail.com',
            subject: mailObject + " - " + emailAdress,
            html: this.editor.editor.innerHTML
        })
        .then(data => {
            this.setState({ loading: false });
            this.editSnackbar({...snackbarParam, content: 'Votre email a bien été envoyé', error: false});
            this.openSnackbar();
            this.clearForm();
        })
        .catch(error => {
            this.setState({ loading: false });
            this.editSnackbar({...snackbarParam, content: 'Un problème a eu lieu. Veuillez réessayer', error: true});
            this.openSnackbar();
        });
    }

    handleemailAdress = event => {
        this.setState({
            emailAdress: event.target.value,
        });
    }

    focus = () => {
        this.editor.focus();
    };

    editSnackbar = newSnackbar => {
        const { snackbarParam } = this.state;

        this.setState({
            snackbarParam: {...newSnackbar}
        });
    }

    openSnackbar = () => {
        const { snackbarParam } = this.state;

        this.setState({
            snackbarParam: {...snackbarParam, open: true}
        });
    }

    closeSnackbar = () => {
        const { snackbarParam } = this.state;

        this.setState({
            snackbarParam: {...snackbarParam, open: false}
        });
    }

    isEmailValid = () => {
        const { emailAdress } = this.state;

        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(emailAdress).toLowerCase());
    }

    isMailObjectValid = () => {
        const { mailObject } = this.state;

        return mailObject.trim() != '';
    }

    isMailContentValid = () => {
        const content = this.editor.editor.innerText;

        return content.trim() != '';
    }

    isMailFormValid = () => {
        return this.isEmailValid() && this.isMailObjectValid() && this.isMailContentValid();
    }

    clearForm = () => {
        this.setState({
            editorState: EditorState.createEmpty(),
            mailObject: '',
            emailAdress: '',
        });
    }
    

    render() {
        const { classes } = this.props;
        const { editorState, mailObject, emailAdress, snackbarParam, loading } = this.state;

        return (
            <div className="contactContainer">
                <div className="contactHeaderTF">
                    <TextField required label="Destinataire" value='hgloves.ftc@gmail.com' disabled fullWidth/>
                </div>
                <div className="contactHeaderTF">
                    <TextField required label="Votre Email" value={emailAdress} onChange={this.handleemailAdress} fullWidth/>
                </div>
                <div className="contactHeaderTF">
                    <TextField required label="Objet" value={mailObject} onChange={this.handleMailObj} fullWidth/>
                </div>
                <div className="contactEditorContainer" onClick={this.focus}>
                        <Editor
                            editorState={editorState}
                            handleKeyCommand={this.handleKeyCommand}
                            onChange={this.editorHandle}
                            ref={(element) => { this.editor = element; }}/>
                </div>
                <div className="contactToolBarContainer">
                    <div className="contactTool" onClick={this._onCodeClick}><Icon className="contactToolIcon" type="code"/></div>
                    <div className="contactTool" onClick={this._onItalicClick}><Icon className="contactToolIcon" type="italic"/></div>
                    <div className="contactTool" onClick={this._onStrikeThroughClick}><Icon className="contactToolIcon" type="strikethrough"/></div>
                    <div className="contactTool" onClick={this._onUnderlineClick}><Icon className="contactToolIcon" type="underline"/></div>
                    <div className="contactTool" onClick={this._onBoldClick}><Icon className="contactToolIcon" type="bold"/></div>
                </div>
                {loading ? <LinearProgress className='contactProgress' color='secondary' /> : null}
                <div className="contactSendButtonContainer">
                    <Button disabled={!this.isMailFormValid()} variant="contained" color="primary" onClick={this.sendMail}>
                        Envoyer
                    </Button>
                </div>
                <Snackbar
                    anchorOrigin={ snackbarParam.vertical, Snackbar.horizontal }
                    open={snackbarParam.open}
                    onClose={this.closeSnackbar}
                    message={
                        <div>
                            <span className="contactMailSnackbar">{snackbarParam.content}</span>
                        </div>
                    }
                    autoHideDuration={5000}
                    color='primary'
                    ContentProps={{
                        classes: {
                            root: (snackbarParam.error) ? classes.snackbarError : classes.snackbar
                        }
                    }}
                />
            </div>
        )
    }
}

const styles = theme => ({
    snackbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: theme.palette.primary.main,
    },
    snackbarError: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#b71c1c',
    },
});

export default (withStyles(styles)(ContactComponent));