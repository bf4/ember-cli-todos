import Ember from 'ember';
import { CanMixin } from 'ember-can';

export default Ember.Route.extend(CanMixin, {
  queryParams: {
    sortBy: {
      replace: true
    },
    sortAscending: {
      replace: true
    }
  },
  beforeModel(transition) {
    const routeName = transition.targetName;
    const canAccess = this.can('access route', {routeName});
    if (!canAccess) {
      this.transitionTo('not-found');
    }
  }
});
