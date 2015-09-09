Router.route('/homepage', {
	name: 'application.homepage',
	action: function() {
		this.layout('homepageLayout');
		this.render('homepage');
	}
})

/*AdminController = RouteController.extend({
	subscriptions: function() {
		return Meteor.subscribe('Users.all');
	},
	goToHomepage: function() {
		var self = this;
		self.render('usersList', {data: {
			users: Meteor.users.find()
		}});
	}
});*/