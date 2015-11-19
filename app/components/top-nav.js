import Ember from 'ember';
import Tab from '../models/tab';
const tabIds = [
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
    this.set('tabIds', tabIds);
  },

  tabs: function() {
    var decoratedTabs = [];
    var routePrefix = this.get('routePrefix'),
       currentRouteName = this.get('currentRouteName');
    this.get('tabIds').forEach(function(tabId) {
      decoratedTabs.push(Tab.create({id: tabId, routePrefix: routePrefix, currentRouteName: currentRouteName}));
    });
    return decoratedTabs;
  }.property('tabIds'),

  selected: function() {
    var selectedTab = this.get('tabs').findBy('selected', true);
    if ( selectedTab ) {
      return selectedTab.get('id');
    } else {
      return null;
    }
  }.property('tabs')
});
