import * as React from 'react';

import { FormationFormProps, FormationFormState } from './formation_form.types';


// import * as React from “react”
// interface WelcomeProps {
//  name?: string, // Change the required prop to an optional prop.
// }
// const Welcome: React.SFC<WelcomeProps> = (props) => {
//  return <h1>Hello, {props.name}</h1>;
// }
// Welcome.defaultProps = {
//  name: “Guest User”, // This value is adopted when name prop is omitted.
// }

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
        <label>
          Value:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <span>{this.state.value}</span>
      </form>
    );
  }
}

export { FormationForm };