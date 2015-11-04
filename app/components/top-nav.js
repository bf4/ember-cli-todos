import Ember from 'ember';

const tabs = [
  'facilities',
  'departments',
  'units',
  'users',
  'roles',
  'events'
];

export default Ember.Component.extend({
  tagName: '',
  init() {
    this._super(...arguments);
    this.set('tabs', tabs);
  }
});
