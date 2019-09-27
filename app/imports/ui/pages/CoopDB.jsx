import React from 'react';
import { Header } from 'semantic-ui-react';

/** Render a Not Found page if the user enters a URL that doesn't match any route. */
class CoopDB extends React.Component {
  render() {
    return (
      <Header as="h2" textAlign="center" className='nav'>
        <p>Co-op Database</p>
      </Header>
    );
  }
}

export default CoopDB;
