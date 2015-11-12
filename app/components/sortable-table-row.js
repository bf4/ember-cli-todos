import Ember from 'ember';

const { computed, get } = Ember;

export default Ember.Component.extend({
  tagName: 'td',
  title: computed('key', 'row', function() {
    let k = this.get('key');
    if (!k) {
      return '';
    } else {
      return get(this.get('row'), this.get('key'));
    }
  })

});
