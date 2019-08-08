import React from 'react';
import {
  Grid,
  Button,
  Input,
  Icon,
  Card,
  Header,
  Container,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom';
import PostItem from '../components/PostItem';
import { Posts } from '../../api/posts/posts.js';
import ProfileCard from '../components/ProfileCard';


/** A simple static component to render the Home Page. */
class Home extends React.Component {

  // Changes date in format "yyyy-mm-dd" to "monthName dd, yyyy"
  changeDateFormat(str) {
    var myDate = new Date(str);
    var monthName = myDate.toLocaleString('en-us', { month: 'long' });
    var day = myDate.getDate();
    var year = myDate.getFullYear();
    var res = monthName + ' ' + day + ', ' + year;
    return res;
  }

  renderPosts() {
    let postData = Posts.find({}).fetch();
    console.log(postData);
    return postData.map((post) => (
      <PostItem key={post._id} post={post} />
    ));
  }

  /** Initialize the database with a default data document. */
  createPost(data) {
    console.log(`  Posting: ${data.name} (${data.owner})`);
    Posts.insert(data);
  }

  render() {
    return (
      <Grid padded stackable className="nav">
        {/* Left Column */}
        <Grid.Column className='w3-col m3'>
          <ProfileCard />
        </Grid.Column>

        {/* Middle Column */}
        <Grid.Column className='w3-col m7'>
          <Card raised fluid className='w3-padding'>
            <Container className='w3-padding'>
              <Input fluid placeholder='Post your shit here...' size='large' /><br />
              <Button primary>Post</Button>
            </Container>
          </Card>

          {this.renderPosts()}

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
  posts: PropTypes.object,

  event: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string,
  }),
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const HomeContainer = withTracker(() => ({
  //posts: Posts.find({}).fetch(),
}))(Home);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(HomeContainer);
