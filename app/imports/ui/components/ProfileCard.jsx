import React from 'react';
import {
  Icon,
  Image,
  Card,
  Divider,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom';
import { changeDateFormat } from '../../api/users/functions'

/** A simple static component to render the Home Page. */
class ProfileCard extends React.Component {

  renderDisplayName() {
    if (this.props.displayName !== undefined) {
      return <Card.Header className='w3-medium w3-padding-16'>{this.props.displayName}</Card.Header>
    }
  }

  render() {
    return (
      <Card raised fluid>
        <Image src="/images/avatar.png" alt="Avatar" wrapped ui={false} />
        <Card.Content>
          <Card.Header className='w3-xlarge w3-padding-16' textAlign='center'>{this.props.firstName + ' ' + this.props.lastName}</Card.Header>
          <Divider />
          {this.renderDisplayName()}
          <Card.Meta>{this.props.status}</Card.Meta>
          <Card.Description>{this.props.bio}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p>
            <Icon name='home' />
            {this.props.hometown}</p>
          <p>
            <Icon name='birthday' />
            {changeDateFormat(this.props.birthday)}</p>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            {this.props.enemies + 'FIX THIS --> ' + 'Enemies'}
          </a>
        </Card.Content>
      </Card>
    );
  }
}

/** Declare the types of all properties. */
ProfileCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  displayName: PropTypes.string,
  email: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  hometown: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  bio: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const ProfileCardContainer = withTracker(() => ({
  firstName: Meteor.user() ? Meteor.user().profile.firstName : '',
  lastName: Meteor.user() ? Meteor.user().profile.lastName : '',
  email: Meteor.user() ? Meteor.user().username : '',
  displayName: Meteor.user() ? Meteor.user().profile.displayName : '',
  status: Meteor.user() ? Meteor.user().profile.status : '',
  hometown: Meteor.user() ? Meteor.user().profile.hometown : '',
  birthday: Meteor.user() ? Meteor.user().profile.birthday : '',
  bio: Meteor.user() ? Meteor.user().profile.bio : '',
}))(ProfileCard);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(ProfileCardContainer);
