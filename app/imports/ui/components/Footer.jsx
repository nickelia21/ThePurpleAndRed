import React from 'react';
import {
  Segment,
  List,
  Divider,
  Image,
  Container,
} from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
// class Footer extends React.Component {
//   render() {
//     const divStyle = { padding: '20px', marginTop: '40px' };
//     return (
//       <footer>
//         <div style={divStyle} className='my-footer theme-d4'>
//           <hr />
//           Go fuck yourself
//         </div>
//       </footer>
//     );
//   }
// }

class Footer extends React.Component {
  render() {
    return (
      <Segment inverted vertical className='theme-d4' style={{ margin: '8rem 0rem 0rem', padding: '2rem 0rem' }}>
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
    );
  }
}

export default Footer;
