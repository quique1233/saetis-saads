Actions = new Mongo.Collection(null);

ActionsSchema = new SimpleSchema({
  name: {
    type: String
  },
  context: {
    type: String
  },
  label: {
    type: String
  },
  icon: {
    type: String
  },
  action: {
    type: Object
  }
});

ActionsManager = {
  getActionsFor: function(context) {
    return Actions.find({context: context});
  }
}