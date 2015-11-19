import Ember from "ember";

export default Ember.Object.extend({
  id: null,
  routePrefix: null,
  currentRouteName: null,
  title: function() {
    return this.get('id').capitalize();
  }.property('id'),
  routeName: function() {
    return [this.get('routePrefix'), this.get('id')].join('.');
  }.property('routePrefix', 'id'),
  selected: function() {
    return this.get('routeName') === this.get('currentRouteName');
  }.property('routeName', 'currentRouteName')
});
