import * as React from 'react';
import { connect } from 'react-redux';
// import { updateNumEntry } from '../../state/actions/field_actions';
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

  fieldEntries = () => {
    let ids = [1,2,3,1].map( (id) => (''+id) );
    return ids.map( (id) => {
      const value = this.props.value[id+''];
      return (
        <NumEntry id={id+''} value={value} />
      );
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>test</legend>
          <label>
            Value:
            {this.fieldEntries()}
          </label>
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  // dispatchUpdateField: (value) => dispatch(updateNumEntry(value))
});

const mapStateToProps = (state) => ({
  value: state.field.value
});

const FormationForm = connect(mapStateToProps, mapDispatchToProps)(FormationFormBase);
export { FormationForm };