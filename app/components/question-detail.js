import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if (confirm('Delete question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }  
  }
});
