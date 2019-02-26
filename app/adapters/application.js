import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:application',
  host: 'http://localhost:3000',
  // authorize( xhr ) {
  //   let access_token = this.get( 'session.data.authenticated.access_token' );
  //   console.log('in router');
  //   xhr.setRequestHeader( 'Authorization', `Bearer ${access_token}` );
  // }
});
