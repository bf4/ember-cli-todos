import Ember from 'ember';
import { Ability } from 'ember-can';

const {
  inject,
  computed
} = Ember;

export default Ability.extend({
  user: inject.service(),
  canAccess: computed('user.isAdmin', 'model', {
    get() {
      const isAdmin = this.get('user.isAdmin');
      const routeName = this.get('routeName');
      return isAdmin || routeName !== 'dashboard.facilities';
    }
  })
});
