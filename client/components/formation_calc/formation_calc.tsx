import * as React from 'react';
import { connect } from 'react-redux';
// import { updateNumEntry } from '../../state/actions/field_actions';
import { NumEntry } from '../num_entry';

import { FormationFormProps, FormationFormState } from './formation_calc.types';

class FormationFormBase extends React.Component<FormationFormProps, FormationFormState> {
  constructor(props) {
    super(props);
    this.setState({marchCapacity: this.props.initMarchCapacity});
    this.setState({name: this.props.initName});
  }

  componentWillMount() {
  }

  handleChange(event) {
  }

  handleSubmit(event) {
     alert('The form was submitted');
  }

  fieldEntries = () => {
    let ids = [
      'Infantry',
      'Cavalry',
      'Distance'
    ].map( (id) => (''+id) );
    return ids.map( (id) => {
      const value = this.props.value[id+''];
      const strId = ''+id;
      return (
        <NumEntry id={strId} value={value} label={strId}/>
      );
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="FormCalc">
        <fieldset>
          <legend>March Capacity</legend>
          <NumEntry id={'march_cap'} value='1000' label='' />
        </fieldset>
        <fieldset>
          <legend>Tier 12</legend>
          {this.fieldEntries()}
        </fieldset>
        <input type="submit" value="Submit" />
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

const FormationCalc = connect(mapStateToProps, mapDispatchToProps)(FormationFormBase);
export { FormationCalc };