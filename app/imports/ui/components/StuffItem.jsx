import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class StuffItem extends React.Component {

  // handleDelete = () => this.props.stuff.remove();

  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.stuff.name}</Table.Cell>
        <Table.Cell>{this.props.stuff.sigma}</Table.Cell>
        <Table.Cell>{this.props.stuff.description}</Table.Cell>
        <Table.Cell>{this.props.stuff.restaurant}</Table.Cell>
        <Table.Cell>{this.props.stuff.where}</Table.Cell>
        <Table.Cell>{this.props.stuff.comments}</Table.Cell>
        <Table.Cell>{this.props.stuff.completed.toString()}</Table.Cell>
        <Table.Cell textAlign='center'>
          <Link to={`/edit/${this.props.stuff._id}`}>Edit</Link>
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon link name='trash' onClick={this.handleDelete} />
        </Table.Cell>
      </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
StuffItem.propTypes = {
  stuff: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(StuffItem);
