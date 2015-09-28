import DS from 'ember-data';

var Idea = DS.Model.extend({
  title:  DS.attr('string'),
  body:  DS.attr('string'),
  count:  DS.attr('number', { defaultValue: 0 })
});

export default Idea;
