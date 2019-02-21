import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
    auth: Ember.inject.service('session'),
    actions: {
        logout() {
            localStorage.clear();
            console.log('auth ? ',this.auth);
            this.transitionToRoute('login');
            // this.get('auth').invalidate();
        }
    }
});
