import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow(){
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
      var params = {
        solution: this.get('solution') ? this.get('solution') : "",
        user: this.get('user') ? this.get('user') : "",
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
