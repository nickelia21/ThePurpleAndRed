import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Grid } from 'semantic-ui-react';

/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
export default class Signout extends React.Component {
  render() {
    Meteor.logout();
    return (
      <Grid textAlign="center" verticalAlign="middle" centered className="sign-out my-center">
        <Header as="h2" textAlign="center">
          You are signed out.
        </Header>
      </Grid>
    );
  }
}
