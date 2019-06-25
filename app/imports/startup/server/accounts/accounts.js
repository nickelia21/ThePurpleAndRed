import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

/* eslint-disable no-console */

function createUser(email, password, role, { firstName, lastName, phone, status, hometown, birthday, bio }) {
  console.log(`  Creating user ${email}.`);
  const profileItems = { firstName, lastName, phone, status, hometown, birthday, bio };
  // Base user credentials - UserID (client-side)
  const userID = Accounts.createUser({
    username: email,
    email: email,
    password: password,
    profile: profileItems,
  });
  const roles = ['eboard', 'sigma', 'admin'];
  roles.forEach(function (item) {
    if (role === item || status === item) {
      Roles.addUsersToRoles(userID, item);
    }
  });
}

/** When running app for first time, pass a settings file to set up a default user account. */
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating the default users');
    Meteor.settings.defaultAccounts.map(({
      email,
      password,
      role,
      profile,
    }) => createUser(email, password, role, profile));
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}
