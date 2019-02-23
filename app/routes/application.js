// import Route from '@ember/routing/route';
// import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

// export default Route.extend(ApplicationRouteMixin,{
//     beforeModel() {
//         console.log('Is auth? ' ,this.get('session').data.isAuthenticated);
//         if(this.get('session').data.isAuthenticated){
//             console.log('ready to direct to student');
//             this.transitionTo('students');
//         }else{
//             this.transitionTo('login'); // Implicitly aborts the on-going transition.
//         }
//     }
// });
import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  
  model(){
    if(!this.get('session.isAuthenticated')){
      this.transitionTo('login'); // PLEASE LOGIN
    }else{
      this.transitionTo('protected'); // REDIRECT WHEN LOGINNED
    }
  },
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});