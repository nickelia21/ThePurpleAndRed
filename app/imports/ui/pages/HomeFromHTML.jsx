import React from 'react';
import { Grid, Button, Image } from 'semantic-ui-react';

{/** A simple static component to render some text for the landing page. */ }
{/*
class Home extends React.Component {
  render() {
    return (
      <body>
        <Grid verticalAlign='left' textAlign='center' container>

          <Grid.Column width={4}>
            <Image circular className="w3-button w3-hover-white picSpin" src="/images/husky.png" alt="Husky" tabIndex="1" />
          </Grid.Column>

          <Grid.Column width={8}>
            <h1>Welcome to ThePurpleAndRed</h1>
            <p>Please sign the fuck in</p>
          </Grid.Column>

        </Grid>
      </body>
    */}

class Home extends React.Component {
  render() {
    return (
      /* Page Container */
      <Grid celled style={{ marginTop: "20px" }}>
        {/* The Grid */}
        < Grid className="w3-row" >
          {/* Left Column */}
          < Grid.Column width={3}>
            {/* Profile */}
            < Grid >
              <Grid className="w3-container">
                <h3 className="w3-center">Nick Elia</h3>
                <Image circular className="w3-center" src="/images/avatar.png" style={{ height: "106px", width: "106px" }} alt="Avatar" />
                <hr />
                <p><i className="fa fa-star fa-fw w3-margin-right w3-text-theme" /> Epsilon </p>
                <p><i className="fa fa-home fa-fw w3-margin-right w3-text-theme" /> Philadelphia, PA </p>
                <p><i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme" /> January 20, 1998 </p>
              </Grid>
            </Grid >
            <br />

            {/* Accordion */}
            {/* Should I just take out?? Why would we need this?*/}
            <Grid className="w3-card w3-round">
              <Grid className="w3-white">
                <Button className="fa fa-circle-notch fa-fw w3-margin-right">My Groups</Button>
                <Grid id="Demo1" className="w3-hide w3-container">
                  <p>Some text..</p>
                </Grid>
                <Button className="fa fa-calendar-check fa-fw w3-margin-right">My Events</Button>
                <Grid id="Demo2" className="w3-hide w3-container">
                  <p>Some other text..</p>
                </Grid>
                <Button className="fa fa-users fa-fw w3-margin-right">My Photos</Button>
                <Grid id="Demo3" className="w3-hide w3-container">
                  <Grid className="w3-row-padding">
                    <br />
                    <Grid className="w3-half">
                      <Image className="w3-margin-bottom" src="/images/lights.jpg" style={{ width: "100%" }} alt="Avatar" />
                    </Grid>
                    <Grid className="w3-half">
                      <Image className="w3-margin-bottom" src="/images/nature.jpg" style={{ width: "100%" }} alt="Avatar" />
                    </Grid>
                    <Grid className="w3-half">
                      <Image className="w3-margin-bottom" src="/images/mountains.jpg" style={{ width: "100%" }} alt="Avatar" />
                    </Grid>
                    <Grid className="w3-half">
                      <Image className="w3-margin-bottom" src="/images/forest.jpg" style={{ width: "100%" }} alt="Avatar" />
                    </Grid>
                    <Grid className="w3-half">
                      <Image className="w3-margin-bottom" src="/images/nature.jpg" style={{ width: "100%" }} alt="Avatar" />
                    </Grid>
                    <Grid className="w3-half">
                      <Image className="w3-margin-bottom" src="/images/snow.jpg" style={{ width: "100%" }} alt="Avatar" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <br />

            {/* End Left Column */}
          </Grid.Column>

          {/* Middle Column */}
          < Grid.Column width={13} >
            <Grid className="w3-row-padding">
              <Grid className="w3-col m12">
                <Grid className="w3-card w3-round w3-white">
                  <Grid className="w3-container w3-padding">
                    <h5 className="w3-opacity">How we doin??</h5>
                    <p contentEditable="true" className="w3-border w3-padding">Status: Feeling Blue</p>
                    <Button className="w3-button w3-theme"><i className="fa fa-pencil-alt" />  Post</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid className="w3-container w3-card w3-white w3-round w3-margin">
              <br />
              <Image className="w3-left w3-circle w3-margin-right" src="/images/avatar.png" style={{ width: "60px" }} alt="AvatarJDoe" />
              <span className="w3-right w3-opacity">1 min</span>
              <h4>John Doe</h4>
              <br />
              <hr className="w3-clear" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.</p>
              <Grid className="w3-row-padding" style={{ margin: "0 -16px" }}>
                <Grid className="w3-half">
                  w3-left w3-circle w3-margin-right
                    <Image className="w3-margin-bottom" src="/images/lights.jpg" style={{ width: "100%" }} alt="Northern Lights" />
                </Grid>
                <Grid className="w3-half">
                  <Image className="w3-margin-bottom" src="/images/nature.jpg" style={{ width: "100%" }} alt="Nature" />
                </Grid>
              </Grid>
              <Button className="w3-button w3-theme-d1 w3-margin-bottom"><i className="fa fa-thumbs-up" />
                Like</Button>
              <Button className="w3-button w3-theme-d2 w3-margin-bottom"><i className="fa fa-comment" />
                Comment</Button>
            </Grid>

            <Grid className="w3-container w3-card w3-white w3-round w3-margin">
              <br />
              <Image className="w3-left w3-circle w3-margin-right" src="/images/avatar.png" style={{ width: "60px" }} alt="Avatar" />
              <span className="w3-right w3-opacity">16 min</span>
              <h4>Jane Doe</h4>
              <br />
              <hr className="w3-clear" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.</p>
              <Button className="w3-button w3-theme-d1 w3-margin-bottom"><i className="fa fa-thumbs-up" />
                Like</Button>
              <Button className="w3-button w3-theme-d2 w3-margin-bottom"><i className="fa fa-comment" />
                Comment</Button>
            </Grid>

            <Grid className="w3-container w3-card w3-white w3-round w3-margin">
              <br />
              <Image className="w3-left w3-circle w3-margin-right" src="/images/avatar.png" style={{ width: "60px" }} alt="Avatar" />
              <span className="w3-right w3-opacity">32 min </span>
              <h4>Angie Jane</h4>
              <br />
              <hr className="w3-clear" />
              <p>Have you seen this?</p>
              <Image className="w3-margin-bottom" src="/images/nature.png" style={{ width: "100%" }} alt="Nature" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.</p>
              <Button className="w3-button w3-theme-d1 w3-margin-bottom"><i className="fa fa-thumbs-up" />
                Like</Button>
              <Button className="w3-button w3-theme-d2 w3-margin-bottom"><i className="fa fa-comment" />
                Comment</Button>
            </Grid>

            {/* End Middle Column */}
          </Grid.Column>

          {/* Right Column */}
          < Grid className="w3-col m2" >
            <Grid className="w3-card w3-round w3-white w3-center">
              <Grid className="w3-container">
                <p>Upcoming Events:</p>
                <Image src="/images/forest.png" style={{ width: "100%" }} alt="Forest" />
                <p><strong>Holiday</strong></p>
                <p>Friday 10:00 PM</p>
                <p><Button className="w3-button w3-block w3-theme-l4">Info</Button></p>
              </Grid>
            </Grid>
            <br />

            <Grid className="w3-card w3-round w3-white w3-center">
              <Grid className="w3-container">
                <p>Friend Request</p>
                <Image src="/images/avatar.png" style={{ width: "50%" }} alt="Avatar" />
                <br />
                <span>Jane Doe</span>
                <Grid className="w3-row w3-opacity">
                  <Grid className="w3-half">
                    <Button className="w3-button w3-block w3-green w3-section" title="Accept"><i
                      className="fa fa-check" /></Button>
                  </Grid>
                  <Grid className="w3-half">
                    <Button className="w3-button w3-block w3-red w3-section" title="Decline"><i
                      className="fa fa-times" /></Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <br />

            <Grid className="w3-card w3-round w3-padding-extra-large w3-center w3-block">
              <Image className="w3-button w3-hover-white picSpin" src="/images/husky.png" style={{ height: "120px" }} alt="Husky" tabIndex="1" />
            </Grid>
            <br />

            {/* End Right Column */}
          </Grid >

          {/* End Grid */}
        </Grid >

        {/* End Page Container */}
      </Grid >

    );
  }
}

export default Home;