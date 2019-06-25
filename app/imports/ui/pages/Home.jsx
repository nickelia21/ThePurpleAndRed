import React from 'react';
import {
  Grid,
  Button,
  Input,
  Icon,
  Image,
  Card,
  Header,
  Container,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom';
import PostItem from '../components/PostItem';


/** A simple static component to render the Home Page. */
class Home extends React.Component {
  render() {
    return (
      <Grid padded stackable>
        {/* Left Column */}
        <Grid.Column className='w3-col m3'>
          <Card raised fluid>
            <Image src="/images/avatar.png" alt="Avatar" wrapped ui={false} />
            <Card.Content>
              <Card.Header as='a' className='w3-xlarge w3-padding-16'>Nick Elia</Card.Header>
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

        {/* Middle Column */}
        <Grid.Column className='w3-col m7'>
          <Card raised fluid className='w3-padding'>
            <Container className='w3-padding'>
              <Input fluid placeholder='Post your shit here...' size='large' /><br />
              <Button primary>Post</Button>
            </Container>
          </Card>

          <PostItem />

          {/* EXAMPLE POST ------>
          <Card raised fluid className='w3-padding'>
            <Item className='w3-padding'>
              <Item.Image as='a' circular floated='left' size='tiny' src="/images/avatar.png" />
              <span className="w3-right w3-opacity">2 min</span>
              <br /><br />
              <Item.Content>
                <Item.Header as='a' className='w3-xlarge w3-padding-extra-large w3-margin-left'>
                  Evan Stuart</Item.Header>
                <hr width='80%' className='hr-post' />
                <Item.Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nulla in leo non nisi feugiat bibendum. Ut at nunc ut metus placerat sodales.
                  Etiam non neque risus. Aliquam erat volutpat.
                  Praesent elit libero, egestas et tincidunt sed, finibus ac purus.
                  Donec pulvinar mi nisl. Proin libero nulla, malesuada vel dapibus eget, volutpat vitae sem.
                </Item.Description>
                <br /><br />
                <Button toggle as='div' negative labelPosition='right' className='w3-right w3-padding'>
                  <Button negative>
                    <Icon name='close' />
                    Dislike
                  </Button>
                  <Label as='a' basic color='red' pointing='left'>5</Label>
                </Button>
                <Button toggle as='div' positive labelPosition='right' className='w3-right w3-padding'>
                  <Button positive>
                    <Icon name='like' />
                    Like
                  </Button>
                  <Label as='a' basic color='green' pointing='left'>69</Label>
                </Button>
              </Item.Content>
            </Item>
          </Card> */}

        </Grid.Column>

        {/* Right Column */}
        <Grid.Column className='w3-col m2'>
          <Card raised fluid>
            <Header as='h2' className='w3-padding-large w3-margin-top' textAlign='center'>Events</Header>
            <Card.Content>
              <Card.Header className='w3-padding-16'>DZ Social</Card.Header>
              <Card.Content>
                <p>
                  <Icon name='calendar' />
                  Friday, October 13
                </p>
                <p>
                  <Icon name='location arrow' />
                  Wait
                </p>
              </Card.Content>
            </Card.Content>
            <Card.Content>
              <Card.Header className='w3-padding-16'>Semi Formal</Card.Header>
              <Card.Content>
                <p>
                  <Icon name='calendar' />
                  Saturday, November 6
                </p>
                <p>
                  <Icon name='location arrow' />
                  Tha Boat
                </p>
              </Card.Content>
            </Card.Content>
          </Card>
        </Grid.Column>

      </Grid>
    );
  }
}

/** Declare the types of all properties. */
Home.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const HomeContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(Home);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(HomeContainer);
