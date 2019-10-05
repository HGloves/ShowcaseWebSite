import AbstractService from './AbstractService';
import root from './.api_root';

class ContactService extends AbstractService {

    sendMail(mail) {
        return this.request({
            method: 'POST',
            url: root.REACT_APP_API_ROOT + 'contact/mail',
            json: Object.assign({}, mail)
        }).then(responseData => {
            if (responseData.ok) {
                return responseData.json();
            }
            throw responseData;
        });
    }
}

export default new ContactService();