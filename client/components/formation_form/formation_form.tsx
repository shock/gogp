import * as React from 'react';

import { FormationFormProps, FormationFormState } from './formation_form.types';

class FormationForm extends React.Component<FormationFormProps, FormationFormState> {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>test</legend>
          <label>
            Value:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <span>{this.state.value}</span>
        </fieldset>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export { FormationForm };