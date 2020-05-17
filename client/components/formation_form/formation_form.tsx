import * as React from 'react';
import { connect } from 'react-redux';
import { updateField } from '../../state/actions/field_actions';


import { FormationFormProps, FormationFormState } from './formation_form.types';

class FormationFormBase extends React.Component<FormationFormProps, FormationFormState> {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    console.log("FormationForm Mounted!");
    this.props.dispatchUpdateField('initial value');
  }

  handleChange(event) {
    this.props.dispatchUpdateField(event.target.value);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.props.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>test</legend>
          <label>
            Value:
            <input type="text" value={this.props.value} onChange={this.handleChange} />
          </label>
          <span>{this.props.value}</span>
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateField: (value) => dispatch(updateField(value))
});

const mapStateToProps = function (state) {
  // debugger
  return {
    value: state.field.value
  }
}

const FormationForm = connect(mapStateToProps, mapDispatchToProps)(FormationFormBase);
export { FormationForm };