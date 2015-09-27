import Ember from 'ember';

export default Ember.Component.extend({
    actions:{
        up:function(){
            var self = this;
            var idea = self.get('idea');
            var count = self.get('idea.count');
            idea.set('count',count+1);
            idea.save();
        },
        down:function(){
            var self = this;
            var idea = self.get('idea');
            var count = self.get('idea.count');
            idea.set('count',count-1);
            idea.save();        
        }
    }

});
