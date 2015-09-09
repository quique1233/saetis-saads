Template.header.helpers({
  currentUser: function() {
  	 return Meteor.user();
  }
});

Template.header.events({
  'click [name="logout"]': function() {
  	Meteor.logout(function() {
  		Router.go('application.homepage');
  	});
  }
});