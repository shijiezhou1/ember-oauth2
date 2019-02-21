import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import Ember from 'ember';

export default Controller.extend({
    session: Ember.inject.service('session'),

    login: null,
    password: null,

    actions:{
        logstuff(){
            this.transitionToRoute('students');
        },
        authenticate() {
            console.log(this.getProperties('login', 'password'));
            console.log('this.get session ' ,  this.get('session'));
            let { login, password } = this.getProperties('login', 'password');
            this.get('session').authenticate('authenticator:oauth2-custom', login, password)
                .then(() => {
                    this.set('successMessage', this.session.data.authenticated.successMessage);
                    let _this = this;
                    Ember.run.later((function() { 
                        _this.transitionToRoute('students');
                    }), 1000);
                }, (err) => {
                    this.set('errorMessage', err.error || err);
                });
        }
    }
});
