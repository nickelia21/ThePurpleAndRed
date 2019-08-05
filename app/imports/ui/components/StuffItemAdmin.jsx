import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class StuffItemAdmin extends React.Component {
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
        <Table.Cell>{this.props.stuff.owner}</Table.Cell>
      </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
StuffItemAdmin.propTypes = {
  stuff: PropTypes.object.isRequired,
};

export default StuffItemAdmin;
