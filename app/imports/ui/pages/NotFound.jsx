import React from 'react';
import { Header, Divider, Container, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Render a Not Found page if the user enters a URL that doesn't match any route. */
class NotFound extends React.Component {

  static contextTypes = {
    router: PropTypes.object,
  }

  redirectHome = () => {
    this.context.router.history.push('/home');
  }

  render() {
    return (
      <Container textAlign='center' className='not-found'>
        <Header as="h1">POOF... You&apos;re gay!</Header>
        <Divider />
        <Header as="h3">Just kidding, but I bet you wish you were.</Header>
        <Divider hidden />
        <Header as="h3">Why don&apos;t you just go back home kid.</Header>
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Button primary size='huge' onClick={this.redirectHome}>Go Home</Button>
      </Container>
    );
  }
}

NotFound.propTypes = {
  history: PropTypes.any,
};

export default NotFound;
