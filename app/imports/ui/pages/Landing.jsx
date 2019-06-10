import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <Grid verticalAlign='middle' textAlign='center' container>

        <Grid.Column width={4}>
          <Image circular className="w3-button w3-hover-white picSpin" src="/images/husky.png" alt="Husky" tabIndex="1" />
        </Grid.Column>

        <Grid.Column width={8}>
          <h1>Welcome to ThePurpleAndRed</h1>
          <p>Please sign the fuck in</p>
        </Grid.Column>

      </Grid>
    );
  }
}

export default Landing;
