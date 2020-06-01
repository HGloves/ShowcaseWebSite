import React, { Component } from 'react';

import {Editor, EditorState, RichUtils} from 'draft-js';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import CodeIcon from '@material-ui/icons/Code';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import './email.css'

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class EmailMobileComponent extends Component {



	state = {
		editorState: EditorState.createEmpty(),
		open: true,
		message: '',
		mailObject: '',
		emailAdress: '',
		isMailAble: true,
		snackbarParam: {
			open: false,
			vertical: 'bottom',
			horizontal: 'center',
			severity: 'success',
			content: '',
			error: false,
		},
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

	sendMail = () => {
		this.setState({
			isEmailable: false
		});
		var formData = {
			from : this.state.emailAdress,
			subject: this.state.mailObject,
			html: this.editor.editor.innerHTML

		};
		const encodeFormData = (data) => {
			return Object.keys(data)
				.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
				.join('&');
		};
		fetch('http://localhost:3300/contact/mail/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Access-Control-Allow-Origin': '*',
				'Accept': 'application/json',
				'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS'
			},
			body : encodeFormData(formData),
		}).then((response) => {
			if (response.ok) {
				response.json()
				this.clearForm();
				this.setState({
					isEmailable: true,
					snackbarParam: {
						open: true,
						vertical: 'bottom',
						horizontal: 'center',
						severity: 'success',
						content: 'Email envoyé !',
						error: true,
					},
				})
			} else {
				this.setState({
					isEmailable: true,
					snackbarParam: {
						open: true,
						vertical: 'bottom',
						horizontal: 'center',
						severity: 'error',
						content: 'Erreur dans l\'envoie du mail !',
						error: true,
					},
				})
			}})
			.then((responseData) => {
				return responseData;
			}).catch(function(error) {
				console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
			});
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

	handleemailAdress = event => {
		this.setState({
			emailAdress: event.target.value,
		});
	}

	focus = () => {
		this.editor.focus();
	};


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
		return this.isEmailValid() && this.isMailObjectValid() && this.isMailContentValid() && this.state.isMailAble;
	}

	clearForm = () => {
		this.setState({
			editorState: EditorState.createEmpty(),
			mailObject: '',
			emailAdress: '',
		});
	}


	handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		this.setState({
			snackbarParam: {
				open: false,
				vertical: 'bottom',
				horizontal: 'center',
				severity: 'success',
				content: 'Error in mail',
				error: true,
			},
		})
	};


	render() {
		const { editorState, mailObject, emailAdress, snackbarParam } = this.state;

		return (
			<div className="contactMobileContainer">
				<div className="contactMobileHeaderTF">
					<TextField required label="Destinataire" value='hgloves.ftc@gmail.com' disabled fullWidth />
				</div>
				<div className="contactMobileHeaderTF">
					<TextField required label="Votre Email" value={emailAdress} onChange={this.handleemailAdress} fullWidth />
				</div>
				<div className="contactMobileHeaderTF">
					<TextField required label="Objet" value={mailObject} onChange={this.handleMailObj} fullWidth />
				</div>
				<div className="contactMobileEditorContainer" onClick={this.focus}>
					<Editor
						editorState={editorState}
						handleKeyCommand={this.handleKeyCommand}
						onChange={this.editorHandle}
						ref={(element) => { this.editor = element; }} />
				</div>
				<div className="contactMobileToolBarContainer">
					<div className="contactMobileTool" onClick={this._onCodeClick}><CodeIcon className="contactMobileToolIcon"/></div>
					<div className="contactMobileTool" onClick={this._onItalicClick}><FormatItalicIcon className="contactMobileToolIcon" /></div>
					<div className="contactMobileTool" onClick={this._onStrikeThroughClick}><StrikethroughSIcon className="contactMobileToolIcon" /></div>
					<div className="contactMobileTool" onClick={this._onUnderlineClick}><FormatUnderlinedIcon className="contactMobileToolIcon" /></div>
					<div className="contactMobileTool" onClick={this._onBoldClick}><FormatBoldIcon className="contactMobileToolIcon" /></div>
				</div>
				<div className="contactMobileSendButtonContainer">
					<Button disabled={!this.isMailFormValid()} variant="contained" color="primary" onClick={this.sendMail}>
						Envoyer
					</Button>
					<Snackbar open={snackbarParam.open} autoHideDuration={6000} onClose={this.handleClose}>
						<Alert onClose={this.handleClose} severity={snackbarParam.severity}>
							{snackbarParam.content}
						</Alert>
					</Snackbar>
				</div>
			</div>
		)
	}
}

export default EmailMobileComponent;
