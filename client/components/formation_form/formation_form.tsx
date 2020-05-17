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

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>test</legend>
          <label>
            Value:
            <NumEntry id={'1'} value={this.props.value}/>
            <NumEntry id={'2'} value={this.props.value}/>
            <NumEntry id={'3'} value={this.props.value}/>
            <NumEntry id={'4'} value={this.props.value}/>
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