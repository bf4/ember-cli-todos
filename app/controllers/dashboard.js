import Ember from 'ember';

const {
  inject,
  computed
} = Ember;

export default Ember.Controller.extend({
    application: inject.controller(),
    user: inject.service(),
    sortAscending: true,
    sortBy: null,
    queryParams: ['sortBy', 'sortAscending', 'testParam'],
    tableColumnHeaders: Ember.A(['startDate', 'endDate']),
    tableContent: Ember.A([
      { startDate: '2015-11-10', endDate: '2016-11-10' },
      { startDate: '2015-10-15', endDate: '2015-11-15' }
    ]),
    isAdmin: computed('user.isAdmin', function() {
      return this.get('user.isAdmin');
    }),
    actions: {
      toggleUserRole: function() {
        this.toggleProperty('user.isAdmin');
      }
    }
});
