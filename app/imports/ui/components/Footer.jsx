import React from 'react';
import {
  Segment,
  List,
  Divider,
  Image,
  Container,
} from 'semantic-ui-react';

class Footer extends React.Component {
  render() {
    const footerStyle = { marginTop: '40px', padding: '2rem 0rem' };

    return (
      <footer>
        <Segment inverted vertical className='theme-d4 footer' style={ footerStyle }>
          <Container textAlign='center'>
            <Image centered size='mini' className="picSpin" src="/images/husky.png" alt="Husky" tabIndex="1" />
            <Divider inverted section />
            <List horizontal inverted divided link size='small'>
              <List.Item as='a' href='#'>
                Site Map
          </List.Item>
              <List.Item as='a' href='#'>
                Contact Us
          </List.Item>
              <List.Item as='a' href='#'>
                Terms and Conditions
          </List.Item>
              <List.Item as='a' href='#'>
                Privacy Policy
          </List.Item>
            </List>
          </Container>
        </Segment>
      </footer>
    );
  }
}

export default Footer;
