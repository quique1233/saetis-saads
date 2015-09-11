Template.groupCompany.onRendered(function (){
   this.$('.ui.modal').modal({
      blurring: true,
    onApprove : function() {
      $('.form').trigger('submit');
    }
  });
});

Template.groupCompany.helpers({
  schema: function() {
    return CompaniesSchema.schema();
  },

  title: function() {
    return 'Registrar Grupo Empresa';
  },

  onSubmit: function(params) {
    Meteor.call('Companies.add', params, function(e, r) {
      if(e){
        console.log(e);
      }
    });
  }
});

Template.groupCompany.events({
  'click [action-name="registerCompany"]': function (event) {
    console.log('asubdabsduhsa');
    $('.ui.modal.registerCompany').modal('show');
  }
});
