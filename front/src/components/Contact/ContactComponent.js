//Imports
import React, { Component } from 'react'

//Style
import "./ContactComponent.css";

//Services
import ContactService from '../../services/contactService'

class ContactComponent extends Component {

    sendMail = () => {
        ContactService.sendMail({})
        .then(data => {
        })
        .catch(error => {

        });
    }

    render() {
        return (
            <div className="" onClick={this.sendMail}>
                sendMail
            </div>
        )
    }
}

export default ContactComponent;