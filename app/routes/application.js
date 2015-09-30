import Ember from 'ember';
// import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
// import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
//LoginControllerMixin
export default Ember.Route.extend({
	// authenticator: 'authenticator:torii',
	
	ajaxCall: function(url, im){
		// $.ajaxSetup({
		//     headers: { 'Authorization': 'Basic dXNlckBleGFtcGxlLmNvbTpwYXNzd29yZA' }
		// });
		Ember.$.ajaxPrefilter(function(Authorization, oriOpt, jqXHR) {
		    jqXHR.setRequestHeader("Authorization", "Basic dXNlckBleGFtcGxlLmNvbTpwYXNzd29yZA");
		});
	      return Ember.$.ajax({
	        url        : url,
	        contentType: "application/json; charset=utf-8",
	        data       : JSON.stringify(im),
	        type       : "POST",
	        dataType   : "json",
	        
	        // traditional: true
	        // xhrFields  : {withCredentials: true}

	      });},


	actions:{
		login: function(username,password) {
			var self = this;
			console.log('--------application route');
			console.log('username',username);
			console.log('password',password);


			var im = {
					     Authorization:'empty'
					 };

			self.ajaxCall("http://127.0.0.1:3000/token",im)
				.then(function(result) {
					console.log('result',result);
				},function(err){
					console.log('error');
					console.log(err);
				});
				;

				console.log('asdfasf');

    		// this.get('session').authenticate('simple-auth-authenticator:torii', 'sefef', {username,password});

    	},
    	invalidateSession: function() {
        	this.get('session').invalidate();
        }
	}
});



// ajaxCall                    : function(url, inputModel) {
//       var im = inputModel || this.options.inputModel;
//       return Ember.$.ajax({
//         url        : this.options.APIRoot + url,
//         contentType: "application/json; charset=utf-8",
//         data       : JSON.stringify(im),
//         type       : "POST",
//         dataType   : "json",
//         traditional: true,
//         xhrFields  : {withCredentials: true}

//       });

// options: {
//       APIRoot   : config.apiURL,
//       inputModel: {apiKey: "APIKey-WEB"}
//     },

//     //user/authenticate
//     authenticateUser            : function(userName, password) {
//       var im = Ember.$.extend({}, this.options.inputModel, {UserName: userName, Password: password});
//       return this.ajaxCall("user/authenticate", im);
//     },