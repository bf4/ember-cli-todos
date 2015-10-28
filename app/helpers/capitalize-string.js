import Ember from 'ember';

export function capitalize(params/*, hash*/) {
  const [str] = params;
  return (str || '').capitalize();
}

export default Ember.Helper.helper(capitalize);
