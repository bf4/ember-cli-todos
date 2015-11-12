import Ember from 'ember';

export default Ember.Component.extend({
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
