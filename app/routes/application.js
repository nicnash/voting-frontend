import Ember from 'ember';
// import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
// import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
//LoginControllerMixin
export default Ember.Route.extend({
	// authenticator: 'authenticator:torii',
	
	ajaxCall: function(url, username,password){
		
	      return Ember.$.ajax({
	        url        : url,
	        contentType: "application/json; charset=utf-8",
	        type       : "GET",
	        dataType   : "json",
	        beforeSend(xhr){
	        	xhr.setRequestHeader('Authorization', 'Basic ' + window.btoa(`${username}:${password}`));
	        }

	      });},


	actions:{
		login: function(username,password) {
			var self = this;
			console.log('--------application route');
			console.log('username',username);
			console.log('password',password);


			

			self.ajaxCall("http://127.0.0.1:3000/token",username,password)
				.then(function(result) {
					console.log('result',result);
				},function(err){
					console.log('error');
					console.log(err);
				});
				

				console.log('asdfasf');

    		// this.get('session').authenticate('simple-auth-authenticator:torii', 'sefef', {username,password});

    	},
    	invalidateSession: function() {
        	this.get('session').invalidate();
        }
	}
});
