import React from 'react';
import {
  Grid,
  Header,
  Segment,
  Divider,
  TextArea,
  Form,
} from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfileCard from '../components/ProfileCard';
import { changeDateFormat } from '../../api/users/functions'

/** A simple static component to render some text for the Home Page. */
class OtherProfile extends React.Component {

  render() {
    return (
      <Grid padded stackable>
        {/* Left Column */}
        <Grid.Column className='w3-third'>
          <ProfileCard />
        </Grid.Column>

        {/* Right Column */}
        <Grid.Column className='w3-twothird'>
          <Segment raised className='w3-padding'>
            <Header as='h1' textAlign='center' className='w3-padding'>User Information</Header>
            <Divider hidden />
            <Form>
              <TextArea placeholder={'First Name:' + this.props.firstName} />
            </Form>
            <Divider hidden />
            <Header as='h3'>Last Name: {this.props.lastName}</Header>
            <Divider hidden />
            <Header as='h3'>Email: {this.props.email}</Header>
            <Divider hidden />
            <Header as='h3'>Display Name: {this.props.displayName}</Header>
            <Divider hidden />
            <Header as='h3'>Status: {this.props.status}</Header>
            <Divider hidden />
            <Header as='h3'>Hometown: {this.props.hometown}</Header>
            <Divider hidden />
            <Header as='h3'>Birthday: {changeDateFormat(this.props.birthday)}</Header>
            <Divider hidden />
            <Header as='h3'>Bio: {this.props.bio}</Header>
            <Divider hidden />
          </Segment>
        </Grid.Column>

      </Grid>
    );
  }
}

/** Declare the types of all properties. */
OtherProfile.propTypes = {
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
const OtherProfileContainer = withTracker(() => ({
  firstName: Meteor.user() ? Meteor.user().profile.firstName : '',
  lastName: Meteor.user() ? Meteor.user().profile.lastName : '',
  email: Meteor.user() ? Meteor.user().username : '',
  displayName: Meteor.user() ? Meteor.user().profile.displayName : '',
  status: Meteor.user() ? Meteor.user().profile.status : '',
  hometown: Meteor.user() ? Meteor.user().profile.hometown : '',
  birthday: Meteor.user() ? Meteor.user().profile.birthday : '',
  bio: Meteor.user() ? Meteor.user().profile.bio : '',
}))(OtherProfile);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(OtherProfileContainer);
