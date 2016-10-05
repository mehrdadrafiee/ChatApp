import Ember from 'ember';

let { computed } = Ember;

export default Ember.Controller.extend({
  username: '',

  validUsername: computed.gte('username.length', 5),
  actions: {
    saveUsername() {
      alert(`Welcome ${this.get('username')}!`);
      this.set('greetMessage', `Welcome ${this.get('username')}! Hang on while we are preparing the chatroom.`);
      this.set('username', '');
    }
  }
});
