import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

/** A simple static component to render the Home page. */
class Home extends React.Component {
  render() {
    return (
      <div>
        <Container style={{ padding: '5em 0em' }}>
          <Header as='h2'>Attached Content</Header>
          <Grid columns={3}>
            <Grid.Column>
              <Segment attached='top'>Segment 1</Segment>
              <Segment attached>Segment 2</Segment>
              <Segment attached>Segment 3</Segment>
              <Segment attached='bottom'>Segment 4</Segment>

              <Segment.Group>
                <Segment>
                  <p>Top</p>
                </Segment>
                <Segment.Group>
                  <Segment>
                    <p>Nested Top</p>
                  </Segment>
                  <Segment>
                    <p>Nested Middle</p>
                  </Segment>
                  <Segment>
                    <p>Nested Bottom</p>
                  </Segment>
                </Segment.Group>
                <Segment>
                  <p>Middle</p>
                </Segment>
                <Segment.Group horizontal>
                  <Segment>
                    <p>Top</p>
                  </Segment>
                  <Segment>
                    <p>Middle</p>
                  </Segment>
                  <Segment>
                    <p>Bottom</p>
                  </Segment>
                </Segment.Group>
                <Segment>
                  <p>Bottom</p>
                </Segment>
              </Segment.Group>
            </Grid.Column>
          </Grid>
        </Container>
      </div>

    );
  }
}

export default Home;
