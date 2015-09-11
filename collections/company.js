Companies = new Mongo.Collection('companies');

CompaniesSchema = new SimpleSchema({
  userId: {
    type: String
  },

  name: {
    type: String,
    label: 'Nombre'
  },

  longName: {
    type: String,
    label: 'Nombre Largo'
  },

  shortName: {
    type: String,
    label: 'Nombre Corto'
  },

  // email: {
  //   type: String,
  //   label: 'Correo Electrónico'
  // },

  phone: {
    type: Number,
    label: 'Numero de teléfono'
  },

  address: {
    type: String,
    label: 'Dirección'
  }
});

Companies.attachSchema(CompaniesSchema);


Meteor.methods({
  'Companies.add': function(params) {
    var userId = Meteor.call('Users.addNewUser', params.name, params.email, params.password, function(e, r) {
      if (e) {
        console.log('ERROR!');
      } else {
      console.log('Created new user');
      }
    });
    var company = {
      userId: userId,
      phone: params.phone,
      adress: params.address,
      longName: params.longName,
      shortName: params.shortName
    };
    return Companies.insert(company);
  }
});
