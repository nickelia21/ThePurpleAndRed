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
  Divider,
} from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

/** A simple static component to render some text for the Home Page. */
class MyProfile extends React.Component {
  render() {
    return (
      <Grid padded stackable>
        {/* Left Column */}
        <Grid.Column className='w3-third'>
          <Card raised fluid>
            <Image src="/images/avatar.png" alt="Avatar" wrapped ui={false} />
            <Card.Content>
              <Card.Header className='w3-xlarge w3-padding-16'>Nick Elia</Card.Header>
              <Card.Meta>Epsilon</Card.Meta>
              <Card.Description>
                I like to party with my boyz!
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <p>
                <Icon name='home' />
                Philadelphia, PA</p>
              <p>
                <Icon name='birthday' />
                January 20, 1998</p>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Enemies
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>

        {/* Right Column */}
        <Grid.Column className='w3-twothird'>
          <Segment raised className='w3-padding'>
            <Header as='h1' textAlign='center' className='w3-padding'>User Information</Header>
            <Divider hidden />
            <Input label='First Name:' placeholder='First Name...'></Input>
            <Divider hidden />
            <Input label='Last Name:' placeholder='Last Name...'></Input>
            <Divider hidden />
            <Input disabled label='Email:' placeholder='elianicholas@gmail.com'></Input>
            <Divider hidden />
            <Input disabled label='Status:' placeholder='Epsilon'></Input>
            <Divider hidden />
            <Input label='Hometown:' placeholder='Hometown...'></Input>
            <Divider hidden />
            <Input label='Birthday:' placeholder='Birthday...'></Input>
            <Divider hidden />
            <Button primary>Submit</Button>
          </Segment>
        </Grid.Column>

      </Grid>
    );
  }
}

/** Declare the types of all properties. */
MyProfile.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const MyProfileContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(MyProfile);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(MyProfileContainer);
