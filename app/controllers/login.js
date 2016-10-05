import Ember from 'ember';

let { computed } = Ember;

export default Ember.Controller.extend({
  username: '',
  id: '',

  validUsername: computed.gte('username.length', 5),
  actions: {
    saveUsername() {
      const username = this.get('username');

      const newUser = this.store.createRecord('users', {
        username: username
      });

      newUser.save().then((response) => {
        this.set('greetMessage', `Welcome ${this.get('username')}! Hang on while we are preparing the chatroom.`);
        this.set('username', '');
        this.set('id', response.get('id'));
        this.transitionToRoute('index');
      });
    }
  }
});
