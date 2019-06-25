import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Users = new Mongo.Collection('Users');
/** Create a schema to constrain the structure of documents associated with this collection. */
const UserSchema = new SimpleSchema({
  email: String,
  password: String,
  profile: [{
    firstName: String,
    lastName: String,
    phone: String,
    status: String,
    hometown: String,
    birthday: Date,
    bio: String,
  }]
}, {
  tracker: Tracker,
});

/** Attach this schema to the collection. */
Users.attachSchema(UserSchema);

/** Make the collection and schema available to other code. */
export {
  Users,
  UserSchema,
};
