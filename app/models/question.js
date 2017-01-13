import DS from 'ember-data';

export default DS.Model.extend({
  problem: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
});
