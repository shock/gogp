import * as React from 'react';
import { connect } from 'react-redux';
// import { updateField } from '../../state/actions/field_actions';
import { NumEntry } from '../num_entry';

import { FormationFormProps, FormationFormState } from './formation_form.types';

class FormationFormBase extends React.Component<FormationFormProps, FormationFormState> {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  handleChange(event) {
  }

  handleSubmit(event) {
     alert('The form was submitted');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>test</legend>
          <label>
            Value:
            <NumEntry id={1} />
            <NumEntry id={2} />
            <NumEntry id={3} />
            <NumEntry id={1} />
          </label>
          <span>{this.props.value}</span>
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  // dispatchUpdateField: (value) => dispatch(updateField(value))
});

const mapStateToProps = (state) => ({
  // value: state.field.value
});

const FormationForm = connect(mapStateToProps, mapDispatchToProps)(FormationFormBase);
export { FormationForm };