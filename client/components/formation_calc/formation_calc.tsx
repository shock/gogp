import * as React from 'react';
import { connect } from 'react-redux';
// import { updateNumEntry } from '../../state/actions/field_actions';
import { NumEntry } from '../num_entry';
import { updateNumEntry } from '../../state/actions/num_entry_actions';

import { FormationCalcProps, FormationCalcState } from './formation_calc.types';

class FormationCalcBase extends React.Component<FormationCalcProps, FormationCalcState> {
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

  createNumEntry(id, label=undefined) {
    const value = this.props.value[''+id];
    const strId = ''+id;
    if( label === undefined ) { label = strId }
    return (
      <NumEntry key={strId} id={strId} value={value} label={label}/>
    )
  }

  tierDefEntries = () => {
    let ids = [
      'Infantry',
      'Cavalry',
      'Distance',
    ];
    return ids.map( (id) => {
      return this.createNumEntry(id)
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="FormCalc">
        <fieldset>
          <legend>March Capacity</legend>
          {this.createNumEntry('march_cap', 'March Cap')}
        </fieldset>
        <fieldset>
          <legend>Tier 12</legend>
          {this.tierDefEntries()}
          {}
        </fieldset>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // dispatchUpdateField: (id,value) => dispatch(updateNumEntry(id,value))
});

const mapStateToProps = (state) => ({
  value: state.field.value
});

const FormationCalc = connect(mapStateToProps, null)(FormationCalcBase);
export { FormationCalc };