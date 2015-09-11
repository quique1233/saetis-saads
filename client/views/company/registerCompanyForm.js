Template.registerCompanyForm.onRendered(function (){
   this.$('.ui.modal').modal({
      blurring: true,
    onApprove : function() {
      $('[action-name="registerCompany"]').trigger('submit');
    }
  });
});

Template.registerCompanyForm.helpers({
  schema: function() {
    return CompaniesSchema.schema();
  },

  title: function() {
    return 'Registrar Grupo Empresa';
  },

  onSubmit: function() {
    console.log('submit');
  }
});
