import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Container, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Accounts } from 'meteor/accounts-base';
import PropTypes from 'prop-types';

/**
 * Signup component is similar to signin component, but we attempt to create a new user instead.
 */
export default class Register extends React.Component {
  /** Initialize state fields. */
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      role: '',
      profile: {
        firstName: '',
        lastName: '',
        displayName: '',
        status: '',
        hometown: '',
        birthday: '',
        bio: '',
      }
    };
    // Ensure that 'this' is bound to this component in these two functions.
    // https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /** Update the form controls each time the user interacts with them. */
  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  /** Handle Signup submission using Meteor's account mechanism. */
  handleSubmit() {

    var { email, password, role, firstName, lastName, displayName, phone, status, hometown, birthday, bio } = this.state;
    const profile = { firstName, lastName, displayName, phone, status, hometown, birthday, bio }
    const text = 'New account created! => Email: ';

    // Check if status is a role (NOT WORKING)
    const statuses = ['sigma', 'eboard'];
    statuses.forEach(function (item) {
      if (item === status) {
        role = status;
      }
    });

    Accounts.createUser({
      email, username: email, password, role, profile
    }, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        console.log(text + this.state.email);
        this.props.history.push('/home');
      }
    });
  }

  /** Display the Registration form. */
  render() {

    const statuses = [
      { key: 's', text: 'Sigma', value: 'Sigma' },
      { key: 'p', text: 'Phi', value: 'Phi' },
      { key: 'e', text: 'Epsilon', value: 'Epsilon' },
      { key: 'x', text: 'E-Board', value: 'E-Board' },
    ]

    return (
      <Container>
        <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
          <Grid.Column>
            <Header as="h2" textAlign="center">
              Register your account
              </Header>
            <Form onSubmit={this.handleSubmit}>
              <Segment raised>
                <Form.Input required
                  label="First Name"
                  name="firstName"
                  placeholder="First Name"
                  onChange={this.handleChange}
                />
                <Form.Input required
                  label="Last Name"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={this.handleChange}
                />
                <Form.Input required
                  label="Email"
                  icon="user"
                  iconPosition="left"
                  name="email"
                  type="email"
                  placeholder="joe@schmoe.com"
                  onChange={this.handleChange}
                />
                <Form.Input
                  label="Display Name"
                  icon="at"
                  iconPosition="left"
                  name="displayName"
                  placeholder="jeff"
                  onChange={this.handleChange}
                />
                <Form.Input required
                  label="Password"
                  icon="lock"
                  iconPosition="left"
                  name="password"
                  placeholder="Password"
                  type="password"
                  onChange={this.handleChange}
                />
                <Form.Input required
                  label="Phone Number"
                  name="phone"
                  placeholder="Phone Number"
                  type='number'
                  onChange={this.handleChange}
                />
                <Form.Select required
                  label="Status"
                  name="status"
                  placeholder="Status"
                  options={statuses}
                  onChange={this.handleChange}
                />
                <Form.Input required
                  label="Hometown"
                  icon="home"
                  iconPosition="left"
                  name="hometown"
                  placeholder="Hometown"
                  onChange={this.handleChange}
                />
                <Form.Input required
                  label="Birthday"
                  icon="birthday cake"
                  iconPosition="left"
                  name="birthday"
                  placeholder="Birthday"
                  type='date'
                  onChange={this.handleChange}
                />
                <Form.TextArea required
                  label="Bio"
                  name="bio"
                  placeholder="Bio"
                  onChange={this.handleChange}
                />
                <Form.Button content="Submit" />
              </Segment>
            </Form>
            <Message>
              Already have an account? Login <Link to="/login">here</Link>
            </Message>
            {this.state.error === '' ? (
              ''
            ) : (
                <Message
                  error
                  header="Registration was not successful"
                  content={this.state.error}
                />
              )}
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

Register.propTypes = {
  history: PropTypes.any,
};

withRouter(Register);
