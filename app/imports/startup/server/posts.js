import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Posts } from '../../api/posts/posts.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Posting: ${data.name} (${data.owner})`);
  Posts.insert(data);
}

/** Initialize the collection if empty. */
var postData = Meteor.settings.defaultPosts;
if (Posts.find().count() === 0) {
  if (postData) {
    console.log('Creating default posts.');
    postData.map(data => addData(data));
  };
  /** This subscription publishes only the documents associated with the logged in user */
  Meteor.publish('Posts', function publish() {
    if (this.userId) {
      const username = Meteor.users.findOne(this.userId).username;
      return Posts.find({
        owner: username
      });
    }
    return this.ready();
  });

  /** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
  Meteor.publish('PostAdmin', function publish() {
    if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
      return Posts.find();
    }
    return this.ready();
  });
}
