import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Posts = new Mongo.Collection('Posts');

/** Create a schema to constrain the structure of documents associated with this collection. */
const PostSchema = new SimpleSchema({
  name: String,
  owner: String,
  body: String,
  likes: Number,
  dislikes: Number,
  posted_at: new Date(),
  comments: [{
    name: String,
    comment: String,
    likes: Number,
    dislikes: Number,
  }]
}, {
  tracker: Tracker,
});

/** Attach this schema to the collection. */
Posts.attachSchema(PostSchema);

/** Make the collection and schema available to other code. */
export {
  Posts,
  PostSchema,
};
