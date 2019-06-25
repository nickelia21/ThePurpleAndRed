import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import validator from 'validator';

/* eslint-disable no-console */

// Extra user information (server-side, overwrites Profile in UserID)
Accounts.onCreateUser((options, user) => {

  // user.profile = options.profile || {};
  // // Assigns user information to the newly created user object
  // user.profile.firstName = options.firstName;
  // user.profile.lastName = options.lastName;
  // user.profile.phone = options.phone;
  // user.profile.status = options.status;
  // user.profile.hometown = options.hometown;
  // user.profile.birthday = options.birthday;
  // user.profile.bio = options.bio;

  // user.profile = options.profile ? options.profile : {};


  if (validator.isEmail(options.email)) {
    if (options.profile) {
      user.profile = options.profile;
    }
    return user;
  }

  throw new Meteor.Error('500', 'Email address is not valid.');
});
