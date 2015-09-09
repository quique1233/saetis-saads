Template.login.events({
  'click .ui.blue.submit.button': function(event, tmp) {
    var username = $('input[name="username"]').val(),
      password = $('input[name="password"]').val();
  	Meteor.loginWithPassword(username, password, function(e, r) {
  	  if (e) {
  	  	console.log('Login failed');
  	  	//TODO Mostrar error cuando el login falle y validaciones cuando los campos estan vacios
  	  } else {
        Router.go('admin.users');
  	  }
  	});
  }
});