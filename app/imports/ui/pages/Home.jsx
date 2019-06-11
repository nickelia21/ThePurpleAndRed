import React from 'react';
import { Grid, Button, Icon, Image, Card } from 'semantic-ui-react';

{/** A simple static component to render some text for the Home Page. */ }
class Home extends React.Component {
  render() {
    return (
      <Grid container columns='three'>
        {/* Left Column */}
        <Grid.Column>
          <Card>
            <Image src="/images/avatar.png" alt="Avatar" wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='date'>Epsilon</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
              </a>
            </Card.Content>
          </Card>

          <Card>
            <Image src="/images/avatar.png" alt="Avatar" wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='date'>Epsilon</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>

        {/* Middle Column */}
        <Grid.Column>
          <Card>
            <Image src="/images/avatar.png" alt="Avatar" wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='date'>Epsilon</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>

        {/* Right Column */}
        <Grid.Column>
          <Card>
            <Image src="/images/avatar.png" alt="Avatar" wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='date'>Epsilon</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>

      </Grid>
    );
  }
}

export default Home;