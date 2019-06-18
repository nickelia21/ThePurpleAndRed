import {
  Mongo,
} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import {
  Tracker,
} from 'meteor/tracker';

/** Create a Meteor collection. */
const Stuffs = new Mongo.Collection('Stuffs');

/** Create a schema to constrain the structure of documents associated with this collection. */
const StuffSchema = new SimpleSchema({
  name: String,
  sigma: {
    type: String,
    optional: true,
  },
  description: String,
  restaurant: String,
  where: String,
  comments: {
    type: String,
    optional: true,
  },
  owner: String,
  completed: Boolean,
}, {
  tracker: Tracker,
});

/** Attach this schema to the collection. */
Stuffs.attachSchema(StuffSchema);

/** Make the collection and schema available to other code. */
export {
  Stuffs,
  StuffSchema,
};
