Router.route('/index', {
	name: 'application.index',
	action: function() {
		this.render('adminView');
	}
})

Router.route('/usersList', {
	name: 'admin.users',
	controller: 'AdminController',
	action: 'goToUsers'
});

AdminController = RouteController.extend({
	subscriptions: function() {
		return Meteor.subscribe('Users.all');
	},
	goToUsers: function() {
		var self = this;
		self.render('usersList', {data: {
			users: Meteor.users.find()
		}});
	}
});