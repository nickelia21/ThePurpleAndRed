import React from 'react';
import {
  Button,
  Icon,
  Card,
  Label,
  Item,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single Post on the Home page feed. See pages/Home */
class PostItem extends React.Component {

  // handleDelete = () => this.props.stuff.remove();

  timeDiff(postDate) {
    var now = new Date();
    var diff = Math.round((now - postDate) / 60000);
    return diff;
  }

  render() {
    return (
      <Card raised fluid className='w3-padding'>
        <Item className='w3-padding'>
          <Item.Image as='a' circular floated='left' size='tiny' src="/images/avatar.png" />
          <span className="w3-right w3-opacity">{this.timeDiff(this.props.posted_at)}</span>
          <br /><br />
          <Item.Content>
            <Item.Header as='a' className='w3-xlarge w3-padding-extra-large w3-margin-left'>
              {this.props.name}</Item.Header>
            <hr width='80%' className='hr-post' />
            <Item.Description>{this.props.body}</Item.Description>
            <br /><br />
            <Button toggle as='div' negative labelPosition='right' className='w3-right w3-padding'>
              <Button negative>
                <Icon name='close' />
                Dislike
                  </Button>
              <Label as='a' basic color='red' pointing='left'>{this.props.dislikes}</Label>
            </Button>
            <Button toggle as='div' positive labelPosition='right' className='w3-right w3-padding'>
              <Button positive>
                <Icon name='like' />
                Like
                  </Button>
              <Label as='a' basic color='green' pointing='left'>{this.props.likes}</Label>
            </Button>
          </Item.Content>
        </Item>
      </Card>
    );
  }
}

/** Require a document to be passed to this component. */
PostItem.propTypes = {
  owner: PropTypes.string,
  name: PropTypes.string,
  body: PropTypes.string,
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  posted_at: PropTypes.date,
  comments: PropTypes.Array,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(PostItem);
