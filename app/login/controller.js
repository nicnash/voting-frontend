import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin,{
	authenticator: 'authenticator:torii',
	actions:{
		authenticateWithRails:function(){
			var self = this;
			var u = self.get('username');
			var p = self.get('password');

			self.send('login',u,p);
		}
	}
});
