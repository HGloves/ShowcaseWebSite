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

class EmailComponent extends Component {



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
		})
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
		const { editorState, mailObject, emailAdress, snackbarParam } = this.state;

		return (
			<div className="contactContainer">
				<div className="contactHeaderTF">
					<TextField required label="Destinataire" value='hgloves.ftc@gmail.com' disabled fullWidth />
				</div>
				<div className="contactHeaderTF">
					<TextField required label="Votre Email" value={emailAdress} onChange={this.handleemailAdress} fullWidth />
				</div>
				<div className="contactHeaderTF">
					<TextField required label="Objet" value={mailObject} onChange={this.handleMailObj} fullWidth />
				</div>
				<div className="contactEditorContainer" onClick={this.focus}>
					<Editor
						editorState={editorState}
						handleKeyCommand={this.handleKeyCommand}
						onChange={this.editorHandle}
						ref={(element) => { this.editor = element; }} />
				</div>
				<div className="contactToolBarContainer">
					<div className="contactTool" onClick={this._onCodeClick}><CodeIcon className="contactToolIcon"/></div>
					<div className="contactTool" onClick={this._onItalicClick}><FormatItalicIcon className="contactToolIcon" /></div>
					<div className="contactTool" onClick={this._onStrikeThroughClick}><StrikethroughSIcon className="contactToolIcon" /></div>
					<div className="contactTool" onClick={this._onUnderlineClick}><FormatUnderlinedIcon className="contactToolIcon" /></div>
					<div className="contactTool" onClick={this._onBoldClick}><FormatBoldIcon className="contactToolIcon" /></div>
				</div>
				<div className="contactSendButtonContainer">
					<Button disabled={!this.isMailFormValid()} variant="contained" color="primary" onClick={this.sendMail}>
						Envoyer
					</Button>
				</div>
			</div>
		)
	}
}

export default EmailComponent;