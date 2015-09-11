Notices = new Mongo.Collection('notices');

NoticesSchema = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },

  publicationDate: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }    
  },

  summary: {
    type: String,
    max: 20,
    min: 3
  },

  extraText: {
    type: String
  },

  publisherName: {
    type: String
  },

  publisherId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  }
});

Notices.attachSchema(NoticesSchema);

//Server Methods
if (Meteor.isServer) {
  Meteor.methods({
    'Notices.addNew': function(summary, extraText, publisherId) {
      check(summary, String);
      check(extraText, String);
      check(publisherId, String);

      //TODO verificar si el usuario esta loggeado

      var publisherInfo = Meteor.users.findOne({_id: publisherId});

      var noticeObj = {
        summary: summary,
        extraText: extraText,
        publisherName: publisherInfo.username,
        publisherId: publisherId
      };

      return Notices.insert(noticeObj);
    }
  });
}

//Publications
if (Meteor.isServer) {
  Meteor.publish('Notices.recent', function() {
    return Notices.find({});
  });
}
