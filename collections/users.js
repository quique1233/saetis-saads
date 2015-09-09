if (Meteor.isServer) {
  Meteor.publish('Users.all', function() {
	var self = this,
	userId = self.userId;
	//TODO check if the user is allowed
    return Meteor.users.find();
  });
}

Meteor.methods({
  'Users.addNewUser': function(username, email, password) {
    check(username, String);
    check(email, String);
    return Accounts.createUser({username: username, email: email, password:password});
  }
});