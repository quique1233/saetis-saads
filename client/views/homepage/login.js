Template.login.onRendered(function() {
  this.$('.ui.modal').modal({
  		blurring: true,
    onApprove : function() {
      $('[name="registerUser"]').trigger('saetis:registerUser');
    }
  });
});

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
  },
  'click [name="registerUser"]': function() {
    console.log('aaaaaaaaaaaaaa');
     $('.ui.modal.register').modal('show');
  },
  'saetis:registerUser': function() {
    var username = $('[name="register-username"]').val(),
  	  email = $('[name="register-email"]').val(),
  	  password = $('[name="register-password"]').val();
  	
  	  //TODO anadir validaciones para los campos

    Meteor.call('Users.addNewUser', username, email, password, function(e, r) {
      if (e) {
        console.log('ERROR!');
      } else {
      console.log('Created new user');
      }
    });
  }
});
