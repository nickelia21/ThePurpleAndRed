import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Container, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

/**
 * Signin page overrides the form’s submit event and call Meteor’s loginWithPassword().
 * Authentication errors modify the component’s state to be displayed
 */
export default class Login extends React.Component {

  /** Initialize component state with properties for login and redirection. */
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '', redirectToReferer: false };
    // Ensure that 'this' is bound to this component in these two functions.
    // https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /** Update the form controls each time the user interacts with them. */
  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  /** Handle Login submission using Meteor's account mechanism. */
  handleSubmit() {
    const { email, password } = this.state;
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '', redirectToReferer: true });
      }
    });
  }

  /** Render the Login form. */
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/home' } };
    // if correct authentication, redirect to Home Page
    if (this.state.redirectToReferer) {
      return <Redirect to={from} />;
    }
    // Otherwise return the Login form.
    return (
      <Container className='sign-in'>
        <Grid textAlign="center" verticalAlign="middle" centered columns={2} className='nav'>
          <Grid.Column>
            <Header as="h2" textAlign="center">
              Login to your account
              </Header>
            <Form onSubmit={this.handleSubmit}>
              <Segment raised>
                <Form.Input
                  label="Email"
                  icon="user"
                  iconPosition="left"
                  name="email"
                  type="email"
                  placeholder="E-mail address"
                  onChange={this.handleChange}
                />
                <Form.Input
                  label="Password"
                  icon="lock"
                  iconPosition="left"
                  name="password"
                  placeholder="Password"
                  type="password"
                  onChange={this.handleChange}
                />
                <Form.Button content="Submit" />
              </Segment>
            </Form>
            <Message>
              <Link to="/register">Click here to Register</Link>
            </Message>
            {this.state.error === '' ? (
              ''
            ) : (
                <Message
                  error
                  header="Login was not successful"
                  content={this.state.error}
                />
              )}
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

/** Ensure that the React Router location object is available in case we need to redirect. */
Login.propTypes = {
  location: PropTypes.object,
};
