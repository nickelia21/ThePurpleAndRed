import React from 'react';
import {
  Grid,
  Input,
  Header,
  Segment,
  Button,
  Divider,
} from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfileCard from '../components/ProfileCard';
import { changeDateFormat } from '../../api/users/functions'

/** A simple static component to render some text for the Home Page. */
class MyProfile extends React.Component {

  render() {
    return (
      <Grid padded stackable className='nav'>
        {/* Left Column */}
        <Grid.Column className='w3-third'>
          <ProfileCard />
        </Grid.Column>

        {/* Right Column */}
        <Grid.Column className='w3-twothird'>
          <Segment raised className='w3-padding'>
            <Header as='h1' textAlign='center' className='w3-padding'>User Information</Header>
            <Divider hidden />
            <Input disabled label='First Name:' placeholder={this.props.firstName}></Input>
            <Divider hidden />
            <Input disabled label='Last Name:' placeholder={this.props.lastName}></Input>
            <Divider hidden />
            <Input disabled label='Email:' placeholder={this.props.email}></Input>
            <Divider hidden />
            <Input label='Display Name:' placeholder={this.props.displayName}></Input>
            <Divider hidden />
            <Input disabled label='Status:' placeholder={this.props.status}></Input>
            <Divider hidden />
            <Input label='Hometown:' placeholder={this.props.hometown}></Input>
            <Divider hidden />
            <Input disabled label='Birthday:' placeholder={changeDateFormat(this.props.birthday)}></Input>
            <Divider hidden />
            <Input fluid label='Bio:' placeholder={this.props.bio}></Input>
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
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  displayName: PropTypes.string,
  status: PropTypes.string.isRequired,
  hometown: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  bio: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const MyProfileContainer = withTracker(() => ({
  firstName: Meteor.user() ? Meteor.user().profile.firstName : '',
  lastName: Meteor.user() ? Meteor.user().profile.lastName : '',
  email: Meteor.user() ? Meteor.user().username : '',
  displayName: Meteor.user() ? Meteor.user().profile.displayName : '',
  status: Meteor.user() ? Meteor.user().profile.status : '',
  hometown: Meteor.user() ? Meteor.user().profile.hometown : '',
  birthday: Meteor.user() ? Meteor.user().profile.birthday : '',
  bio: Meteor.user() ? Meteor.user().profile.bio : '',
}))(MyProfile);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(MyProfileContainer);
