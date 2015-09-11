 Template.autoform.helpers({
  properties: function() {
    var properties = [],
        input = {};

    _.each(this.schema, function(schemaObj, schemaProp){
      if (schemaObj.label) {
        input.label = schemaObj.label;
        input.name = schemaProp;
        properties.push(input);
        input = {};
      }
    });
    return properties;
  },

  title: function() {
    return this.title;
  }
});

Template.autoform.events({
  'submit': function(event) {
    var instanceData = Template.currentData(),
        allFields = Template.instance().$('.form').form('get values');
    console.log(allFields);
    event.preventDefault();
    if (instanceData.onSubmit){
      instanceData.onSubmit(allFields);
    }
  },

  'click .reset': function() {
    var instanceData = Template.currentData();
    event.preventDefault();
    if (instanceData.onCancel){
      instanceData.onCancel();
    }
  }
});

