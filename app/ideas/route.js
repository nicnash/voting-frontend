import Ember from 'ember';

export default Ember.Route.extend({
     model:function() {
        var asdf = this.store.findAll('idea');
        console.log('asdf',asdf);

        return this.store.findAll('idea');
    }
});
