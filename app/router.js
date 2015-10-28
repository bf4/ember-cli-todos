import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard', {path: '/'}, function() {
    this.route('facilities');
    this.route('departments');
    this.route('units');
    this.route('users');
    this.route('roles');
    this.route('events');
  });
});

export default Router;
