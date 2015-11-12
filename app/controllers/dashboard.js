import Ember from 'ember';

export default Ember.Controller.extend({
    application: Ember.inject.controller(),
    sortAscending: true,
    sortBy: null,
    queryParams: ['sortBy', 'sortAscending', 'testParam'],
    tableContent: Ember.A([
      { startDate: '2015-11-10', endDate: '2016-11-10' },
      { startDate: '2015-10-15', endDate: '2015-11-15' }
    ]),
    actions: {
      //
      // The setSortBy function receives the name of the function and
      // toggle `sortAscending`. The function `toggleProperty` comes
      // from the [Observable Mixin](http://emberjs.com/api/classes/Ember.Observable.html).
      // It switches a boolean property between false and true.
      //
      setSortBy: function(fieldName) {
        this.set('sortBy', fieldName);
        this.toggleProperty('sortAscending');
        console.log('Sorting by ', fieldName);
        console.log('Sorting Asc?: ', this.get('sortAscending'));

        return false;
      }
   }

});
