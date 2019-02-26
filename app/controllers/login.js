import Controller from '@ember/controller';
import Ember from 'ember';
import { inject as service } from '@ember/service';

export default Controller.extend({
    session: service(),

    login: null,
    password: null,

    model(){
        // console.log(this.get('session'));
    },

    actions:{
        logstuff(){
            console.log('object');
        },
        authenticate() {
            let { login, password } = this.getProperties('login', 'password');
            this.get('session').authenticate('authenticator:oauth2', login, password)
                .then(() => {
                    this.set('successMessage', this.session.data.authenticated.successMessage);
                    let _this = this;
                    // DELAY USE
                    // Ember.run.later((function() { 
                        _this.transitionToRoute('protected');
                    // }), 1000);
                }, (err) => {
                    this.set('errorMessage', err.error || err);
                });
        }
    }
});
