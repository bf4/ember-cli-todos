import Ember from 'ember';

export default Ember.Controller.extend({
    application: Ember.inject.controller(),
    sortAscending: true,
    sortBy: null,
    queryParams: ['sortBy', 'sortAscending', 'testParam'],
    tableColumnHeaders: Ember.A(['startDate', 'endDate']),
    tableContent: Ember.A([
      { startDate: '2015-11-10', endDate: '2016-11-10' },
      { startDate: '2015-10-15', endDate: '2015-11-15' }
    ])

});
