import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  routeName: Ember.computed('routePrefix', 'route', {
    get() {
      return `${this.get('routePrefix')}.${this.get('route')}`;
    }
  })
});
