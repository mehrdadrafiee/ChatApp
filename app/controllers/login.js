import Ember from 'ember';

let { computed } = Ember;

export default Ember.Controller.extend({
  emailAddress: '',
  password: '',

  isValidEmail: computed.match('emailAddress', /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i),
  isValidPassword: computed.gte('password.length', 5),
  isValid: computed.and('isValidEmail', 'isValidPassword')
});
