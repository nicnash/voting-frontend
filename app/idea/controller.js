import Ember from 'ember';

export default Ember.Controller.extend({
    ideaData: function(){
        console.log('--------ideaData');
        var self = this;
        return self.get('model').sortBy('count').reverse();
    }.property('model.@each.count'),
    up:function(){
        console.log('upcontroller');
    }
});
