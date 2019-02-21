import Route from '@ember/routing/route';
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
    beforeModel() {
        console.log('student route');
        // if(this.get('session').data.isAuthenticated === true){
        //     console.log(this.store.findAll('student'));
        //     return;
        //     return this.store.findAll('student');
        // }
    }
});
