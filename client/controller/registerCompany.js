Router.route('/registerCompany', {
  name: 'application.registerCompany',
  controller: 'RegisterCompanyController',
  action: 'goToRegisterCompany'
})

RegisterCompanyController = RouteController.extend({
  goToRegisterCompany: function() {
    var self = this;
    self.render('registerCompanyForm');
  }
});
