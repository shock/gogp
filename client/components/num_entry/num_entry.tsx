import * as React from 'react';
import { connect } from 'react-redux';
import { updateField } from '../../state/actions/field_actions';


import { NumEntryProps, NumEntryState } from './types';

class NumEntryBase extends React.Component<NumEntryProps, NumEntryState> {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(`NumEntry Mounted with id: ${this.props.id}`);
    this.updateValue('0');
  }

  handleChange(event) {
    this.updateValue(event.target.value);
  }

  updateValue(value) {
    let val = parseFloat(value);
    if (this.state && this.state.percentage) {

    }
    if( isNaN(val) ) { val = 0; }
    this.props.dispatchUpdateField(this.props.id, ''+val);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.props.value);
    event.preventDefault();
  }

  render() {
    console.log(this.props);
    return (
      <div className="NumEntry">
        <input type="text" value={this.props.value[this.props.id]} onChange={this.handleChange} />
      </div>

    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateField: (id,value) => dispatch(updateField(id,value))
});

const mapStateToProps = (state) => ({
  value: state.field.value
});

const NumEntry = connect(mapStateToProps, mapDispatchToProps)(NumEntryBase);
export { NumEntry };