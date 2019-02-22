import Route from '@ember/routing/route';
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
    beforeModel() {
        return this.store.findAll('student');
    }
});
