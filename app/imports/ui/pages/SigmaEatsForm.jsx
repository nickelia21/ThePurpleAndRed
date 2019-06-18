import React from 'react';
import { Stuffs, StuffSchema } from '/imports/api/stuff/stuff';
import { Grid, Segment, Header } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';

/** Renders the Page for adding a document. */
class SigmaEatsForm extends React.Component {

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  insertCallback(error) {
    if (error) {
      Bert.alert({
        type: 'danger',
        icon: 'fas fa-check',
        message: `Add failed: ${error.message}`,
      });
    } else {
      Bert.alert({
        type: 'success',
        icon: 'fas fa-times',
        message: 'Add succeeded! Your sigma should be arriving soon with your food.',
      });
      this.formRef.reset();
    }
  }

  /** On submit, insert the data. */
  submit(data) {
    const { name, sigma, description, restaurant, when, where, comments } = data;
    const owner = Meteor.user().username;
    const completed = false;
    Stuffs.insert({ name, sigma, description, restaurant, when, where, comments, owner, completed },
      this.insertCallback);
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    return (
      <Grid container centered className='w3-container'>
        <Grid.Column>
          <Header as="h2" textAlign="center">Sigma Eats Form</Header>
          <AutoForm ref={(ref) => { this.formRef = ref; }} schema={StuffSchema} onSubmit={this.submit}>
            <Segment>
              <TextField name='name' />
              <TextField name='sigma' />
              <TextField name='description' />
              <TextField name='restaurant' />
              <TextField name='where' />
              <LongTextField name='comments' />
              <SubmitField value='Submit' />
              <ErrorsField />
              <HiddenField name='owner' value='fakeuser@foo.com' />
              <HiddenField name='completed' value='false' />
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SigmaEatsForm;
