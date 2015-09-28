import Ember from 'ember';
export default Ember.Object.extend({
	open: function(options){
		console.log('asdf')
		return options.apacheService.API.authenticateUser(options.username,options.password)
			.then(function(user){
				console.log('successfully authenticated ' + user.userName);
				return user;
			})
	}
});