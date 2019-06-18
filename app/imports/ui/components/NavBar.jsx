import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import {
  Menu,
  Dropdown,
  Header,
} from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  contextRef = createRef()

  render() {
    const menuStyle = { marginBottom: '20px' };

    return (
      <Menu stackable className="theme-d4" style={menuStyle} attached="top" borderless inverted>
        {/* If user signed in, clicking 'ThePurpleAndRed' Item routes to '/home', else '/' */}
        {this.props.currentUser ? (
          <Menu.Item as={NavLink} activeClassName="" exact to="/home">
            <Header inverted as='h1'>ThePurpleAndRed</Header>
          </Menu.Item>
        ) : (
            <Menu.Item as={NavLink} activeClassName="" exact to="/">
              <Header inverted as='h1'>ThePurpleAndRed</Header>
            </Menu.Item>
          )}

        {/* Sigma Eats Form, Sigma Eats Requests, Co-op Database Tabs */}
        {this.props.currentUser ? (
          [<Menu.Item as={NavLink} activeClassName="active" exact to="/sigma-eats-form" key='sigma-eats-form'>
            Sigma Eats Form</Menu.Item>,
          <Menu.Item as={NavLink} activeClassName="active" exact to="/sigma-eats-requests" key='sigma-eats-requests'>
            Sigma Eats Requests</Menu.Item>,
          <Menu.Item as={NavLink} activeClassName="active" exact to="/coop-db" key='coop-db'>
            Co-op Database</Menu.Item>]
        ) : ''}

        {/* If signed in user is Admin, makes Admin tab available */}
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
          <Menu.Item as={NavLink} activeClassName="active" exact to="/admin" key='admin'>Admin</Menu.Item>
        ) : ''}

        {/* User Profile - Email */}
        <Menu.Menu position="right">
          <Menu.Item>
            {this.props.currentUser === '' ? (
              <Dropdown item text="Login/Register" pointing="top right" icon={'user'}>
                <Dropdown.Menu>
                  <Dropdown.Item icon="user" text="Login" as={NavLink} exact to="/login" />
                  <Dropdown.Item icon="add user" text="Register" as={NavLink} exact to="/register" />
                </Dropdown.Menu>
              </Dropdown>
            ) : (
                <Dropdown text={this.props.currentUser} pointing="top right">
                  <Dropdown.Menu>
                    <Dropdown.Item icon="sign out" text="Sign Out" as={NavLink} exact to="/signout" />
                  </Dropdown.Menu>
                </Dropdown>
              )}
          </Menu.Item>
        </Menu.Menu>

        {/* User Profile - Icon */}
        {this.props.currentUser ? (
          <Menu.Item icon="user" as={NavLink} activeClassName="active" exact to="/user" key='user'></Menu.Item>
        ) : ''}

      </Menu>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
