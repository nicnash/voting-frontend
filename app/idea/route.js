import Ember from 'ember';

export default Ember.Route.extend({
    //  model() {
    //     var asdf = this.store.findAll('idea');
    //     console.log('asdf',asdf);

    //     var sadfe= this.store.findAll('idea').then((ideas) => ({
    //       ideas: ideas,
    //     }));
    //     console.log('sadfe',sadfe);

    //     return asdf;
    // }
    model:function(){
        return this.store.findAll('idea');
    }
});
