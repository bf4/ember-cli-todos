import Ember from 'ember';

export default Ember.Route.extend({
  model({ tab_name }) {
    return {
      tabName: tab_name
    }
  }
});
