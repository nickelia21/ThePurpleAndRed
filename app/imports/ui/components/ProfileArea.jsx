import React from 'react';
import {
  Grid,
  Icon,
  Image,
  Card,
  Input,
  Header,
  Segment,
  Button,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Users } from '../../api/users/users.js';

/** A simple static component to render some text for the Home Page. */
class ProfileArea extends React.Component {
  render() {
    return (
      <Grid container padded stackable>
        {/* Left Column */}
        <Grid.Column className='w3-third'>
          <Card raised>
            <Image src="/images/avatar.png" alt="Avatar" wrapped ui={false} />
            <Card.Content>
              <Card.Header>{Users.firstName} + {Users.lastName}</Card.Header>
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
        <Grid.Column className='w3-twothird'>
          <Segment raised>
            <Header as='h1'>User Information</Header>
            First Name
            <Input></Input>
            Last Name
            <Input disabled></Input>
            Email
            <Input disabled></Input>
            Status
            <Input></Input>
            Hometown
            <Input></Input>
            Birthday
            <Input></Input>
            <Button primary>Submit</Button>
          </Segment>
        </Grid.Column>

      </Grid>
    );
  }
}

/** Declare the types of all properties. */
ProfileArea.propTypes = {
  currentUser: PropTypes.string,
};

export default ProfileArea;
