Router.route('/homepage', {
	name: 'application.homepage',
	controller: 'HomepageController',
	action: 'goToHomepage'
})

HomepageController = RouteController.extend({
	subscriptions: function() {
		return Meteor.subscribe('Notices.recent');
	},
	goToHomepage: function() {
		var self = this;
		self.layout('homepageLayout',{
  		data: {
        notices: Notices.find({})  
      }
		});
		self.render('homepage');
	}
});