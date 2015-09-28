import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Route.extend(ApplicationRouteMixin,LoginControllerMixin,{
	authenticator: 'authenticator:torii',
	
	actions:{
		login: function(username,password) {
			console.log('--------application route');
			console.log('username',username);
			console.log('password',password);
    		this.get('session').authenticate('simple-auth-authenticator:torii', 'voting', {username,password});
    	},
    	invalidateSession: function() {
        	this.get('session').invalidate();
        }
	}
});