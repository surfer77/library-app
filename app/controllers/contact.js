import Ember from 'ember';

export default Ember.Controller.extend({

    emailAdress: '',

    isValid: Ember.computed.and('emailAddress', 'message'),
    isDisabled: Ember.computed.not('isValid'),

    actions: {
    	sendMesage() {
            const email = this.get('emailAddress');
            const message = this.get('message');

            const newContact = this.store.createRecord('contact', {email:email, message:message});
            newContact.save().then((response) => {
            this.set('responseMessage', "We got your message and we’ll get in touch soon");
            this.set('emailAddress', "");
            this.set('message', "");
            });
			
    	}
    }

});
