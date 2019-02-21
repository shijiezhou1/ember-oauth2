import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

App.initializer({
  name: 'pass-me',
  initialize: function( application ){
    // console.log(application);
    // application.register( 'pass-me:akxUtil', AkxUtil, { singleton: true } );
    // application.inject( 'controller', 'akxUtil', 'akx-util:akxUtil' );
    // application.inject( 'route', 'akxUtil', 'akx-util:akxUtil' );
    // application.inject( 'component', 'akxUtil', 'akx-util:akxUtil' );
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
