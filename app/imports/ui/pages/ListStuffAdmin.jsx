import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader, Grid } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/stuff';
import StuffItemAdmin from '/imports/ui/components/StuffItemAdmin';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListStuffAdmin extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
      <Grid container centered className='nav'>
        <Container>
          <Header as="h2" textAlign="center">List Stuff (Admin)</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Sigma</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Restaurant</Table.HeaderCell>
                <Table.HeaderCell>Where</Table.HeaderCell>
                <Table.HeaderCell>Comments</Table.HeaderCell>
                <Table.HeaderCell>Completed</Table.HeaderCell>
                <Table.HeaderCell>Owner</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.stuffs.map((stuff) => <StuffItemAdmin key={stuff._id} stuff={stuff} />)}
            </Table.Body>
          </Table>
        </Container>
      </Grid>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListStuffAdmin.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('StuffAdmin');
  return {
    stuffs: Stuffs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListStuffAdmin);
