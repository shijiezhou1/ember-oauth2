import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
    session: Ember.inject.service('session'),

    login: null,
    password: null,

    actions:{
        logstuff(){
            this.transitionToRoute('student');
        },
        authenticate() {
            let { login, password } = this.getProperties('login', 'password');
            this.get('session').authenticate('authenticator:oauth2-custom', login, password)
                .then(() => {
                    this.set('successMessage', this.session.data.authenticated.successMessage);
                    let _this = this;
                    Ember.run.later((function() { 
                        _this.transitionToRoute('student');
                    }), 1000);
                }, (err) => {
                    this.set('errorMessage', err.error || err);
                });
        }
    }
});
