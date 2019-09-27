import React from 'react';
import { Header, Grid } from 'semantic-ui-react';

/** Render a Not Found page if the user enters a URL that doesn't match any route. */
class CoopDB extends React.Component {
  render() {
    return (
      <Grid className='nav'>
        <Header as="h2" textAlign="center">
          <p>Alumni Network</p>
        </Header>
      </Grid>
    );
  }
}

export default CoopDB;
